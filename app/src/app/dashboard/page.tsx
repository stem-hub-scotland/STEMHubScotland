import { requireRole } from "@/lib/supabase/GetAuth";

async function Dashboard() {
  await requireRole();
  return <div>Dashboard</div>;
}

export default Dashboard;
