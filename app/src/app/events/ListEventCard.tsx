import LinkCard from "@c/ui/LinkCard";

type ListEventCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function ListEventCard({
  title,
  description,
  link,
}: ListEventCardProps){

  return (
    <LinkCard href={link} className="flex flex-row gap-8">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-text-primary">{description}</p>
    </LinkCard>
  );
}