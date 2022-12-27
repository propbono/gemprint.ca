import { Container, DashboardMenuItem, Section } from "components";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

import {
  BsBarChartLine,
  BsCalculator,
  BsFillCartCheckFill,
  BsInboxes,
  BsPersonBoundingBox,
  BsWallet2,
} from "react-icons/bs";

export const DashboardMenu = () => {
  const { data } = useSession();

  return (
    // TODO: Add the hamburger the same way as in the website
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <Section>
        <Container>
          <Link href="/dashboard" passHref>
            <a className="flex items-center gap-3 mt-4 text-left  text-secondary mr-0 whitespace-nowrap text-sm uppercase font-bold px-0">
              <Image
                src={data?.user?.image}
                alt="logged in user picture"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p>{data?.user?.name}</p>
                Gemprint
              </div>
            </a>
          </Link>
          <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden">
            <hr className="my-4 md:min-w-full" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <DashboardMenuItem href="/dashboard">
                <BsBarChartLine />
                Dashboard
              </DashboardMenuItem>
              <DashboardMenuItem href="/dashboard/customers">
                <BsPersonBoundingBox />
                Customers
              </DashboardMenuItem>
              <DashboardMenuItem href="/dashboard/orders">
                <BsInboxes />
                Orders
              </DashboardMenuItem>
              <DashboardMenuItem href="/dashboard/invoices">
                <BsCalculator />
                Invoices
              </DashboardMenuItem>
              <DashboardMenuItem href="/dashboard/payments">
                <BsWallet2 />
                Payments
              </DashboardMenuItem>
              <DashboardMenuItem href="/dashboard/products">
                <BsFillCartCheckFill />
                Products
              </DashboardMenuItem>
            </ul>
          </div>
        </Container>
      </Section>
    </nav>
  );
};
