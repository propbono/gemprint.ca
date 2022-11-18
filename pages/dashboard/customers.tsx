import {
  CompanyTable,
  Container,
  DashboardHeaderTitle,
  PageSizeDropdown,
  Section,
} from "components";
import { Page } from "constants/default-constants";
import { DashboardLayout } from "layouts";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCompanies, ICustomer } from "../../src/services/getCustomers";

export const Customers = () => {
  const {
    isError,
    isLoading,
    data: customers,
  } = useQuery<Array<ICustomer>, Error>("companies", () => fetchCompanies(), {
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 60 * 1000,
  });

  // TODO:: Prefetching

  const [pageSize, setPageSize] = useState(Page.DEFAULT_SIZE);

  return (
    <DashboardLayout>
      <Section>
        <Container className="p-6">
          {isLoading ? (
            <DashboardHeaderTitle>Loading...</DashboardHeaderTitle>
          ) : null}
          {isError ? (
            <DashboardHeaderTitle>
              There was an error. Please try again later.
            </DashboardHeaderTitle>
          ) : null}
          {customers ? (
            <>
              <DashboardHeaderTitle>
                <div className="flex flex-row items-center gap-4 text-lg">
                  <h3 className="font-semibold text-gray-700">Customers</h3>
                  <Link href={"customers/new"}>
                    <a className="px-2 py-1 text-xs text-white rounded-lg bg-primary">
                      Add Customer
                    </a>
                  </Link>
                </div>
                <PageSizeDropdown
                  pageSize={pageSize}
                  setPageSize={setPageSize}
                />
              </DashboardHeaderTitle>
              <CompanyTable data={customers} pageSize={pageSize} />
            </>
          ) : null}
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Customers;
