import { type Database } from "./database";

export type Event = Database["public"]["Tables"]["events"]["Row"];

export type FormattedEvent = Pick<Event, "id" | "title" | "date">;
