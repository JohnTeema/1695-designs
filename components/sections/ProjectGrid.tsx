"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
  scope?: string;
  location?: string;
  completionDate?: string;
};

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Corporate", value: "corporate" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Residential", value: "residential" },
  { label: "Concept Design", value: "concept" },
];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

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
          <p className="font-body text-grey">No projects in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((project) => (
            <Link
              key={project._id}
              href={`/portfolio/${project.slug.current}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] bg-stone overflow-hidden mb-5">
                {project.coverImage?.asset ? (
                  <Image
                    src={urlFor(project.coverImage).width(800).height(600).url()}
                    alt={project.coverImage.alt ?? project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal/30">
                      Image Coming Soon
                    </p>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-body font-medium bg-warm-white/90 text-charcoal px-3 py-1.5">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              <h3 className="font-heading font-medium text-charcoal text-xl mb-1 group-hover:text-gold transition-colors duration-300">
                {project.title}
              </h3>
              {(project.location || project.completionDate) && (
                <p className="text-[11px] tracking-[0.1em] uppercase font-body text-grey">
                  {[project.location, project.completionDate?.slice(0, 4)]
                    .filter(Boolean)
                    .join(" — ")}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
