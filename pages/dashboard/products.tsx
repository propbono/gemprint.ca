import { Container, Section } from "components";
import { DashboardLayout } from "layouts";

export const Products = () => {
  return (
    <DashboardLayout>
      <Section>
        <Container>
          <h1>Products View. </h1>
          <p>Protected route. Cointainer for Products</p>
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Products;
