import Link from "next/link";
import { type Role } from "@t/roles";
import { get_role } from "@/lib/supabase/GetAuth";
import { get } from "http";

async function NavBar() {
  const value: {
    display: string;
    link: string;
    roles_needed: Role[];
    role: Role;
  }[] = [
    {
      display: "About",
      link: "/about",
      roles_needed: [],
      role: await get_role(),
    },
    {
      display: "Dashboard",
      link: "dashboard",
      roles_needed: [],
      role: await get_role(),
    },
    {
      display: "Event Calendar",
      link: "/event_calendar",
      roles_needed: [],
      role: await get_role(),
    },
    {
      display: "Explore Programs",
      link: "/explore_programs",
      roles_needed: [],
      role: await get_role(),
    },
    {
      display: "Student Forums",
      link: "/student_forums",
      roles_needed: ["student"],
      role: await get_role(),
    },
    {
      display: "Volunteering",
      link: "/volunteering",
      roles_needed: ["volunteer"],
      role: await get_role(),
    },
  ];
  return (
    <div className="flex items-center justify-between bg-white border-b-2 border-gray-300 mx-5 p-1 px-20 h-20">
      <Link href={"/"} className="hover:bg-blue-50 rounded-sm">
        <div className="flex-col text-xl">
          <div className="flex gap-1">
            <h1 className="text-black font-semibold">STEM</h1>
            <h1 className="text-blue-800 font-semibold">Scotland</h1>
          </div>
          <h1 className="text-gray-400 text-lg font-semibold">HUB</h1>
        </div>
      </Link>

      <div className="flex gap-2">
        {value.map(({ display, link, roles_needed, role }, index) => {
          return (
            (roles_needed.length === 0 || roles_needed.includes(role)) && (
              <Link
                href={link}
                key={index}
                className="flex justify-center w-40 border-2 border-gray-300 p-1 rounded-lg hover:bg-blue-50">
                <div className="text-black font-semibold">{display}</div>
              </Link>
            )
          );
        })}
        {(await get_role()) !== "anon" ? (
          <Link
            href="\profile"
            className="flex justify-center text-white w-40 p-1 ml-12 rounded-lg bg-blue-700 hover:bg-blue-800">
            Profile
          </Link>
        ) : (
          <Link
            href="\login"
            className="flex justify-center text-white w-40 p-1 ml-12 rounded-lg bg-blue-700 hover:bg-blue-800">
            Login/ Signup
          </Link>
        )}
      </div>
    </div>
  );
}
export default NavBar;
