import { ogImageUrl } from "@/utils/ogImageUrl";
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    template: "%s | Gemprint - Professional Printing Services",
    default: "Gemprint | Professional Printing Services in Canada",
  },
  description:
    "High-quality printing services including business cards, flyers, brochures, signage, and promotional products for businesses across Canada.",
  keywords: [
    "printing services",
    "business cards",
    "flyers",
    "brochures",
    "signage",
    "promotional products",
    "NCR",
    "real estate signs",
    "election signs",
    "banners",
    "stickers",
    "custom printing",
    "print products",
    "print solutions",
    "Canada",
  ],
  authors: [{ name: "Gemprint" }],
  creator: "Gemprint",
  publisher: "Gemprint",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://gemprint.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gemprint | Professional Printing Services",
    description:
      "High-quality printing services including business cards, flyers, brochures, signage, and promotional products for businesses across Canada.",
    url: "https://gemprint.ca",
    siteName: "Gemprint",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: ogImageUrl({
          title: "Gemprint | Professional Printing Services",
          description:
            "High-quality printing services including business cards, flyers, brochures, signage, and promotional products for businesses across Canada.",
        }),
        width: 1200,
        height: 630,
        alt: "Gemprint - Professional Printing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemprint | Professional Printing Services",
    description:
      "High-quality printing services including business cards, flyers, brochures, signage, and promotional products for businesses across Canada.",
    images: [
      ogImageUrl({
        title: "Gemprint | Professional Printing Services",
        description:
          "High-quality printing services including business cards, flyers, brochures, signage, and promotional products for businesses across Canada.",
      }),
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
