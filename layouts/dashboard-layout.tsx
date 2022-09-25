import React from "react";

import { DashboardFooter, DashboardHeader, DashboardMenu } from "components";

export interface IDashboardLayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
}

export const DashboardLayout: React.FC<IDashboardLayoutProps> = (props) => {
  return (
    <>
      <DashboardHeader />
      <main className="grid grid-cols-6 gap-4">
        <DashboardMenu />
        <div className="grid-span-5">{props.children}</div>
      </main>
      <DashboardFooter />
    </>
  );
};
