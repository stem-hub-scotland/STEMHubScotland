import { requireRole } from "@/lib/supabase/GetAuth";

import DividerLine from "@/Components/ui/DividerLine";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

async function Events() {
  await requireRole();
  return (
    <div className="flex flex-col p-10">
      {months.map((month) => (
        <div key={month}>
        <h2 className="text-3xl text-text-primary font-bold mb-2">
          {month}
        </h2>
        <DividerLine orientation="horizontal" />
        </div>
      ))}
    </div>
  );
}

export default Events;
