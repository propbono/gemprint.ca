import { Company } from "@prisma/client";
import { FC } from "react";

export interface ICompanyTableProps {
  data: Array<Company> | null;
}

const styles = {
  thead: {
    th: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-wrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100",
  },
  tbody: {
    th: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-wrap p-4 text-left flex items-center",
    td: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-wrap p-4",
  },
};

export const CompanyTable: FC<ICompanyTableProps> = (props) => {
  if (!props.data) return null;
  return (
    <div className="w-full mb-12 px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-lg text-blueGray-700">
              Customers
            </h3>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className={styles.thead.th}>Company Name</th>
                <th className={styles.thead.th}>Company Email</th>
                <th className={styles.thead.th}>Billing Address</th>
                <th className={styles.thead.th}>Shipping Address</th>
                <th className={styles.thead.th}>Edit | Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((company) => (
                <tr key={company.id}>
                  <th className={styles.tbody.th}>{company.billingCompany}</th>
                  <td className={styles.tbody.td}>{company.billingEmail}</td>
                  <td className={styles.tbody.td}>{company.billingEmail}</td>
                  <td className={styles.tbody.td}>{company.billingEmail}</td>
                  <td className={styles.tbody.td}>Edit | Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompanyTable;
