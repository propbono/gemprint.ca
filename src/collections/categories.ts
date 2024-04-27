import type { CollectionConfig } from "payload/types";

const isAdmin = ({ req: { user } }: { req: { user: { role: string } } }) => {
  if (user && user.role === "admin") {
    return true;
  }

  return false;
};

export const Categories: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "slug",
      type: "text",
      required: true,
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
  ],
  access: {
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === "create") {
          if (req.user) {
            data.createdBy = req.user.id;
            return data;
          }
        }
      },
    ],
  },
};
