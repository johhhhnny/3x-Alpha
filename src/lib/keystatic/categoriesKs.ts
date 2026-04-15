import { collection, fields } from "@keystatic/core";

export const categoriesKs = collection({
  label: "Categories",
  slugField: "title",
  path: "src/content/categories/*/",
  format: { data: "json" },
  schema: {
    title: fields.slug({
      name: {
        label: "Title",
        description: "The title of the category.",
      },
    }),
    path: fields.text({
      label: "Path",
      description: "The URL path for this category (e.g., 'wisdom').",
      validation: {
        isRequired: true,
        pattern: {
          regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
          message: "Must be a slug (lowercase, numbers, hyphens)",
        },
      },
    }),
  },
});
