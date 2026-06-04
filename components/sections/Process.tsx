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
    <section id="process" className="py-28 md:py-44 bg-warm-white">
      <Container>
        <div className="reveal mb-16 md:mb-24 max-w-xl">
          <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
            How We Work
          </h2>
        </div>

        {/* Staggered horizontal timeline — stepping-stone rhythm on desktop */}
        <div className="relative">
          {/* Thin gold connector line (desktop) */}
          <div
            className="hidden md:block absolute top-2.5 left-0 right-0 h-px bg-gold/20 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} relative z-10 ${
                  i % 2 === 1 ? "md:mt-20" : ""
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="w-5 h-5 rounded-full border-2 border-gold/50 bg-warm-white flex items-center justify-center mb-8"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
                </div>

                <span className="font-heading font-bold text-charcoal/[0.07] text-[4.5rem] leading-none block mb-5 select-none">
                  {step.number}
                </span>
                <h3 className="font-heading font-semibold text-charcoal text-xl mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-charcoal/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
