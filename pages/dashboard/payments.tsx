import { Container, Section } from "components";
import { DashboardLayout } from "layouts";

export const Payments = () => {
  return (
    <DashboardLayout>
      <Section>
        <Container>
          <h1>Payments View. </h1>
          <p>Protected route. Cointainer for Payments</p>
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Payments;
