/**
 * Seed script — creates placeholder content so the dynamic pages aren't empty.
 * All documents are clearly labelled as placeholder/sample content.
 *
 * Usage:
 *   1. In sanity.io/manage → your project → API → Tokens → Add API token (Editor)
 *   2. SANITY_WRITE_TOKEN=<token> npx tsx scripts/seed.ts
 */

import { createClient } from "next-sanity";
import * as dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN, // Editor token required
  useCdn: false,
});

const projects = [
  {
    _type: "project",
    _id: "sample-project-corporate-office",
    title: "Corporate Office Interior — Sample Project",
    slug: { _type: "slug", current: "corporate-office-interior-sample" },
    category: "corporate",
    description:
      "A sample placeholder project. Replace with real project details and photography once available. This document is for layout and navigation testing only.",
    scope: "Interior Design, Furniture Manufacturing, Project Management",
    location: "Lagos, Nigeria",
    completionDate: "2024-06-01",
    featured: true,
  },
  {
    _type: "project",
    _id: "sample-project-hotel-lobby",
    title: "Boutique Hotel Lobby — Sample Project",
    slug: { _type: "slug", current: "boutique-hotel-lobby-sample" },
    category: "hospitality",
    description:
      "A sample placeholder project. Replace with real project details and photography once available. This document is for layout and navigation testing only.",
    scope: "Interior Design, Bespoke Furniture, Fit-Out",
    location: "Abuja, Nigeria",
    completionDate: "2024-03-01",
    featured: true,
  },
  {
    _type: "project",
    _id: "sample-project-concept-design",
    title: "Concept Design Study — Sample Project",
    slug: { _type: "slug", current: "concept-design-study-sample" },
    category: "concept",
    description:
      "A sample placeholder project. Replace with real project details and photography once available. This document is for layout and navigation testing only.",
    scope: "Concept Design, 3D Visualization",
    location: "Lagos, Nigeria",
    completionDate: "2023-12-01",
    featured: false,
  },
];

const products = [
  {
    _type: "product",
    _id: "sample-product-executive-desk",
    title: "Executive Desk — Sample Product",
    slug: { _type: "slug", current: "executive-desk-sample" },
    category: "office",
    description:
      "A sample placeholder product. Replace with real product details and photography. This document is for layout and navigation testing only.",
    specs: [
      "Dimensions: 180cm × 80cm × 75cm",
      "Material: Engineered wood with veneer finish",
      "Available finishes: Walnut, Ash, Charcoal",
      "Lead time: 4–6 weeks",
    ],
    featured: true,
  },
  {
    _type: "product",
    _id: "sample-product-lounge-chair",
    title: "Lounge Chair — Sample Product",
    slug: { _type: "slug", current: "lounge-chair-sample" },
    category: "living",
    description:
      "A sample placeholder product. Replace with real product details and photography. This document is for layout and navigation testing only.",
    specs: [
      "Dimensions: 75cm × 80cm × 85cm",
      "Frame: Solid hardwood",
      "Upholstery: Full-grain leather or fabric",
      "Lead time: 3–5 weeks",
    ],
    featured: true,
  },
];

const posts = [
  {
    _type: "post",
    _id: "sample-post-corporate-spaces",
    title: "How We Design Corporate Spaces That Actually Work — Sample Post",
    slug: { _type: "slug", current: "how-we-design-corporate-spaces-sample" },
    excerpt:
      "A sample placeholder blog post. Replace with real article content. This document is for layout and navigation testing only.",
    body: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "This is a sample post. Replace this content with a real article. The layout, typography, and navigation are functional — this placeholder is here only for testing purposes.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    publishedAt: new Date().toISOString(),
    author: "1695 Designs",
  },
  {
    _type: "post",
    _id: "sample-post-hospitality-design",
    title: "The 1695 Approach to Hospitality Interiors — Sample Post",
    slug: { _type: "slug", current: "hospitality-interiors-approach-sample" },
    excerpt:
      "A sample placeholder blog post. Replace with real article content. This document is for layout and navigation testing only.",
    body: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "This is a sample post. Replace this content with a real article. The layout, typography, and navigation are functional — this placeholder is here only for testing purposes.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    publishedAt: new Date(Date.now() - 7 * 86400000).toISOString(),
    author: "1695 Designs",
  },
];

async function seed() {
  console.log("Seeding placeholder content to Sanity...\n");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const doc of [...projects, ...products, ...posts] as any[]) {
    try {
      await client.createOrReplace(doc);
      console.log(`✓ ${doc._type}: ${doc.title}`);
    } catch (err) {
      console.error(`✗ Failed: ${doc.title}`, err);
    }
  }

  console.log("\nDone. Open /studio to review and replace sample content.");
}

seed();
