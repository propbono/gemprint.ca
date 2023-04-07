import { Container, Section } from "components";
import { DashboardLayout } from "layouts";

export const Orders = () => {
  return (
    <DashboardLayout>
      <Section>
        <Container>
          <h1>Orders View. </h1>
          <p>Protected route. Cointainer for Orders</p>
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Orders;
