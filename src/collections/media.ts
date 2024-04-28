import type { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  fields: [
    {
      name: "text",
      type: "text",
    },
  ],
};
