import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image placeholder */}
          <div className="relative aspect-[4/5] bg-stone order-2 lg:order-1">
            <div
              className="absolute inset-0 bg-gradient-to-br from-stone/60 to-charcoal/10"
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] tracking-[0.2em] uppercase font-body text-grey">
                Photography — Coming Soon
              </p>
            </div>
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 w-px h-24 bg-gold" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-24 h-px bg-gold" aria-hidden="true" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
              About Us
            </p>
            <h2 className="font-heading font-semibold text-charcoal text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.1] mb-8">
              Design with purpose.
              <br />
              Built to last.
            </h2>
            <div className="space-y-5 font-body text-charcoal/80 leading-relaxed">
              <p>
                We are a full-service interior design and bespoke furniture studio
                built on one principle: good design is precise, not excessive. Every
                line, material, and light source is chosen with intent — creating
                spaces that are calm, considered, and unmistakably yours.
              </p>
              <p>
                From initial concept to final installation, we manage every detail.
                Our in-house fabrication team means the furniture you see in our
                designs is the furniture delivered to your space — built to your
                exact dimensions, in the materials you choose.
              </p>
              <p>
                We work with corporate clients, hospitality groups, developers, and
                private homeowners who understand that the environment they inhabit
                shapes how they perform, how guests feel, and what they remember.
              </p>
            </div>
            <div className="mt-10 pt-10 border-t border-stone flex gap-12">
              <div>
                <span className="font-heading text-4xl font-semibold text-charcoal">10+</span>
                <p className="text-[11px] tracking-[0.1em] uppercase font-body text-grey mt-1">
                  Years of practice
                </p>
              </div>
              <div>
                <span className="font-heading text-4xl font-semibold text-charcoal">180+</span>
                <p className="text-[11px] tracking-[0.1em] uppercase font-body text-grey mt-1">
                  Projects completed
                </p>
              </div>
              <div>
                <span className="font-heading text-4xl font-semibold text-charcoal">4</span>
                <p className="text-[11px] tracking-[0.1em] uppercase font-body text-grey mt-1">
                  Sectors served
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Button href="/about" variant="outline">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
