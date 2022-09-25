import React from "react";

import { Footer, Header } from "components";

export interface IDashboardLayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
}

export const DashboardLayout: React.FC<IDashboardLayoutProps> = (props) => {
  return (
    <>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
