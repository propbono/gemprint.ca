import { Company, Prisma, PrismaClient, ShippingAddress } from "@prisma/client";

export type ICustomer = Prisma.CompanyGetPayload<{
  include: { shippingAddresses: true };
}>;

export const getCustomers = async (): Promise<Array<ICustomer>> => {
  const client = new PrismaClient();
  return await client.company.findMany({
    include: { shippingAddresses: true },
  });
};
