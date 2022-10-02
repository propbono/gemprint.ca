import { CompanyTable, Container, Section } from "components";
import { DashboardLayout } from "layouts";
import { FC, useState } from "react";
import { DEFAULT_PAGE } from "src/constants";
import axios from "axios";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { IPaginatedCustomers } from "../../src/services/getPaginatedCustomers";

export const Customers = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);

  const fetchCompanies = async (pageNumber = page) => {
    const response = await axios(`/api/auth/customers/${pageNumber}`);
    console.log(response);
    return response.data;
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 24 * 60 * 60 * 60 * 1000,
      },
    },
  });

  const { isError, isLoading, isFetching, data, isPreviousData } = useQuery<
    IPaginatedCustomers,
    Error
  >(["companies", page], () => fetchCompanies(page), {
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 60 * 1000,
  });

  console.log("Data", data);
  // TODO:: Prefetching

  return (
    <DashboardLayout>
      <Section>
        <Container>
          <h1 className="mt-6 mb-4 text-lg font-extrabold px-4">
            Customers View.{" "}
          </h1>
          {isLoading ? <p>Loading...</p> : null}
          <CompanyTable data={data?.customers} />
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Customers;
