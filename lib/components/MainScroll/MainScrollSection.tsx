import React, { cloneElement } from "react";
import { moveInScreen } from "./functions";
import "./MainScrollSection.css";
interface ChildProp {
  direction: string;
  index?: number;
  style: React.CSSProperties | undefined;
  verticalCount: number;
  horizontalCount: number;
  active?: boolean | undefined;
}
interface Props {
  children: React.ReactElement<ChildProp>[];
}

type mainStylesType = {
  position: any;
  height: string;
  width: string;
  transition: string;
  transform: string;
};

const MainScrollSection: React.FC<Props> = ({ children }) => {
  let horizontalCount: number = 0;
  let verticalCount: number = 0;

  console.log("children es", children);
  const arrayChildren = Array.isArray(children) ? children : [children];
  const clonedChildren = arrayChildren.map((el, i, arr) => {
    if (i > 0) {
      if (arr[i].props.direction === "horizontal") horizontalCount++;
      if (arr[i].props.direction === "vertical" || !arr[i].props.direction)
        verticalCount++;
    }

    const left: () => string = (): string => {
      if (i === 0) return "0%";
      return `${horizontalCount * 100}%`;
    };
    const top: () => string = (): string => {
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
      active: el?.props?.active ? el?.props?.active : undefined,
    });
  });

  //Estilos

  const mainStyles: mainStylesType = {
    position: "relative",
    height: "100vh",
    width: "100vw",
    transition: "all 1s ease 0s",
    transform: "translate3d(0%, 0%, 0px)",
  };

  // Debounce
  const debounce: (callback: any, wait: any) => (...args: any[]) => void = (
    callback,
    wait
  ) => {
    let timerId: any;
    return (...args) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  };

  //Para el movimiento

  const debouncedCallback = debounce(moveInScreen, 400);

  return (
    <div style={mainStyles} className="sections" onWheel={debouncedCallback}>
      {clonedChildren}
    </div>
  );
};

export default MainScrollSection;
