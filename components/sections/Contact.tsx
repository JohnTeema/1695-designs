import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { whatsappHref } from "@/lib/contact";

export default function Contact({
  email,
  whatsappNumber,
}: {
  email: string;
  whatsappNumber: string;
}) {
  return (
    <section id="contact" className="py-24 md:py-32 bg-warm-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-8">
              Contact Us
            </h2>
            <p className="font-body text-charcoal/70 leading-relaxed mb-10">
              Let&apos;s discuss your project. Share your requirements and our team will
              get in touch with you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold" aria-hidden="true" />
                <a
                  href={`mailto:${email}`}
                  className="font-body text-charcoal hover:text-gold transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gold" aria-hidden="true" />
                <a
                  href={whatsappHref(
                    whatsappNumber,
                    "Hello, I'd like to discuss a project with 1695 Designs."
                  )}
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
              Fill out our project enquiry form and we&apos;ll get in touch with you.
            </p>
            <Button
              href="/contact"
              variant="outline"
              className="border-stone text-stone hover:border-gold hover:text-gold w-full sm:w-auto"
            >
              Send Inquiry
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
