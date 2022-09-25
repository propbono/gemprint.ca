import { Container, Section } from "components";
import Link from "next/link";

export const DashboardMenu = () => {
  return (
    <Section className="bg-slate-300">
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
  );
};
