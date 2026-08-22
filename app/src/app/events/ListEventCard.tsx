import LinkCard from "@c/ui/LinkCard";
import DividerLine from "@c/ui/DividerLine";

type ListEventCardProps = {
  title: string;
  description: string;
  date: string;
  link: string;
};

export default function ListEventCard({
  title,
  description,
  date,
  link,
}: ListEventCardProps) {
  const eventDate = new Date(date);
  const day = eventDate.getDate();
  return (
    <LinkCard href={link} className="flex flex-col lg:w-100 bg-red-200">
      <div className="flex flex-row">
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <div className="flex-1" />
        <p className="text-text-primary font-bold text-xl">
          {day}
          {getOrdinalSuffix(day)}
        </p>
      </div>
      <DividerLine orientation="horizontal" />
      <div className="bg-white w-full h-30 rounded-card_inner mt-3 text-gray-400 items-center flex justify-center">
        Picture goes here
      </div>
    </LinkCard>
  );
}

function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
