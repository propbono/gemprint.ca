import React from "react";

import { Header } from "components";

export interface IPageLayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
}

export const PageLayout: React.FC<IPageLayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};
