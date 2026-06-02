import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end bg-charcoal overflow-hidden">
      {/* Image placeholder — replace with next/image in Phase 2 */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-charcoal/70"
        aria-hidden="true"
      />

      {/* Content — aligned to the same container edge as every other section */}
      <div className="relative z-10 w-full mx-auto max-w-site px-6 md:px-10 lg:px-16 xl:px-20 pb-20 md:pb-28">
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
