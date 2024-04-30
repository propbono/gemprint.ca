import type { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  fields: [
    {
      name: "altText",
      type: "text",
      required: true,
    },
  ],
};
