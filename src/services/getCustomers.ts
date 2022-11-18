import { Prisma, PrismaClient } from "@prisma/client";
import axios from "axios";

export type ICustomer = Prisma.CompanyGetPayload<{
  include: { shippingAddresses: true };
}>;

export const getCustomers = async (): Promise<Array<ICustomer>> => {
  const client = new PrismaClient();
  return await client.company.findMany({
    include: { shippingAddresses: true },
  });
};

export const fetchCompanies = async () => {
  const response = await axios(`/api/auth/customers`);
  return response.data;
};
