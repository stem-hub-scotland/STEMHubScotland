import { createClient } from "./server";
import { assert } from "console";
import { type Event } from "@t/Events";

export default async function GetEvents(): Promise<Event[] | null | undefined> {
  const supabase = await createClient();

  const { data, error: select_error } = await supabase
    .from("Events")
    .select()
    .overrideTypes<Event[]>();

  if (select_error) {
    console.log(JSON.stringify(select_error, null, 2));
    return;
  }

  if (!data) {
    console.log("probably no events");
    console.log(
      "there was a coder error the database type needs to be updated with ```npx supabase gen types typescript --project-id THE_PROJECT_ID > src/types/database.ts ``` replace THE_PROJECT_ID with the project id from the .env",
    );
    return;
  }

  return data;
}
