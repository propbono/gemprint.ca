import { Page } from "constants/default-constants";
import { Dispatch, SetStateAction } from "react";

export interface PageSizeDropdownProps {
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
}

export const PageSizeDropdown = (props: PageSizeDropdownProps) => {
  return (
    <div className="flex items-center gap-2">
      <span>Show</span>
      <select
        value={props.pageSize}
        onChange={(e) => {
          props.setPageSize(Number(e.target.value));
        }}
      >
        {Page.PAGE_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageSizeDropdown;
