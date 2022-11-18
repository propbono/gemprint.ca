import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FC, useState } from "react";
import { ICustomer } from "src/services";

export interface ICompanyTableProps {
  data: Array<ICustomer> | null;
  pageSize: number;
}

const columnHelper = createColumnHelper<ICustomer>();

const defaultColumns = [
  columnHelper.accessor("id", {
    header: () => "Id",
  }),
  columnHelper.accessor("billingCompany", {
    header: () => "Company",
  }),
  columnHelper.accessor("billingEmail", {
    header: () => "Email",
  }),
  columnHelper.accessor(
    (row) =>
      `${row.billingAddress1} ${row.billingAddress2} 
      ${row.billingCity}  ${row.billingProvince} ${row.billingPostalCode}`.trim(),
    {
      id: "billingAddress",
      header: "Billing Address",
    }
  ),
  columnHelper.accessor(
    (row) =>
      `${row.shippingAddresses[0].shippingAddress1} ${row.shippingAddresses[0].shippingAddress2} 
      ${row.shippingAddresses[0].shippingCity}  ${row.shippingAddresses[0].shippingProvince} ${row.shippingAddresses[0].shippingPostalCode}`.trim(),
    {
      id: "shippingAddress",
      header: "Shipping Address",
    }
  ),
  columnHelper.display({
    header: "Actions",
  }),
];

export const CompanyTable: FC<ICompanyTableProps> = (props) => {
  const [columns] = useState<typeof defaultColumns>(() => [...defaultColumns]);

  const table = useReactTable({
    data: props.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const [state, setState] = useState(table.initialState);

  table.setOptions((prev) => ({
    ...prev,
    state: {
      ...state,
      pagination: {
        ...state.pagination,
        pageSize: props.pageSize,
      },
    },
    onStateChange: setState,
  }));

  if (!props.data) return null;
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-6 py-3 text-xs font-semibold text-left text-gray-100 uppercase align-middle whitespace-wrap bg-secondary"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-wrap"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* //TODO refactor to a separate component */}
      <div className="flex items-center justify-center w-full min-w-0 gap-3 mb-6 break-words bg-white rounded shadow-lg">
        <button
          className="disabled:text-gray-400"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="disabled:text-gray-400"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <span className="flex items-center gap-1">
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <button
          className="disabled:text-gray-400"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="disabled:text-gray-400"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};

export default CompanyTable;
