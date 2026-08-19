import { requireRole } from "@/lib/supabase/GetAuth";

async function event_organising() {
  await requireRole();
  return <div>event_organising</div>;
}
export default event_organising;
