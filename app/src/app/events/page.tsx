import { requireRole } from "@/lib/supabase/GetAuth";
import GetEvents from "@/lib/supabase/GetEvents";

import DividerLine from "@c/ui/DividerLine";
import ListEventCard from "./ListEventCard";

import { type Event } from "@t/Events";

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

type Month = (typeof months)[number];

type DisplayMonth = {
  month: Month;
  events: Event[];
};

async function Events() {
  //await requireRole();

  const events = await GetEvents();

  if (!events) {
    return (
      <main className="flex flex-col p-10 h-full w-full">
        <p className="text-text-primary h-full w-full flex items-center justify-center text-5xl font-bold">
          Unable To Load Events!
        </p>
      </main>
    );
  }

  // Create an entry for every month.
  // This means months with no events can still be displayed.
  const displayMonths: DisplayMonth[] = months.map((month) => ({
    month,
    events: [],
  }));

  // Put each event into the correct month.
  events.forEach((event) => {
    const date = new Date(event.date);
    const monthIndex = date.getMonth();

    displayMonths[monthIndex].events.push(event);
  });

  return (
    <main className="flex flex-col p-10">
      {displayMonths.map((month) => (
        <section key={month.month} className="mb-10">
          {/* Month heading */}
          <h2 className="mb-2 text-3xl font-bold text-text-primary">
            {month.month}
          </h2>

          <DividerLine orientation="horizontal" />

          {/* Events for this month */}
          {month.events.length > 0 ? (
            <div className="mt-4 flex flex-col gap-4">
              {month.events.map((event) => (
                <ListEventCard
                  key={event.id}
                  title={event.title}
                  description={event.description}
                  link=""
                  date={event.date}
                />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-text-primary">No events this month.</p>
          )}
        </section>
      ))}
    </main>
  );
}

export default Events;
