import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-warm-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
              Contact
            </p>
            <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-8">
              Come with a brief
              <br />
              or just an idea.
            </h2>
            <p className="font-body text-charcoal/70 leading-relaxed mb-10">
              Every project starts with a conversation. Tell us about your space,
              your timeline, and what you&apos;re trying to achieve. We&apos;ll take it from there.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold" aria-hidden="true" />
                <a
                  href="mailto:hello@1695designs.com"
                  className="font-body text-charcoal hover:text-gold transition-colors"
                >
                  hello@1695designs.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold" aria-hidden="true" />
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-charcoal hover:text-gold transition-colors"
                >
                  WhatsApp — Chat directly
                </a>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-charcoal p-10 md:p-12">
            <h3 className="font-heading font-semibold text-warm-white text-2xl mb-4">
              Ready to get started?
            </h3>
            <p className="font-body text-grey text-sm leading-relaxed mb-8">
              Fill out our project enquiry form and we&apos;ll respond within one business
              day with initial thoughts and next steps.
            </p>
            <Button
              href="/contact"
              variant="outline"
              className="border-stone text-stone hover:border-gold hover:text-gold w-full sm:w-auto"
            >
              Project Enquiry Form
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
