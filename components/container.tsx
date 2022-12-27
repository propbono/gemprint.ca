import React from "react";

interface IContainerProps {
  children: React.ReactElement | Array<React.ReactElement>;
  className?: string;
}

export const Container: React.FC<IContainerProps> = (props) => {
  return (
    <div
      className={`container relative z-auto px-4 mx-auto ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
