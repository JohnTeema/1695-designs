import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const projects = [
  {
    id: 1,
    title: "Meridian Corporate Headquarters",
    category: "Corporate",
    location: "Lagos, Nigeria",
    year: "2024",
    tags: ["Interior Design", "FF&E", "Project Management"],
  },
  {
    id: 2,
    title: "The Annex Boutique Hotel",
    category: "Hospitality",
    location: "Abuja, Nigeria",
    year: "2023",
    tags: ["Interior Design", "Bespoke Furniture", "Fit-Out"],
  },
  {
    id: 3,
    title: "Private Residence — Ikoyi",
    category: "Residential",
    location: "Lagos, Nigeria",
    year: "2024",
    tags: ["Interior Design", "Bespoke Furniture"],
  },
];

export default function PortfolioTeaser() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-stone/30">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
              Selected Projects
            </p>
            <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
              Work that speaks for itself.
            </h2>
          </div>
          <Button href="/portfolio" variant="outline">
            All Projects
          </Button>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[3/4] bg-stone overflow-hidden mb-5">
                <div
                  className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/15 transition-colors duration-500"
                  aria-hidden="true"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium bg-warm-white/90 text-charcoal px-3 py-1.5">
                    {project.category}
                  </span>
                </div>
                {/* Photo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal/30">
                    Project Photography
                  </p>
                </div>
                {/* Hover overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-heading font-medium text-charcoal text-xl mb-2 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[11px] tracking-[0.1em] uppercase font-body text-grey mb-3">
                  {project.location} — {project.year}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.1em] uppercase font-body text-grey border border-stone px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
