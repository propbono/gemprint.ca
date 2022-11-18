import { Company } from "@prisma/client";
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
        pageSize: 20,
      },
    },
    onStateChange: setState,
  }));

  if (!props.data) return null;
  return (
    <div className="w-full mb-12 px-4">
      <div className="relative rounded w-full px-4 py-3 bg-white flex justify-between">
        <h3 className="font-semibold text-lg text-Gray-700">Customers</h3>
        <div className="flex gap-2 items-center">
          <span>Show</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-6 align-middle py-3 text-xs uppercase whitespace-wrap font-semibold text-left bg-secondary text-gray-100"
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
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-wrap p-4"
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
      <div className="flex items-center gap-3 min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white justify-center">
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
    </div>
  );
};

export default CompanyTable;
