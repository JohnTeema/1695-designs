import HeroContent from "@/components/sections/HeroContent";
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
    <section className="section-gold-rule relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {hasImages && <HeroBackground images={images} />}

      <div
        className={
          hasImages
            ? "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40"
            : "absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-charcoal/70"
        }
        aria-hidden="true"
      />

      {/* Top scrim keeps headline readable over bright photo tops */}
      {hasImages && (
        <div
          className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-charcoal/90 via-charcoal/50 to-transparent"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 w-full mx-auto max-w-site px-6 md:px-10 lg:px-16 xl:px-20 py-32 md:py-40">
        <HeroContent />
      </div>

      <div className="absolute bottom-6 left-6 md:left-10 hidden md:flex flex-col items-center gap-2 z-10">
        <div className="w-px h-8 bg-gold/40" aria-hidden="true" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-grey font-body">
          Scroll
        </span>
      </div>
    </section>
  );
}
