import { defineField, defineType } from "sanity";

// Reusable image-with-alt field. Alt is required only when an image is set
// (Sanity skips sub-field validation when the parent image is empty).
const imageWithAlt = (
  name: string,
  title: string,
  group: string,
  description: string
) =>
  defineField({
    name,
    title,
    type: "image",
    group,
    description,
    options: { hotspot: true },
    fields: [
      {
        name: "alt",
        type: "string",
        title: "Alt text",
        description: "Describe the image for accessibility and SEO.",
        validation: (r) => r.required(),
      },
    ],
  });

export const pageImages = defineType({
  name: "pageImages",
  title: "Page Images",
  type: "document",
  // Singleton — one document holding imagery for the static pages
  groups: [
    { name: "about", title: "About Page", default: true },
    { name: "services", title: "Services Page" },
  ],
  fields: [
    // ── About page ──────────────────────────────────────────────────────
    imageWithAlt(
      "aboutStoryImage",
      "About — Our Story Image",
      "about",
      "Portrait image shown beside the 'Our Story' text. Recommended ratio ~4:5 (portrait)."
    ),
    imageWithAlt(
      "aboutApproachImage",
      "About — Our Approach Image (optional)",
      "about",
      "Optional supporting image in the 'Our Approach' section. Recommended landscape ~4:3."
    ),

    // ── Services page (one per service area) ─────────────────────────────
    imageWithAlt(
      "interiorDesignImage",
      "Services — Interior Design",
      "services",
      "Image for the Interior Design service. Recommended landscape ~4:3."
    ),
    imageWithAlt(
      "furnitureManufacturingImage",
      "Services — Furniture Manufacturing",
      "services",
      "Image for the Furniture Manufacturing service. Recommended landscape ~4:3."
    ),
    imageWithAlt(
      "furnitureSupplyImage",
      "Services — Furniture Supply",
      "services",
      "Image for the Furniture Supply service. Recommended landscape ~4:3."
    ),
    imageWithAlt(
      "designBuildImage",
      "Services — Design & Build",
      "services",
      "Image for the Design & Build service. Recommended landscape ~4:3."
    ),
  ],
  preview: {
    prepare() {
      return { title: "Page Images" };
    },
  },
});
