import axios from "axios";
import {
  CompanyTable,
  Container,
  DashboardHeaderTitle,
  PageSizeDropdown,
  Section,
} from "components";
import { Page } from "constants/default-constants";
import { DashboardLayout } from "layouts";
import { useState } from "react";
import { useQuery } from "react-query";
import { ICustomer } from "../../src/services/getCustomers";

export const Customers = () => {
  const fetchCompanies = async () => {
    const response = await axios(`/api/auth/customers`);
    return response.data;
  };

  const { isError, isLoading, data } = useQuery<Array<ICustomer>, Error>(
    "companies",
    () => fetchCompanies(),
    {
      keepPreviousData: true,
      staleTime: 24 * 60 * 60 * 60 * 1000,
    }
  );

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
          {data ? (
            <>
              <DashboardHeaderTitle>
                <h3 className="text-lg font-semibold text-Gray-700">
                  Customers
                </h3>
                <PageSizeDropdown
                  pageSize={pageSize}
                  setPageSize={setPageSize}
                />
              </DashboardHeaderTitle>
              <CompanyTable data={data} pageSize={pageSize} />
            </>
          ) : null}
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Customers;
