import React, { Children, cloneElement, useCallback } from "react";
import { debounce, moveInScreen } from "../utils/functions";

const MainScrollSection = ({ children }) => {
  let horizontalCount = 0;
  let verticalCount = 0;

  const arrayChildren = Children.toArray(children);
  const clonedChildren = arrayChildren.map((el, i, arr) => {
    if (i > 0) {
      if (arr[i].props.direction === "horizontal") horizontalCount++;
      if (arr[i].props.direction === "vertical" || !arr[i].props.direction)
        verticalCount++;
    }

    const left = () => {
      if (i === 0) return "0%";
      return `${horizontalCount * 100}%`;
    };
    const top = () => {
      if (i === 0) return "0%";
      return `${verticalCount * 100}%`;
    };

    return cloneElement(el, {
      key: i,
      index: i,
      direction:
        el?.props?.direction === "horizontal" ? "horizontal" : "vertical",
      style: {
        position: "absolute",
        top: top(),
        left: left(),
        height: "100%",
        width: "100%",
      },
      verticalCount: verticalCount,
      horizontalCount: horizontalCount,
    });
  });

  //Estilos

  const mainStyles = {
    position: "relative",
    height: "100vh",
    width: "100vw",
    transition: "all 1s ease 0s",
    transform: "translate3d(0%, 0%, 0px)",
  };

  //Para el movimiento
  const debouncedCallback = useCallback(debounce(moveInScreen, 400), []);
  return (
    <div style={mainStyles} className="sections" onWheel={debouncedCallback}>
      {clonedChildren}
    </div>
  );
};

export default MainScrollSection;
