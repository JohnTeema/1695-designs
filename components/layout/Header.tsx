"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Furniture", href: "/furniture" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the homepage, the header sits over a dark hero — use light text until scrolled.
  // On all other pages, use charcoal text from the start.
  const isHome = pathname === "/";
  const useLightText = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-sm border-b border-stone"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none group"
          onClick={() => setOpen(false)}
        >
          <span
            className={`font-heading text-2xl font-semibold tracking-wide transition-colors duration-500 ${
              useLightText ? "text-warm-white" : "text-charcoal"
            }`}
          >
            1695
          </span>
          <span
            className={`text-[10px] tracking-[0.3em] uppercase font-body transition-colors duration-500 ${
              useLightText ? "text-stone" : "text-grey"
            }`}
          >
            Designs
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.18em] uppercase font-body font-medium hover:text-gold transition-colors duration-300 ${
                useLightText ? "text-stone" : "text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors hover:text-gold ${
            useLightText ? "text-warm-white" : "text-charcoal"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav — always on light background */}
      {open && (
        <div className="md:hidden bg-warm-white border-t border-stone">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.18em] uppercase font-body font-medium text-charcoal hover:text-gold transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
