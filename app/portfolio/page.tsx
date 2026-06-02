import { client } from "@/lib/sanity/client";
import { allProjectsQuery } from "@/lib/sanity/queries";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Container from "@/components/ui/Container";
import { pageOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A showcase of 1695 Designs projects across corporate, hospitality, and residential environments — interior design, furniture manufacturing, and full fit-out.",
  openGraph: pageOpenGraph({
    path: "/portfolio",
    title: "Portfolio | 1695 Designs",
    description:
      "Selected projects across corporate interiors, hospitality spaces, residential environments, and concept designs.",
  }),
};

export default async function PortfolioPage() {
  const projects = await client.fetch(allProjectsQuery).catch(() => []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full mx-auto max-w-site px-6 md:px-10 lg:px-16 xl:px-20 pb-16 md:pb-20 pt-36 md:pt-44">
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
            Our Work
          </p>
          <h1 className="font-heading font-semibold text-warm-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-6">
            Selected Projects
          </h1>
          <p className="font-body text-stone text-lg max-w-xl">
            A showcase of our work across corporate and hospitality environments.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28 bg-warm-white">
        <Container>
          <ProjectGrid projects={projects} />
        </Container>
      </section>
    </>
  );
}
