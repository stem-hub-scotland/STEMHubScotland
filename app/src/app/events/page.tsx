import { requireRole } from "@l/supabase/GetAuth";

import DividerLine from "@c/ui/DividerLine";
import ListEventCard from "./ListEventCard";
import GetEvents from "@/lib/supabase/GetEvents";
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

type DisplayEvent = {
  month: Month;
  events: Event[];
};

async function Events() {
  await requireRole();
  const events = await GetEvents();
  if (!events) {
    console.log("no events");
    return;
  }
  // 2026-08-19T15:02:17.000Z
  var months_in: Month[] = [];

  var displayEvents: DisplayEvent[] = [];
  events.forEach((event) => {
    const date = new Date(event.date);
    const month = months[date.getMonth()];
    if (months_in.includes(month)) {
      displayEvents[displayEvents.length - 1].events.push(event);
    } else {
      displayEvents.push({ month: month, events: [event] });
    }
  });

  console.log("output:", JSON.stringify(displayEvents, null, 2));
  return (
    <div className="flex flex-col p-10">
      <pre className="text-black">{JSON.stringify(displayEvents, null, 2)}</pre>
      {displayEvents.map((eventMonth, index) => (
        <div key={index}>
          <h2 className="text-3xl text-text-primary font-bold mb-2">
            {eventMonth.month}
          </h2>
          <DividerLine orientation="horizontal" />
          {eventMonth.events.map((value, index) => {
            return (
              <ListEventCard
                key={index}
                title={value.title}
                description={value.description}
                link=""></ListEventCard>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Events;
