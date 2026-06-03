import Button from "@/components/ui/Button";
import HeroBackground from "@/components/sections/HeroBackground";
import { urlFor } from "@/lib/sanity/image";

type SanityImage = { asset?: { _ref: string }; alt?: string };

export default function Hero({ heroImages = [] }: { heroImages?: SanityImage[] }) {
  const images = heroImages
    .filter((img) => img?.asset)
    .map((img) => ({
      url: urlFor(img).width(2000).quality(80).url(),
      alt: img.alt ?? "1695 Designs interior project",
    }));

  const hasImages = images.length > 0;

  return (
    <section className="relative min-h-[78vh] md:min-h-screen flex items-start md:items-end bg-charcoal overflow-hidden">
      {/* CMS hero photography (calm static image, or slow crossfade for 2–3) */}
      {hasImages && <HeroBackground images={images} />}

      {/* Dark overlay — keeps white text readable over any photo.
          When no image is set, this is the clean dark background. */}
      <div
        className={
          hasImages
            ? "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40"
            : "absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-charcoal/70"
        }
        aria-hidden="true"
      />

      {/* Mobile-only top scrim: the headline is top-anchored on mobile, where the
          base overlay is lightest — this keeps the white text readable over the
          bright top of the photo. Hidden on desktop (content sits at the bottom). */}
      {hasImages && (
        <div
          className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-charcoal/95 via-charcoal/60 to-transparent md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Content — aligned to the same container edge as every other section.
          Mobile: top-anchored with a fixed offset below the fixed nav (h-20=80px)
          so the headline always clears it by ~48px, regardless of viewport
          height. Desktop: bottom-anchored as before (md:items-end). */}
      <div className="relative z-10 w-full mx-auto max-w-site px-6 md:px-10 lg:px-16 xl:px-20 pt-32 pb-20 md:pt-0 md:pb-28">
        <div className="max-w-2xl">
          <h1 className="font-heading font-semibold text-warm-white leading-[1.05] mb-8">
            <span className="block text-[clamp(2.8rem,5vw,5rem)]">Design.</span>
            <span className="block text-[clamp(2.8rem,5vw,5rem)]">Craft.</span>
            <span className="block text-[clamp(2.8rem,5vw,5rem)]">Transform.</span>
          </h1>

          <p className="font-body text-stone text-lg leading-relaxed mb-10 max-w-xl">
            1695 Designs is a premium interior design and furniture company creating
            functional, refined, and fully executed spaces for corporate and hospitality
            clients — from concept to completion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
      </div>

      {/* Scroll indicator — bottom-left corner; short line + tucked low so it
          clears the CTA buttons above it. Left of the WhatsApp button. */}
      <div className="absolute bottom-6 left-6 md:left-10 hidden md:flex flex-col items-center gap-2 z-10">
        <div className="w-px h-8 bg-gold/40" aria-hidden="true" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-grey font-body">
          Scroll
        </span>
      </div>
    </section>
  );
}
