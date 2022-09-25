import React from "react";

import { DashboardFooter, DashboardHeader, DashboardMenu } from "components";

export interface IDashboardLayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
}

export const DashboardLayout: React.FC<IDashboardLayoutProps> = (props) => {
  return (
    <>
      <DashboardMenu />
      <main className="relative md:ml-64 bg-off-white">
        <DashboardHeader />
        {props.children}
        <DashboardFooter />
      </main>
    </>
  );
};
