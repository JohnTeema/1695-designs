import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your space, goals, and functional requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "We develop detailed concepts, layouts, and 3D visualizations.",
  },
  {
    number: "03",
    title: "Manufacture",
    description: "We produce custom furniture tailored to your project needs.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We execute and deliver fully completed interior spaces.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-warm-white">
      <Container>
        {/* Header */}
        <div className="reveal max-w-xl mb-16 md:mb-20">
          <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} p-10 md:p-12 ${
                i % 2 === 0 ? "md:border-r border-stone" : ""
              } ${i < 2 ? "border-b border-stone" : ""}`}
            >
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
