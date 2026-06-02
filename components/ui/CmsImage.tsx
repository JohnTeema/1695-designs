import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

type SanityImage = { asset?: { _ref: string }; alt?: string };

/**
 * Renders a Sanity image (fill + object-cover) inside a positioned parent,
 * or a tasteful "Photography — Coming Soon" placeholder when empty.
 * The parent element supplies the aspect ratio, background, and any brand
 * accents (e.g. gold corner lines).
 */
export default function CmsImage({
  image,
  fallbackAlt,
  width,
  height,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  dark = false,
}: {
  image?: SanityImage | null;
  fallbackAlt: string;
  width: number;
  height: number;
  sizes?: string;
  dark?: boolean;
}) {
  if (image?.asset) {
    return (
      <Image
        src={urlFor(image).width(width).height(height).quality(80).url()}
        alt={image.alt ?? fallbackAlt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <p
        className={`text-[10px] tracking-[0.15em] uppercase font-body ${
          dark ? "text-white/20" : "text-charcoal/30"
        }`}
      >
        Photography — Coming Soon
      </p>
    </div>
  );
}
