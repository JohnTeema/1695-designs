import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end bg-charcoal overflow-hidden">
      {/* Image placeholder */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-charcoal/70"
        aria-hidden="true"
      />
      {/* Placeholder image overlay — replace with next/image in Phase 2 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #2a2520 0%, #1C1C1C 50%, #2e2822 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.3em] uppercase font-body font-medium text-gold mb-8">
            Interior Design & Bespoke Furniture
          </p>

          <h1 className="font-heading font-semibold text-warm-white leading-[1.05] mb-8">
            <span className="block text-[clamp(3rem,8vw,6rem)]">Design.</span>
            <span className="block text-[clamp(3rem,8vw,6rem)]">Craft.</span>
            <span className="block text-[clamp(3rem,8vw,6rem)]">Transform.</span>
          </h1>

          <p className="font-body text-stone text-lg leading-relaxed mb-10 max-w-lg">
            We create spaces that speak before anyone enters. From corporate
            headquarters to boutique hotels — every environment, precisely designed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/portfolio" variant="outline" className="border-warm-white text-warm-white hover:border-gold hover:text-gold">
              View Our Work
            </Button>
            <Button href="/contact" variant="ghost" className="text-stone hover:text-gold">
              Start a Project →
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 hidden md:flex flex-col items-center gap-3 z-10">
        <div className="w-px h-16 bg-gold/40" aria-hidden="true" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-grey font-body rotate-0">
          Scroll
        </span>
      </div>
    </section>
  );
}
