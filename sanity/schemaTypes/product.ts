import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Furniture Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Living Room", value: "living" },
          { title: "Dining", value: "dining" },
          { title: "Bedroom", value: "bedroom" },
          { title: "Office", value: "office" },
          { title: "Hospitality", value: "hospitality" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "specs",
      title: "Specifications",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Dimensions: 120cm × 80cm × 75cm",
    }),
    defineField({
      name: "featured",
      title: "Featured in Collection",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "gallery.0",
    },
  },
});
