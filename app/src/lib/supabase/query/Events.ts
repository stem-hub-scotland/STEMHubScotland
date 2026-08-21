import { createClient } from "../server";
import { assert } from "console";
import { type Event } from "@t/Events";
import { type Uuid } from "@t/Uuid";

export async function getEvents(): Promise<Event[] | null | undefined> {
  const supabase = await createClient();

  const { data, error: select_error } = await supabase
    .from("Events")
    .select()
    .overrideTypes<Event[]>();

  if (select_error) {
    assert(!select_error, "somehow there was a select_error");
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

export async function getEvent(uuid: Uuid): Promise<Event | null | undefined> {
  const supabase = await createClient();

  const { data, error: select_error } = await supabase
    .from("Events")
    .select()
    .eq("id", uuid)
    .single()
    .overrideTypes<Event>();

  if (select_error) {
    assert(!select_error, "somehow there was a select_error");
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

  if ("Error" in data) {
    console.log(
      "somehow you got multiple values back even though it was cast to single",
    );
    return;
  }

  return data;
}

export async function getFormattedEvents(): Promise<
  Event[] | null | undefined
> {
  const supabase = await createClient();

  const { data, error: select_error } = await supabase
    .from("Events")
    .select("id, title, date")
    .overrideTypes<Event[]>();

  if (select_error) {
    assert(!select_error, "somehow there was a select_error");
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
