import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 text-sm tracking-[0.12em] uppercase font-body font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold";

  const variants = {
    primary:
      "bg-charcoal text-warm-white px-8 py-4 hover:bg-gold hover:-translate-y-0.5 hover:shadow-md",
    outline:
      "border border-charcoal text-charcoal px-8 py-4 hover:border-gold hover:text-gold hover:-translate-y-0.5 hover:shadow-sm",
    ghost:
      "text-charcoal underline-offset-4 hover:text-gold hover:underline",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
