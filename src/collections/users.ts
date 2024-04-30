import type { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Client", value: "client" },
      ],
      required: true,
      defaultValue: "client",
    },
  ],
};

