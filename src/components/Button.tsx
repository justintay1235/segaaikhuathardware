import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

const base =
  "group inline-flex items-center gap-2.5 px-7 py-3.5 text-[0.8rem] uppercase tracking-[0.18em] font-medium transition-all duration-500 ease-out";

const variants: Record<string, string> = {
  primary:
    "bg-maroon-800 text-ivory-50 hover:bg-maroon-950 shadow-[0_8px_30px_-8px_rgba(75,15,26,0.5)] hover:shadow-[0_12px_36px_-6px_rgba(75,15,26,0.6)] hover:-translate-y-0.5",
  outline:
    "border border-maroon-800/40 text-maroon-800 hover:border-maroon-800 hover:bg-maroon-800 hover:text-ivory-50",
  ghost: "text-maroon-800 hover:text-maroon-600",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <span className="transition-transform duration-500 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}
