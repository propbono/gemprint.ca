export type CategorySlug = "business-cards" | "flyers";

export type PrintProducts = ProductsCategory[];

// TODO: add ZOD schema validation
export type ProductsCategory = {
  name: string;
  description: string;
  slug: CategorySlug;
  products: Product[];
  images: { href: string; alt: string }[];
  features: {
    heading: string;
    subheading: string;
    items: { title: string; content: string }[];
  };
};

export type Product = {
  name: string;
  category: CategorySlug;
  image: {
    href: string;
    alt: string;
  };
  href: string;
};
