import GetEvents from "@l/supabase/GetEvents";

export default async function page() {
  const event = await GetEvents();
  return <pre>{JSON.stringify(event, null, 2)}</pre>;
}
