import { Container, Section } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsBarChartLine,
  BsCalculator,
  BsFillCartCheckFill,
  BsInboxes,
  BsPersonBoundingBox,
  BsWallet2,
} from "react-icons/bs";

export interface IDashboardMenuItemProps {
  children: React.ReactElement | Array<React.ReactElement | string>;
  href: string;
}
export const DashboardMenuItem: React.FC<IDashboardMenuItemProps> = (props) => {
  const { asPath } = useRouter();
  const isActive = asPath === props.href ? "text-primary" : "text-secondary";

  return (
    <li className="items-center">
      <Link href={props.href}>
        <a
          className={`text-xs uppercase py-3 font-bold flex items-center gap-2 ${isActive} hover:text-primary`}
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export const DashboardMenu = () => {
  return (
    // TODO: Add the hamburger the same way as in the website
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <Section>
        <Container>
          <Link href="/dashboard">
            <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
              Gemprint
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
