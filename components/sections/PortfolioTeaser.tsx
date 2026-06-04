import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  coverImage?: { asset?: { _ref: string }; alt?: string };
};

const categoryLabel: Record<string, string> = {
  corporate: "Corporate",
  hospitality: "Hospitality",
  residential: "Residential",
  concept: "Concept Design",
};

// Fallback categories shown only when the CMS has no featured projects yet
const placeholderCards = ["Corporate", "Hospitality", "Furniture Projects"];

export default function PortfolioTeaser({ projects = [] }: { projects?: Project[] }) {
  const featured = projects.slice(0, 3);
  const hasProjects = featured.length > 0;

  return (
    <section id="portfolio" className="py-28 md:py-44 bg-stone/30">
      <Container>
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
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
          {hasProjects
            ? featured.map((project, i) => (
                <Link
                  key={project._id}
                  href={`/portfolio/${project.slug.current}`}
                  className={`reveal reveal-delay-${i + 1} group block card-lift`}
                >
                  <div className="card-img relative aspect-[3/4] bg-stone overflow-hidden mb-5">
                    {project.coverImage?.asset ? (
                      <Image
                        src={urlFor(project.coverImage).width(700).height(933).quality(80).url()}
                        alt={project.coverImage.alt ?? project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-stone">
                        <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal/30">
                          Photography Coming Soon
                        </p>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium bg-warm-white/90 text-charcoal px-3 py-1.5">
                        {categoryLabel[project.category] ?? project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                  </div>
                  <h3 className="font-heading font-medium text-charcoal text-xl group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                </Link>
              ))
            : placeholderCards.map((category) => (
                <article key={category} className="group">
                  <div className="relative aspect-[3/4] bg-stone overflow-hidden mb-5">
                    <div
                      className="absolute inset-0 bg-charcoal/5"
                      aria-hidden="true"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium bg-warm-white/90 text-charcoal px-3 py-1.5">
                        {category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal/30">
                        Photography Coming Soon
                      </p>
                    </div>
                  </div>
                </article>
              ))}
        </div>
      </Container>
    </section>
  );
}
