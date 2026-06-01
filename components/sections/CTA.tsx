import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative gold line */}
      <div
        className="absolute left-0 top-0 w-full h-px bg-gold/20"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 bottom-0 w-full h-px bg-gold/20"
        aria-hidden="true"
      />

      <Container narrow>
        <div className="text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-8">
            Let&apos;s Work Together
          </p>
          <h2 className="font-heading font-semibold text-warm-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] mb-8">
            Let&apos;s Build Your
            <br />
            Next Space.
          </h2>
          <p className="font-body text-grey leading-relaxed text-lg mb-12 max-w-lg mx-auto">
            Whether you&apos;re fitting out a new office, redesigning a hotel lobby, or
            building a home that&apos;s entirely yours — we&apos;d like to hear about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="outline"
              className="border-warm-white text-warm-white hover:border-gold hover:text-gold"
            >
              Start a Conversation
            </Button>
            <Button
              href="https://wa.me/2348000000000"
              variant="ghost"
              className="text-stone hover:text-gold"
            >
              WhatsApp Us →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
