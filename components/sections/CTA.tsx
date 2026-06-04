import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="cta" className="py-28 md:py-44 bg-charcoal relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gold/20" aria-hidden="true" />
      <div className="absolute left-0 bottom-0 w-full h-px bg-gold/20" aria-hidden="true" />

      <Container narrow>
        <div className="reveal text-center">
          <h2 className="reveal-heading font-heading font-extrabold text-warm-white uppercase tracking-[-0.03em] leading-[0.95] mb-8 text-[clamp(2.5rem,5vw,5rem)]">
            Let&apos;s Build Your
            <br />
            Next Space.
          </h2>
          <p className="font-body text-grey leading-relaxed text-lg mb-12 max-w-lg mx-auto">
            Whether you are designing a corporate office or a hospitality environment,
            we are ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="outline"
              className="border-warm-white text-warm-white hover:border-gold hover:text-gold"
            >
              Request a Consultation
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              className="text-stone hover:text-gold"
            >
              Start Your Project →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
