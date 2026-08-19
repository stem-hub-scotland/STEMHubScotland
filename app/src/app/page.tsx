import Link from "next/link";
import { requireRole } from "@/lib/supabase/GetAuth";
import "./global.css";

export default async function Home() {
  await requireRole();
  return (
    <main
      className="
        h-full
        bg-[radial-gradient(circle_at_85%_90%,blue_0%,white_50%)]">
      <div className="flex flex-col justify-center items-center w-1/2 h-full">
        <div className="w-3/4">
          <h1 className="text-6xl">Discover</h1>
          <h1 className="text-6xl">Scotland's STEM</h1>
          <h1 className="text-6xl mb-4">Opportunities</h1>
          <p className="mb-6">
            The central hub for scottish teachers, students, volunteers and
            event organisers to discover opportunities, get critical information
            and meet others.
          </p>
          <div className="flex flex-row">
            <div className="flex justify-center items-center w-1/2 rounded-md bg-blue-700 hover:bg-blue-800 m-2 min-h-10">
              <Link href="/event_calendar" className="text-white">
                Browse Events
              </Link>
            </div>
            <div className="flex justify-center items-center w-1/2 rounded-md bg-blue-700 hover:bg-blue-800 m-2 min-h-10">
              <Link href="/explore_programs" className="text-white">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
