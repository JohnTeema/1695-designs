import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton — only one document of this type should ever exist
  fields: [
    defineField({
      name: "heroImages",
      title: "Homepage Hero Image(s)",
      type: "array",
      description:
        "Add 1 image for a calm, static hero background. Add 2–3 for a slow, subtle crossfade (~5s each). Leave empty to keep the plain dark background. Use large, high-quality landscape photography.",
      validation: (r) => r.max(3),
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
              validation: (r) => r.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "aboutImage",
      title: "Homepage About Image",
      type: "image",
      description:
        "Portrait-oriented image shown beside the About text on the homepage.",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          validation: (r) => r.required(),
        },
      ],
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Office Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "International format without + sign, e.g. 2348012345678",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
