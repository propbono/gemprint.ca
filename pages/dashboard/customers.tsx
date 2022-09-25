import { Container, Section } from "components";
import { DashboardLayout } from "layouts";

export const Customers = () => {
  return (
    <DashboardLayout>
      <Section>
        <Container>
          <h1>Customers View. </h1>
          <p>Protected route. Cointainer for Customers</p>
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Customers;
