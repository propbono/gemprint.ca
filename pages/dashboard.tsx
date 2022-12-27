import { Container, Section } from "components";
import { DashboardLayout } from "layouts";
import type { NextPage } from "next";
import { signOut } from "next-auth/react";

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout>
      <Section>
        <Container>
          <h1>Dashboard View. </h1>
          <p>Protected route. Cointainer for Dashboard</p>
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default Dashboard;
