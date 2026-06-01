import Container from "@/components/ui/Container";

const reasons = [
  {
    title: "Precision over excess",
    description:
      "We design less, but better. Every element earns its place. No unnecessary ornamentation — only details that strengthen the whole.",
  },
  {
    title: "In-house fabrication",
    description:
      "Our furniture is designed and built by us, not sourced from catalogues. Custom dimensions, materials, and finishes as standard.",
  },
  {
    title: "End-to-end delivery",
    description:
      "One studio, one point of contact. We manage design, procurement, fabrication, and installation so nothing falls through the gap.",
  },
  {
    title: "Sector expertise",
    description:
      "Corporate, hospitality, residential, and retail. We understand what makes each context different — and design accordingly.",
  },
  {
    title: "Long-term partnerships",
    description:
      "Most of our clients return. We take that as the only measure that matters. Good work is the business development strategy.",
  },
  {
    title: "Transparent process",
    description:
      "Detailed documentation at every phase. You always know where the project is, what decisions are pending, and what's coming next.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-charcoal">
      <Container>
        {/* Header */}
        <div className="max-w-xl mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
            Why Choose Us
          </p>
          <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
            Design is a decision.
            <br />
            Make the right one.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {reasons.map((reason, i) => (
            <div key={i} className="group">
              <div className="w-8 h-px bg-gold mb-6" aria-hidden="true" />
              <h3 className="font-heading font-medium text-warm-white text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="font-body text-grey text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
