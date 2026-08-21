import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href={"/"} className="hover:bg-blue-50 rounded-sm">
      <div className="flex-col text-l">
        <div className="flex gap-1">
          <h1 className="text-slate-700 font-bold tracking-wide">STEM</h1>
          <h1 className="text-blue-800 font-semibold tracking-wide">
            Scotland
          </h1>
        </div>
        <h1 className="text-gray-400 text-l font-semibold">HUB</h1>
      </div>
    </Link>
  );
}
