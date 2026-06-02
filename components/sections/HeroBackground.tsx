"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type HeroImage = { url: string; alt: string };

/**
 * Calm hero background.
 * - 1 image  → static.
 * - 2–3      → slow, subtle crossfade (5s hold, 2s fade). Not a fast carousel.
 * Respects prefers-reduced-motion: pins to the first image, no animation.
 */
export default function HeroBackground({ images }: { images: HeroImage[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0" aria-hidden={images.length > 1 ? "true" : undefined}>
      {images.map((img, i) => (
        <div
          key={img.url}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={img.url}
            alt={i === 0 ? img.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
