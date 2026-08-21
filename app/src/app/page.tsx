import Link from "next/link";
import { requireRole } from "@/lib/supabase/GetAuth";

import LinkButton from "@/Components/ui/LinkButton";

export default async function Home() {
  await requireRole();
  return (
    <main
      className="
        h-full
        bg-[radial-gradient(circle_at_85%_90%,blue_0%,white_50%)]"
    >
      <div className="flex flex-col justify-center items-center w-1/2 h-full">
        <div className="w-3/4 flex flex-col gap-5">
          <div>
            <h1 className="text-6xl text-slate-700">Discover</h1>
            <h1 className="text-6xl text-primary-hover">Scotland's STEM</h1>
            <h1 className="text-6xl mb-4 text-slate-700">Opportunities</h1>
          </div>

          <p className="mb-6">
            The central hub for scottish teachers, students, volunteers and
            event organisers to discover opportunities, get critical information
            and meet others.
          </p>
          <div className="flex flex-row gap-4">
            <LinkButton className="flex-1" href="/events">
              Browse Events
            </LinkButton>
            <LinkButton className="flex-1" href="/programs">
              Explore Programs
            </LinkButton>
          </div>
        </div>
      </div>
    </main>
  );
}
