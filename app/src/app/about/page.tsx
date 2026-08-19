import { requireRole } from "@/lib/supabase/GetAuth";

async function about() {
  await requireRole();
  return <div>about</div>;
}
export default about;
