import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href={"/"} className="hover:bg-blue-50 rounded-sm">
      <div className="flex-col text-xl">
        <div className="flex gap-1">
          <h1 className="text-black font-semibold">STEM</h1>
          <h1 className="text-blue-800 font-semibold">Scotland</h1>
        </div>
        <h1 className="text-gray-400 text-lg font-semibold">HUB</h1>
      </div>
    </Link>
  );
}
