import { requireRole } from "@/lib/supabase/GetAuth";

async function student_forums() {
  await requireRole();
  return (
    <main className="flex flex-col gap-10 justify-center w-full h-3/4 p-10 items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-6xl text-slate-700">Welcome to</h2>
        <h1 className="text-6xl text-primary-hover">Student Forums</h1>
      </div>
      <p className="text-center">
        This is a place for students to discuss STEM topics,
        <br /> ask questions, and share resources.
      </p>
      <p className="text-red-600 text-center">
        Forums is currently being developed. <br />
        Check back in later to see it this feature has launched.
      </p>
    </main>
  );
}

export default student_forums;
