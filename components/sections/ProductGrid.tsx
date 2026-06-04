"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

type Product = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
  description?: string;
};

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Living Room", value: "living" },
  { label: "Dining", value: "dining" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Office", value: "office" },
  { label: "Hospitality", value: "hospitality" },
];

export default function ProductGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-14">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`text-[11px] tracking-[0.15em] uppercase font-body font-medium px-4 py-2.5 border transition-colors duration-300 ${
              active === cat.value
                ? "bg-charcoal text-warm-white border-charcoal"
                : "text-charcoal border-stone hover:border-gold hover:text-gold"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-body text-grey">No products in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((product) => (
            <Link
              key={product._id}
              href={`/furniture/${product.slug.current}`}
              className="card-lift card-view-cursor group block"
            >
              <div className="card-img relative aspect-square bg-stone overflow-hidden mb-5">
                {product.coverImage?.asset ? (
                  <Image
                    src={urlFor(product.coverImage).width(600).height(600).url()}
                    alt={product.coverImage.alt ?? product.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal/30">
                      Image Coming Soon
                    </p>
                  </div>
                )}
                <div className="card-gold-line absolute bottom-0 left-0 right-0 h-px bg-gold z-10" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="card-title font-heading font-medium text-charcoal text-xl mb-1 group-hover:text-gold transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-[11px] tracking-[0.1em] uppercase font-body text-grey">
                    {product.category}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
