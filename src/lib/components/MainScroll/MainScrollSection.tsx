import React, { cloneElement, useCallback } from "react";
import { debounce, moveInScreen } from "@libs/utils/functions";
import "./MainScrollSection.css";

interface Props {
  children: React.PropsWithChildren<{ props: any; type: any; key: number }>[];
}

type mainStylesType = {
  position: any;
  height: string;
  width: string;
  transition: string;
  transform: string;
};

const MainScrollSection: React.FC<Props> = ({ children }: Props) => {
  let horizontalCount: number = 0;
  let verticalCount: number = 0;

  const arrayChildren = children;
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

  //Para el movimiento
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCallback = useCallback(debounce(moveInScreen, 400), []);

  return (
    <div style={mainStyles} className="sections" onWheel={debouncedCallback}>
      {clonedChildren}
    </div>
  );
};

export default MainScrollSection;
