import { twMerge } from "tailwind-merge";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Card({
    children,
    className = ""
}: CardProps) {

    return (
        <div
            className={twMerge(`
                rounded-card
                bg-panel/40
                p-8
                shadow-card
            `, className)}
        >
            {children}
        </div>
    );
}