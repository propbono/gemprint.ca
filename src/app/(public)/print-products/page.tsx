import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { CATEGORIES } from "@/utils/constants";
import { ogImageUrl } from "@/utils/ogImageUrl";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRightCircle } from "react-icons/lu";

export async function generateMetadata() {
  const title = "Print Products | Gemprint";
  const description =
    "Explore our wide range of print products, from business cards to banners, all with premium quality and fast turnaround.";

  const img = `${process.env.NEXT_PUBLIC_BASE_URL}/images/brochures/brochures_1.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl({ title, description, img }),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl({ title, description })],
    },
  };
}

export default function PrintProducts() {
  return (
    <Container>
      <Section>
        <SectionHeader>
          <Heading as="h2">Print Products</Heading>

          <Heading as="h5">
            Quality print solutions for your business needs. From business cards
            to banners, we deliver exceptional materials that make your brand
            stand out.
          </Heading>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((item) => (
            <Link
              href={`/print-products/${item.category}`}
              key={item.category}
              className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
            >
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={item.images[0].href || "/placeholder.svg"}
                  alt={item.images[0].alt}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </AspectRatio>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center text-sm font-medium text-primary">
                  Explore products
                  <LuArrowRightCircle className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
