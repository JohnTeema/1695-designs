"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

export default function HeroContent() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("hero-played")) return;

    sessionStorage.setItem("hero-played", "1");
    requestAnimationFrame(() => {
      ref.current?.classList.add("hero-animate");
    });
  }, []);

  return (
    <div ref={ref} className="max-w-2xl">
      <h1 className="font-heading font-semibold text-warm-white leading-[1.05] mb-8">
        <span className="hero-word hero-word-1 block text-[clamp(2.8rem,5vw,5rem)]">
          Design.
        </span>
        <span className="hero-word hero-word-2 block text-[clamp(2.8rem,5vw,5rem)]">
          Craft.
        </span>
        <span className="hero-word hero-word-3 block text-[clamp(2.8rem,5vw,5rem)]">
          Transform.
        </span>
      </h1>

      <p className="hero-sub font-body text-stone text-lg leading-relaxed mb-10 max-w-xl">
        1695 Designs is a premium interior design and furniture company creating
        functional, refined, and fully executed spaces for corporate and hospitality
        clients — from concept to completion.
      </p>

      <div className="hero-cta flex flex-col sm:flex-row gap-4">
        <Button
          href="/contact"
          variant="outline"
          className="border-warm-white text-warm-white hover:border-gold hover:text-gold"
        >
          Request a Consultation
        </Button>
        <Button
          href="/portfolio"
          variant="ghost"
          className="text-stone hover:text-gold"
        >
          View Our Portfolio →
        </Button>
      </div>
    </div>
  );
}
