import { Row } from "@/components/layout";
import { Heading } from "@/components/typography";
import { DashboardFilter, DashboardLayout } from "@/features/dashboard";

// test

function Dashboard() {
  return (
    <>
      <Row>
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
