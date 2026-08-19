import { twMerge } from "tailwind-merge";

type DividerLineProps = {
    orientation?: "horizontal" | "vertical";
    className?: string;
};

export default function DividerLine({ 
    orientation = "horizontal", 
    className 
}: DividerLineProps) {
    return (
        <div
            className={twMerge(
                "border-black/10 shrink-0 self-stretch",
                orientation === "horizontal" 
                    ? "w-full border-t my-6" 
                    : "h-full border-l mx-6",
                className
            )}
        />
    );
}