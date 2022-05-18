import React, { useRef } from "react";

const ChildsScrollSection = ({ direction, children, style, active }) => {
  const childrenRef = useRef();

  const childrenStyles = {
    ...style,
  };

  const clases = () => {
    return `${direction} section${!active ? "" : " active"}`;
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
