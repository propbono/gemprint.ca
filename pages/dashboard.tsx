import { DashboardLayout } from "layouts";
import type { NextPage } from "next";
import { signOut } from "next-auth/react";

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout>
      <p>This is dashboard. Access only after login.</p>
      <button onClick={() => signOut()}>Sign out</button>
    </DashboardLayout>
  );
};

export default Dashboard;
