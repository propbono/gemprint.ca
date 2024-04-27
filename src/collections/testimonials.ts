import { isAdmin } from "@/access/admin";
import type { CollectionConfig } from "payload/types";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "testimonial",
      type: "textarea",
      required: true,
    },
    {
      name: "source",
      type: "text",
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      access: {
        update: () => false,
      },
      admin: {
        readOnly: true,
        position: "sidebar",
        condition: (data) => Boolean(data?.createdBy),
      },
    },
    {
      name: "createdAt",
      type: "date",
      admin: {
        readOnly: true,
        position: "sidebar",
        condition: (data) => Boolean(data?.createdAt),
      },
    },
    {
      name: "updatedAt",
      type: "date",
      admin: {
        readOnly: true,
        position: "sidebar",
        condition: (data) => Boolean(data?.updatedAt),
      },
    },
  ],
  access: {
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === "create") {
          if (req.user) {
            data.createdBy = req.user.id;
            data.createdAt = new Date();

            return data;
          }
        }
        if (operation === "update") {
          data.updatedAt = new Date();
          return data;
        }
      },
    ],
  },
};
