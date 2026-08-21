import { requireRole } from "@/lib/supabase/GetAuth";
import {
  getEvent,
  getEvents,
  getFormattedEvents,
} from "@l/supabase/query/Events";

import DividerLine from "@c/ui/DividerLine";
import ListEventCard from "./ListEventCard";

import { FormattedEvent, type Event } from "@t/Events";

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
  [M in Month]: FormattedEvent[];
};

async function Events() {
  //await requireRole();

  const events = await getFormattedEvents();

  if (!events) {
    return (
      <main className="flex flex-col p-10 h-full w-full">
        <p className="text-text-primary h-full w-full flex items-center justify-center text-5xl font-bold">
          Unable To Load Events!
        </p>
      </main>
    );
  }

  // creates a list of the months starting with the current month
  let thisMonthIndex = new Date().getMonth();
  let monthsInOrder = months
    .slice(thisMonthIndex)
    .concat(months.slice(0, thisMonthIndex));

  // Create an entry for every month in order.
  // This means months with no events can still be displayed.
  const displayMonths: DisplayMonth = {} as DisplayMonth;
  monthsInOrder.forEach((month) => (displayMonths[month] = []));

  // Put each event into the correct month.
  events.forEach((event) => {
    const date = new Date(event.date);
    const monthIndex = date.getMonth();

    displayMonths[months[monthIndex]].push(event);
  });

  console.log("filled displayMonths:", displayMonths);

  return (
    <main className="flex flex-col p-10">
      {monthsInOrder.map((month) => {
        let current_event = displayMonths[month];

        return (
          <section key={month} className="mb-10">
            {/* Month heading */}
            <h2 className="mb-2 text-3xl font-bold text-text-primary">
              {month}
            </h2>

            <DividerLine orientation="horizontal" />

            {/* Events for this month */}
            {current_event.length > 0 ? (
              <div className="mt-4 flex flex-col gap-4">
                {current_event.map((event) => (
                  <ListEventCard
                    key={event.id}
                    title={event.title}
                    description=""
                    link=""
                    date={event.date}
                  />
                ))}
              </div>
            ) : (
              <p className="mt-4 text-text-primary">No events this month.</p>
            )}
          </section>
        );
      })}
    </main>
  );
}

export default Events;
