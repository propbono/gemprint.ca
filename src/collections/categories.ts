import type { CollectionConfig } from "payload/types";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "total",
      type: "number",
      required: true,
    },
  ],
};
