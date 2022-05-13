import React, { useEffect, useRef, useState } from "react";
import { css } from "../utils/functions";

const ChildsScrollSection = ({
  direction = "vertical",
  children,
  style,
  className,
  index,
}) => {
  const childrenRef = useRef();
  //Direcciones
  const [axis, setAxis] = useState("vertical");
  if (direction === "horizontal") setAxis("horizontal");

  const childrenStyles = {
    ...style,
  };

  const clases = () => {
    return `${axis} section${!className ? "" : " " + className}`;
  };

  return (
    <>
      <div className={clases()} ref={childrenRef} style={childrenStyles}>
        {children}
      </div>
    </>
  );
};

export default ChildsScrollSection;
