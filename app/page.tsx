import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import PortfolioTeaser from "@/components/sections/PortfolioTeaser";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import type { Metadata } from "next";

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

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <PortfolioTeaser />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
