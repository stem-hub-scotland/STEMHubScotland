import { requireRole } from "@/lib/supabase/GetAuth";

async function EventCalendar() {
  await requireRole();
  return <div>EventCalendar</div>;
}

export default EventCalendar;
