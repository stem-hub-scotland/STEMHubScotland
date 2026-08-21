import Link from "next/link";
import { type Role } from "@t/roles";
import { get_role } from "@l/supabase/GetAuth";

import HomeButton from "./HomeButton";

async function NavBar() {
  const role = await get_role();

  const value: {
    display: string;
    link: string;
    roles_needed?: Role[];
  }[] = [
    {
      display: "About",
      link: "/about",
    },
    {
      display: "Volunteering",
      link: "/volunteering",
    },
    {
      display: "Events",
      link: "/events",
    },
    {
      display: "Explore Programs",
      link: "/programs",
    },
    {
      display: "Student Forums",
      link: "/student_forums",
    },
  ];

  return (
    <div className="flex items-center justify-between border-b-2 border-gray-300 bg-white mx-5 h-20 p-1 px-20">
      <HomeButton />

      <div className="flex gap-2">
        {value.map(({ display, link, roles_needed }) => {
          const canAccess = !roles_needed || roles_needed.includes(role);

          return (
            canAccess && (
              <Link
                href={link}
                key={link}
                className="flex w-40 justify-center rounded-lg border-2 border-gray-300 p-1 hover:bg-blue-50"
              >
                <div className="font-semibold text-black">{display}</div>
              </Link>
            )
          );
        })}

        {role !== "anon" ? (
          <Link
            href="/profile"
            className="ml-12 flex w-40 justify-center rounded-lg bg-blue-700 p-1 text-white hover:bg-blue-800"
          >
            Profile
          </Link>
        ) : (
          <Link
            href="/login"
            className="ml-12 flex w-40 justify-center rounded-lg bg-blue-700 p-1 text-white hover:bg-blue-800"
          >
            Login / Signup
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
