import { Button } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const heroCategories = [
  {
    name: "Business Cards",
    image: "/images/business-cards/business-cards_1.png",
    href: "/print-products/business-cards",
  },
  {
    name: "Flyers",
    image: "/images/flyers/flyers_1.png",
    href: "/print-products/flyers",
  },
  {
    name: "Signage",
    image: "/images/banners/banners-and-signage_1.png",
    href: "/print-products/banners-signage",
  },
  {
    name: "Promotional",
    image: "/images/promo/promotional-products_1.png",
    href: "/print-products/promotional-products",
  },
];

export function HeroVariantC() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl/none">
            Everything Your Brand Needs{" "}
            <span className="text-primary">to Shine</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our print categories
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {heroCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  {category.name}
                </h2>
                <span className="mt-1 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/print-products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
