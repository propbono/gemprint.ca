import React from "react";

import { DashboardFooter, DashboardHeader } from "components";

export interface IDashboardLayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
}

export const DashboardLayout: React.FC<IDashboardLayoutProps> = (props) => {
  return (
    <>
      <DashboardHeader />
      <main>{props.children}</main>
      <DashboardFooter />
    </>
  );
};
