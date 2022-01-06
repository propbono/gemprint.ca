import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="container relative z-auto px-4 mx-auto lg:px-0">
      {children}
    </div>
  );
};
