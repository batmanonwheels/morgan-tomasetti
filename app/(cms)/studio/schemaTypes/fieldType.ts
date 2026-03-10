import { defineField, defineType } from "sanity";

export const fieldType = defineType({
  name: "field",
  title: "Field",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
