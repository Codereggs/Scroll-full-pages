import React, { Children, cloneElement, useCallback } from "react";
import { css, debounce, moveInScreen } from "../utils/functions";

const MainScrollSection = ({ children }) => {
  const arrayChildren = Children.toArray(children);
  const clonedChildren = arrayChildren.map((el, i) => {
    return cloneElement(el, {
      key: i,
      index: i,
      direction: el?.direction === "horizontal" ? "horizontal" : "vertical",
      style: {
        position: "absolute",
        top: (el?.direction === "horizontal") & (i > 0) ? "0%" : `${i * 100}%`,
        left: (el?.direction === "horizontal") & (i > 0) ? `${i * 100}%` : `0%`,
        height: "100%",
        width: "100%",
      },
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
