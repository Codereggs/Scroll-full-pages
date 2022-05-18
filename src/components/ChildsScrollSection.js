import React, { useEffect, useRef, useState } from "react";

const ChildsScrollSection = ({ direction, children, style, className }) => {
  const childrenRef = useRef();
  //Direcciones
  const [axis, setAxis] = useState(direction);
  useEffect(() => {
    console.log(direction);
    if (direction === "horizontal") setAxis("horizontal");
    else setAxis("vertical");
  }, []);

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
