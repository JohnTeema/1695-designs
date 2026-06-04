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
    <section id="why-us" className="py-28 md:py-44 bg-charcoal">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Heading column */}
          <div className="reveal">
            <h2 className="font-heading font-bold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em]">
              Why 1695 Designs
            </h2>
            <p className="font-body text-grey mt-6 leading-relaxed max-w-xs">
              What makes us different is not just what we design but how we deliver it.
            </p>
          </div>

          {/* Staggered 2-column points grid — right column sits lower for visual rhythm */}
          <div className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {points.map((point, i) => (
              <div
                key={point}
                className={`flex items-start gap-4 py-5 border-t border-white/10 ${
                  i % 2 === 1 ? "sm:mt-12" : ""
                }`}
              >
                <span className="font-heading font-bold text-gold/30 text-sm shrink-0 mt-0.5 leading-none tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-stone text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
