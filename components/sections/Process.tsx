import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Brief & Discovery",
    description:
      "We start by listening. A detailed project brief captures your vision, budget, timeline, and non-negotiables. Site visits, stakeholder conversations, reference gathering. No assumptions — only clarity.",
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "Mood boards, space plans, material palettes, and 3D visuals that show you exactly what your space will become. You see the full picture before a single wall is touched.",
  },
  {
    number: "03",
    title: "Development & Detailing",
    description:
      "Every fixture, finish, and fitting is specified to drawing. Working documentation produced. Suppliers and contractors appointed. The concept becomes a build-ready set of instructions.",
  },
  {
    number: "04",
    title: "Delivery & Styling",
    description:
      "Installation managed from start to finish. Furniture placed, art hung, cushions turned. We don't leave until the space is exactly as designed — and we document it properly.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-warm-white">
      <Container>
        {/* Header */}
        <div className="max-w-xl mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
            How We Work
          </p>
          <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
            A clear process. No surprises.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`p-10 md:p-12 ${
                i % 2 === 0 ? "md:border-r border-stone" : ""
              } ${i < 2 ? "border-b border-stone" : ""}`}
            >
              {/* Step number with gold line */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-heading text-5xl font-medium text-charcoal/10">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-gold/30" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal text-2xl mb-4">
                {step.title}
              </h3>
              <p className="font-body text-charcoal/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
