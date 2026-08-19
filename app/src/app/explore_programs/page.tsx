import { requireRole } from "@/lib/supabase/GetAuth";

async function ExplorePrograms() {
  await requireRole();
  return <div>ExplorePrograms</div>;
}

export default ExplorePrograms;
