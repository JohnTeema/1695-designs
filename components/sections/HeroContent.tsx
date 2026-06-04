"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

export default function HeroContent() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("hero-played")) return;

    sessionStorage.setItem("hero-played", "1");
    setAnimated(true);
  }, []);

  return (
    <div className={`max-w-2xl${animated ? " hero-animate" : ""}`}>
      <h1 className="font-heading font-extrabold text-gold uppercase tracking-[-0.03em] leading-[0.95] mb-10">
        <span className="hero-word hero-word-1 block text-[clamp(3.5rem,9vw,8rem)]">
          Design.
        </span>
        <span className="hero-word hero-word-2 block text-[clamp(3.5rem,9vw,8rem)]">
          Craft.
        </span>
        <span className="hero-word hero-word-3 block text-[clamp(3.5rem,9vw,8rem)]">
          Transform.
        </span>
      </h1>

      <p className="hero-sub font-body text-warm-white/80 text-lg leading-relaxed mb-10 max-w-xl">
        1695 Designs is a premium interior design and furniture company creating
        functional, refined, and fully executed spaces for corporate and hospitality
        clients — from concept to completion.
      </p>

      <div className="hero-cta flex flex-col sm:flex-row gap-4">
        <Button
          href="/contact"
          variant="primary"
        >
          Request a Consultation
        </Button>
        <Button
          href="/portfolio"
          variant="ghost"
          className="text-warm-white/70 hover:text-gold"
        >
          View Our Portfolio →
        </Button>
      </div>
    </div>
  );
}
