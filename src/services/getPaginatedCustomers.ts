import { Company, PrismaClient } from "@prisma/client";

export interface IPaginatedCustomers {
  customers: Array<Company>;
  hasMore: Boolean;
}

export interface IGetCustomersArgs {
  page: number;
  resultPerPage: number;
}

export const getPaginatedCustomers = async (
  args: IGetCustomersArgs
): Promise<IPaginatedCustomers | Error> => {
  const client = new PrismaClient();

  const numberOfCompanies = await client.company.count();
  const hasMore =
    args.page !== Math.ceil(numberOfCompanies / args.resultPerPage);

  const customers = await client.company.findMany({
    skip: (args.page - 1) * args.resultPerPage,
    take: args.resultPerPage,
  });

  return { customers, hasMore };
};
