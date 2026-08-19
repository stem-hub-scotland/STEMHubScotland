import { requireRole } from "@/lib/supabase/GetAuth";

async function volunteering() {
  await requireRole();
  return <div>volunteering</div>;
}
export default volunteering;
