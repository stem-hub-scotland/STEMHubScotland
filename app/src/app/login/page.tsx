import { requireRole } from "@/lib/supabase/GetAuth";
import LoginForm from "./LoginForm";

export default async function Login() {
  await requireRole(["anon"]);
  return <LoginForm />;
}
