import Container from "@/components/ui/Container";

const points = [
  "End-to-end interior solutions",
  "Strong design + manufacturing capability",
  "Corporate and hospitality expertise",
  "Detail-driven execution",
  "Functional and timeless design approach",
  "Reliable project delivery",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-charcoal">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Heading */}
          <div className="reveal">
            <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
              Why 1695 Designs
            </h2>
            <p className="font-body text-grey mt-6 leading-relaxed">
              What makes us different is not just what we design but how we deliver it.
            </p>
          </div>

          {/* Points */}
          <ul className="reveal reveal-delay-2 space-y-0 divide-y divide-white/8">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-5 py-5">
                <div className="w-5 h-px bg-gold shrink-0" aria-hidden="true" />
                <span className="font-body text-stone text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
