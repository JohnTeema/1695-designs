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

function renderChildren(children: ReactNode) {
  if (typeof children !== "string") return children;
  // Wrap trailing arrow character so it can be animated in CSS
  if (children.endsWith("→")) {
    return (
      <>
        {children.slice(0, -1)}
        <span className="arrow-char" aria-hidden="true">→</span>
      </>
    );
  }
  return children;
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
    "arrow-link inline-flex items-center justify-center gap-1 text-sm tracking-[0.12em] uppercase font-body font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer";

  const variants = {
    primary:
      "bg-clay text-warm-white px-8 py-4 hover:bg-clay/90 hover:-translate-y-0.5 hover:shadow-md",
    outline:
      "btn-outline-fill border border-charcoal text-charcoal px-8 py-4 hover:border-gold hover:text-gold hover:-translate-y-0.5 hover:shadow-sm",
    ghost:
      "text-charcoal hover:text-gold",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const content = renderChildren(children);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
