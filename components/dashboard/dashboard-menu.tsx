import { Container, Section } from "components";
import Link from "next/link";

export const DashboardMenu = () => {
  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <Section>
        <Container>
          <h1>Menu</h1>
          <ul>
            <li>
              <Link href="/dashboard/customers">
                <a>Customers</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/orders">
                <a>Orders</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/invoices">
                <a>Invoices</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/payments">
                <a>Payments</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/products">
                <a>Products</a>
              </Link>
            </li>
          </ul>
        </Container>
      </Section>
    </nav>
  );
};
