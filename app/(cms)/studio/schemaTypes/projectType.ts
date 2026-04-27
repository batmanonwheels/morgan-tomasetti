import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "field",
      title: "Field",
      type: "reference",
      to: [{ type: "field" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (do this last!)",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
  ],
});
