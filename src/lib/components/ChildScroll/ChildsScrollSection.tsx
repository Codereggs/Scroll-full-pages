import React from "react";

type Props = {
  direction: string;
  children: any;
  style: any;
  active: boolean;
};

const ChildsScrollSection: React.FC<Props> = ({
  direction,
  children,
  style,
  active,
}: Props) => {
  const childrenStyles = {
    ...style,
  };

  const clases: () => string = (): string => {
    return `${direction} section${!active ? "" : " active"}`;
  };

  return (
    <>
      <div className={clases()} style={childrenStyles}>
        {children}
      </div>
    </>
  );
};

export default ChildsScrollSection;
