import { requireRole } from "@/lib/supabase/GetAuth";

async function student_forums() {
  await requireRole(["student"]);
  return <div>student_forums</div>;
}
export default student_forums;
