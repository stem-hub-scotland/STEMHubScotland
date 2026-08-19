import { createClient } from "./server";
import { assert } from "console";
import { type Event } from "@t/Events";

export default async function GetEvents(): Promise<Event[] | null | undefined> {
  const supabase = await createClient();
  const {
    data: { user: user },
    error: user_error,
  } = await supabase.auth.getUser();

  if (user_error) {
    if (user_error.name !== "AuthSessionMissingError") {
      console.log("mistake were made:", user_error);
    }
    return;
  }

  // impossible to reach code ignore
  if (!user) {
    return;
  }

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
