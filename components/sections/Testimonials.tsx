import Container from "@/components/ui/Container";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-44 bg-warm-white">
      <Container>
        <div className="reveal max-w-xl mb-16 md:mb-20">
          <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
            What Clients Say
          </h2>
        </div>

        {/* Placeholder testimonial — real quotes to be added in Phase 2 */}
        <div className="reveal reveal-delay-1 max-w-2xl">
          <div className="p-8 md:p-12 bg-stone/20">
            <div
              className="text-gold/50 font-heading text-6xl leading-none mb-6 select-none"
              aria-hidden="true"
            >
              "
            </div>
            <blockquote className="font-body text-charcoal/80 leading-relaxed text-lg mb-8">
              1695 Designs delivered a space that completely transformed how our team
              works and how our clients experience our office.
            </blockquote>
            <div className="border-t border-stone pt-6">
              <p className="text-[11px] tracking-[0.1em] uppercase font-body text-grey">
                Corporate Client
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
