import { Container, Section } from "components";
import { DashboardLayout } from "layouts";

export const Invoices = () => {
  return (
    <DashboardLayout>
      <Section>
        <Container>
          <h1>Invoices View. </h1>
          <p>Protected route. Cointainer for Invoices</p>
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Invoices;
