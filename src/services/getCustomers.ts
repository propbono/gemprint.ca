import { PrismaClient } from "@prisma/client";
import { IPaginatedCustomers } from "./getPaginatedCustomers";

export const getCustomers = async (): Promise<IPaginatedCustomers> => {
  const client = new PrismaClient();
  const customers = await client.company.findMany();

  return { customers, hasMore: false };
};
