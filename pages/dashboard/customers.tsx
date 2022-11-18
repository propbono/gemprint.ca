import { CompanyTable, Container, Section } from "components";
import { DashboardLayout } from "layouts";
import axios from "axios";
import { QueryClient, useQuery } from "react-query";
import { ICustomer } from "../../src/services/getCustomers";

export const Customers = () => {
  const fetchCompanies = async () => {
    const response = await axios(`/api/auth/customers`);
    return response.data;
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 24 * 60 * 60 * 60 * 1000,
      },
    },
  });

  const { isError, isLoading, isFetching, data } = useQuery<
    Array<ICustomer>,
    Error
  >("companies", () => fetchCompanies(), {
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 60 * 1000,
  });

  // TODO:: Prefetching

  return (
    <DashboardLayout>
      <Section>
        <Container className="p-6">
          {isLoading ? <p>Loading...</p> : null}
          <CompanyTable data={data} />
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Customers;
