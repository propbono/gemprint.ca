import { PrismaClient, Company, ShippingAddress } from "@prisma/client";
import customers from "./customers.json";

interface Customer {
  ID: number;
  user_login: any;
  user_email: any;
  user_url: any;
  user_registered: any;
  display_name: any;
  first_name: any;
  last_name: any;
  billing_first_name: any;
  billing_last_name: any;
  billing_company: any;
  billing_address_1: any;
  billing_address_2: any;
  billing_city: any;
  billing_postcode: any;
  billing_country: any;
  billing_state: any;
  billing_email: any;
  billing_phone: any;
  shipping_first_name: any;
  shipping_last_name: any;
  shipping_company: any;
  shipping_address_1: any;
  shipping_address_2: any;
  shipping_city: any;
  shipping_postcode: any;
  shipping_country: any;
  shipping_state: any;
}

const prisma = new PrismaClient();

const cleanDB = async () => {
  await prisma.shippingAddress.deleteMany();
  await prisma.company.deleteMany();
};

const populateAllCustomers = (customers: Customer[]) => {
  customers.forEach(async (customer: Customer) => {
    const addedCustomer = await prisma.company.create({
      data: {
        contactFirstName: customer.first_name.toString(),
        contactLastName: customer.last_name.toString(),
        billingFirstName: customer.billing_first_name.toString(),
        billingLastName: customer.billing_last_name.toString(),
        billingCompany: customer.billing_company.toString(),
        billingAddress1: customer.billing_address_1.toString(),
        billingAddress2: customer.billing_address_2.toString(),
        billingCity: customer.billing_city.toString(),
        billingPostalCode: customer.billing_postcode.toString(),
        billingCountry: customer.billing_country.toString(),
        billingProvince: customer.billing_state.toString(),
        billingPhone: customer.billing_phone
          .toString()
          .replace("(", "")
          .replace(")", "")
          .replace(" ", "")
          .replace("-", ""),
        billingEmail: customer.billing_email.toString(),
        shippingAddresses: {
          create: {
            shippingAddress1: customer.shipping_address_1.toString(),
            shippingAddress2: customer.shipping_address_2.toString(),
            shippingCity: customer.shipping_city.toString(),
            shippingCompany: customer.shipping_company.toString(),
            shippingCountry: customer.shipping_country.toString(),
            shippingFirstName: customer.shipping_first_name.toString(),
            shippingLastName: customer.shipping_last_name.toString(),
            shippingPhone: customer.billing_phone.toString(),
            shippingPostalCode: customer.shipping_postcode.toString(),
            shippingProvince: customer.shipping_state.toString(),
          },
        },
      },
    });
    console.log("Added customer: ", addedCustomer);
  });
};

const main = async () => {
  // cleanDB();
  console.log("DB - Cleaned");
  populateAllCustomers(customers);
  console.log("DB - Customers added: ", customers.length);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
