import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import PortfolioTeaser from "@/components/sections/PortfolioTeaser";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import { client } from "@/lib/sanity/client";
import { featuredProjectsQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import { resolveContact } from "@/lib/contact";
import type { Metadata } from "next";

// ISR — homepage imagery/projects refresh on the same cadence as the CMS pages
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "1695 Designs — Interior Design & Bespoke Furniture",
  description:
    "1695 Designs is a premium interior design and furniture company creating functional, refined, and fully executed spaces for corporate and hospitality clients — from concept to completion.",
  openGraph: {
    title: "1695 Designs — Interior Design & Bespoke Furniture",
    description:
      "Premium interior design and furniture company creating functional, refined spaces for corporate and hospitality clients — from concept to completion.",
  },
};

export default async function HomePage() {
  const [featuredProjects, settings] = await Promise.all([
    client.fetch(featuredProjectsQuery).catch(() => []),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);
  const contact = resolveContact(settings);

  return (
    <>
      <Hero heroImages={settings?.heroImages ?? []} />
      <About aboutImage={settings?.aboutImage ?? null} />
      <Services />
      <Process />
      <PortfolioTeaser projects={featuredProjects ?? []} />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact email={contact.email} whatsappNumber={contact.whatsappNumber} />
    </>
  );
}
