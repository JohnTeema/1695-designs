import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const projects = [
  {
    id: 1,
    category: "Corporate Interiors",
  },
  {
    id: 2,
    category: "Hospitality Spaces",
  },
  {
    id: 3,
    category: "Furniture Projects",
  },
];

export default function PortfolioTeaser() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-stone/30">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-4">
              Selected Projects
            </h2>
            <p className="font-body text-charcoal/70 max-w-md">
              A showcase of our work across corporate and hospitality environments.
            </p>
          </div>
          <Button href="/portfolio" variant="outline">
            All Projects
          </Button>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article key={project.id} className="group cursor-pointer">
              {/* Image placeholder */}
              <div className="relative aspect-[3/4] bg-stone overflow-hidden mb-5">
                <div
                  className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/15 transition-colors duration-500"
                  aria-hidden="true"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium bg-warm-white/90 text-charcoal px-3 py-1.5">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal/30">
                    Project Photography
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
