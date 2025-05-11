import type { CategorySlug } from "@/utils/tempt-types";
import type { MetadataRoute } from "next";

const categories: CategorySlug[] = [
  "business-cards",
  "flyers",
  "postcards",
  "stickers",
  "brochures",
  "real-estate-signs",
  "election-signs",
  "banners-signage",
  "promotional-products",
  "ncr-forms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gemprint.ca";

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/print-products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Product category pages
  const productPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/print-products/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...mainPages, ...productPages];
}
