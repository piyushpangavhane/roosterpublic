import { CollectionConfig } from "payload/types";

const collectionMap: Record<"string", CollectionConfig> = {
  user: {
    slug: "users",
    auth: true,
    admin: {
      useAsTitle: "email",
    },
    access: {
      read: () => true,
    },
    fields: [
      // Email added by default
      // Add more fields as needed
    ],
  },
  product: {
    slug: "products",
    access: {
      read: () => true,
    },
    fields: [
      {
        type: "text",
        name: "name",
      },
      // Email added by default
      // Add more fields as needed
    ],
  },
};

export default collectionMap;
