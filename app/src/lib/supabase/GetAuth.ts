import { createClient } from "@/lib/supabase/server";
import { assert } from "console";
import { redirect } from "next/navigation";
import { type Role, roles } from "@/types/roles";

// function that returns the current Role of the logged in users. If there isn't a user logged in returns anon (anonymous)
export async function get_role(): Promise<Role> {
  const supabase = await createClient();
  const {
    data: { user: user },
    error: user_error,
  } = await supabase.auth.getUser();

  if (user_error) {
    if (user_error.name !== "AuthSessionMissingError") {
      console.log("mistake were made:", user_error);
    }
    return "anon" as Role;
  }

  // impossible to reach code ignore
  if (!user) {
    return "anon";
  }

  const { data, error: select_error } = await supabase
    .from("Users")
    .select()
    .eq("id", user.id)
    .single();

  if (select_error || !data) {
    assert(!select_error, "somehow there's a users without a table WTF");
    console.log(select_error);
    return "anon" as Role;
  }
  const result = data.role as Role;
  return result;
}

// checks if the current role is in a list of roles if not then it redirects to home page. you can leave empty to not have any requirements. Is to be used at the start of pages to check if they have the required role
export async function requireRole(allowedRoles?: Role[]): Promise<Role> {
  const role = await get_role();
  if (!allowedRoles) {
    return role;
  }
  if (!allowedRoles.includes(role)) {
    redirect("/");
  }
  return role;
}
