import type { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-body text-charcoal/80 leading-relaxed mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading font-semibold text-charcoal text-2xl md:text-3xl mt-12 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading font-semibold text-charcoal text-xl md:text-2xl mt-10 mb-4">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-gold pl-6 my-8 font-body text-charcoal/70 italic text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="font-body text-charcoal/80 space-y-2 mb-5 pl-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="font-body text-charcoal/80 space-y-2 mb-5 pl-0 list-decimal list-inside">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3">
        <div className="w-3 h-px bg-gold mt-[0.65em] shrink-0" aria-hidden="true" />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-charcoal">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-gold underline underline-offset-4 hover:text-charcoal transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-10">
          <div className="img-breathe relative aspect-[16/9] overflow-hidden bg-stone">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-[11px] tracking-[0.1em] uppercase font-body text-grey mt-3 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};
