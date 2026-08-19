import Link from "next/link";
import { twMerge } from "tailwind-merge";

type LinkCardProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function LinkCard({
    href,
    children,
    className,
}: LinkCardProps) {

    return (
        <Link
            href={href}
            className={twMerge(`
                block

                rounded-card

                bg-panel/50
                backdrop-blur-xl

                border
                border-white/10

                p-6

                transition-all
                duration-200

                hover:scale-[1.02]
                hover:border-primary

                ${className ?? ""}
            `)}
        >
            {children}
        </Link>
    );
}