import { ReactNode } from "react";

export interface DashboardHeaderTitleProps {
  children: ReactNode | Array<ReactNode>;
}
export const DashboardHeaderTitle = (props: DashboardHeaderTitleProps) => {
  return (
    <div className="relative flex justify-between w-full px-4 py-3 mb-6 bg-white rounded shadow-lg">
      {props.children}
    </div>
  );
};

export default DashboardHeaderTitle;
