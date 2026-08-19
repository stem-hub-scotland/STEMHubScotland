import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={twMerge(`
                rounded-xl
                bg-primary
                px-6
                py-3
                font-medium
                text-white
                transition-colors
                hover:bg-primary-hover
                disabled:cursor-not-allowed
                disabled:opacity-50
                ${className ?? ""}
            `)}
            {...props}
        >
            {children}
        </button>
    )
}   