import Link from "next/link";
import { type Role } from "@t/roles";
import { get_role } from "@l/supabase/GetAuth";

import HomeButton from "./HomeButton";
import LinkButton from "./LinkButton";

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
      display: "Programs",
      link: "/programs",
    },
    {
      display: "Forums",
      link: "/student_forums",
    },
  ];

  return (
    <div className="flex items-center justify-between border-b-2 border-gray-300 bg-white mx-5 h-15 p-1 px-15">
      <HomeButton />

      <div className="flex gap-2 ">
        {value.map(({ display, link, roles_needed }) => {
          const canAccess = !roles_needed || roles_needed.includes(role);

          return (
            canAccess && (
              <LinkButton
                href={link}
                key={link}
                className="flex w-40 rounded-card text-text-primary bg-white hover:bg-primary hover:text-text-secondary h-10"
              >
                {display}
              </LinkButton>
            )
          );
        })}

        {role !== "anon" ? (
          <LinkButton href="/profile" className="ml-12 flex w-40 h-10">
            Profile
          </LinkButton>
        ) : (
          <LinkButton
            href="/login"
            className="ml-12 flex w-40 justify-center h-10"
          >
            Login
          </LinkButton>
        )}
      </div>
    </div>
  );
}

export default NavBar;
