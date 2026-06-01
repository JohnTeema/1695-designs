import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { projectBySlugQuery, allProjectSlugsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await client.fetch(allProjectSlugsQuery).catch(() => []);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await client.fetch(projectBySlugQuery, { slug }).catch(() => null);
  if (!project) return { title: "Project Not Found" };
  const ogImage = project.images?.[0]?.asset
    ? { url: urlFor(project.images[0]).width(1200).height(630).url(), alt: project.title }
    : { url: "/opengraph-image" };
  return {
    title: project.title,
    description: project.description ?? `A ${project.category} interior design project by 1695 Designs.`,
    openGraph: {
      title: project.title,
      description: project.description ?? `A ${project.category} interior design project by 1695 Designs.`,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await client.fetch(projectBySlugQuery, { slug }).catch(() => null);
  if (!project) notFound();

  const categoryLabel: Record<string, string> = {
    corporate: "Corporate",
    hospitality: "Hospitality",
    residential: "Residential",
    concept: "Concept Design",
  };

  return (
    <>
      {/* Hero image */}
      <div className="relative h-[60vh] md:h-[75vh] bg-charcoal mt-20">
        {project.images?.[0]?.asset ? (
          <Image
            src={urlFor(project.images[0]).width(1600).url()}
            alt={project.images[0].alt ?? project.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal/80 flex items-center justify-center">
            <p className="text-[10px] tracking-[0.2em] uppercase font-body text-white/20">
              Photography Coming Soon
            </p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main */}
            <div className="lg:col-span-2">
              <p className="text-[11px] tracking-[0.2em] uppercase font-body font-medium text-gold mb-4">
                {categoryLabel[project.category] ?? project.category}
              </p>
              <h1 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] mb-8">
                {project.title}
              </h1>
              {project.description && (
                <p className="font-body text-charcoal/75 leading-relaxed text-lg">
                  {project.description}
                </p>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-stone/30 p-8 space-y-6">
                {project.scope && (
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-grey mb-1">
                      Scope
                    </p>
                    <p className="font-body text-charcoal">{project.scope}</p>
                  </div>
                )}
                {project.location && (
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-grey mb-1">
                      Location
                    </p>
                    <p className="font-body text-charcoal">{project.location}</p>
                  </div>
                )}
                {project.completionDate && (
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-grey mb-1">
                      Completed
                    </p>
                    <p className="font-body text-charcoal">
                      {new Date(project.completionDate).toLocaleDateString("en-GB", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                )}
                <div className="pt-4 border-t border-stone">
                  <Button href="/contact" variant="primary" className="w-full justify-center">
                    Start a Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional images */}
          {project.images?.length > 1 && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.slice(1).map(
                (img: { asset?: { _ref: string }; alt?: string }, i: number) =>
                  img?.asset && (
                    <div key={i} className="relative aspect-[4/3] bg-stone overflow-hidden">
                      <Image
                        src={urlFor(img).width(900).url()}
                        alt={img.alt ?? `${project.title} — image ${i + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )
              )}
            </div>
          )}

          {/* Back */}
          <div className="mt-16 pt-8 border-t border-stone">
            <Link
              href="/portfolio"
              className="text-[11px] tracking-[0.15em] uppercase font-body font-medium text-grey hover:text-gold transition-colors"
            >
              ← All Projects
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
