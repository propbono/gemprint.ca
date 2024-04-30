import { Container } from "@/components/container";
import { CustomerTestimonials } from "@/components/customer-testimonials";
import { Heading } from "@/components/heading";
import { ProductsCarousel } from "@/components/products";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Category, Media } from "@/payload-types";
import type { Product } from "@/utils/tempt-types";
import configPromise from "@payload-config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

export const isMedia = (image: unknown): image is Media => {
  // generate the typeguard for image that is type of Media
  return (
    image !== null &&
    typeof image === "object" &&
    "altText" in image &&
    "url" in image &&
    "width" in image &&
    "height" in image
  );
};

export default async function Category({
  params: { category },
}: {
  params: { category: Category["slug"] };
}) {
  // TODO: replace textarea with richText filed type
  // check how to render richText type in React

  // TODO: Add images to the categories collection
  // or should we pull them from products?
  // Uncomment images code when done

  // TODO: Add Products collection

  // TODO: refactor createdAt and updatedAt and beforeChange hook

  const payload = await getPayload({ config: configPromise });
  const { docs: categories } = await payload.find({
    collection: "categories",
    where: { slug: { equals: category } },
  });

  if (!categories) {
    notFound();
  }

  const categoryInfo = categories[0];

  const { docs: testimonials } = await payload.find({
    collection: "testimonials",
  });

  const categoryImage1 = isMedia(categoryInfo.images.categoryImage1)
    ? categoryInfo.images.categoryImage1
    : null;

  const categoryImage2 = isMedia(categoryInfo.images.categoryImage2)
    ? categoryInfo.images.categoryImage2
    : null;

  const categoryImage3 = isMedia(categoryInfo.images.categoryImage3)
    ? categoryInfo.images.categoryImage3
    : null;
  const products: Product[] = [
    {
      name: "AQ Business Cards",
      category: "business-cards",
      image: {
        href: "/images/business-cards/business_cards_standard_01.jpg",
        alt: "AQ Business Cards",
      },
      href: "./aq-business-cards",
    },
    {
      name: "UV Business Cards",
      category: "business-cards",
      image: {
        href: "/images/business-cards/business_cards_color_01.jpg",
        alt: "UV Business Cards",
      },
      href: "./uv-business-cards",
    },
    {
      name: "Matte Laminated Business Cards",
      category: "business-cards",
      image: {
        href: "/images/business-cards/business_cards_laminated_01.jpg",
        alt: "Matte Laminated Business Cards",
      },
      href: "./matte-laminated-business-cards",
    },
    {
      name: "Gloss Laminated Business Cards",
      category: "business-cards",
      image: {
        href: "/images/business-cards/business_cards_laminated_02.jpg",
        alt: "Gloss Laminated Business Cards",
      },
      href: "./1matte-laminated-business-cards",
    },
  ];

  console.log(categoryInfo.images);
  return (
    <>
      {/* Hero */}
      <Section className="gradient-primary flex w-full xl:min-h-screen xl:items-center">
        <Container className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:pt-32">
          <div className="col-span-1 flex flex-col items-start md:col-span-2">
            <Heading as="h2" className="mb-3 lg:mb-3">
              {categoryInfo.name}
            </Heading>
            <p className="mb-8 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {categoryInfo.description}
            </p>
            <div className="flex gap-4">
              <Button variant="default" asChild>
                <Link href="#products">See available products</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          {categoryImage1 && (
            <div className="col-span-1">
              <AspectRatio
                ratio={16 / 9}
                className="relative overflow-hidden rounded-md"
              >
                <Image
                  alt={categoryImage1.altText}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  height="310"
                  src={categoryImage1?.url!}
                  width="550"
                />
              </AspectRatio>
            </div>
          )}
          {categoryImage2 && (
            <div className="col-span-1  md:col-span-2 lg:col-span-1 lg:col-start-2">
              <AspectRatio
                ratio={16 / 9}
                className="relative overflow-hidden rounded-md"
              >
                <Image
                  alt={categoryImage2.altText}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  height="310"
                  src={categoryImage2.url!}
                  width="550"
                />
              </AspectRatio>
            </div>
          )}
          {categoryImage3 && (
            <div className="col-span-1">
              <AspectRatio
                ratio={16 / 9}
                className="relativeoverflow-hidden rounded-md"
              >
                <Image
                  alt={categoryImage3.altText}
                  className="aspec-video h-full w-full object-cover transition duration-500 hover:scale-105"
                  height="310"
                  src={categoryImage3.url!}
                  width="550"
                />
              </AspectRatio>
            </div>
          )}
        </Container>
      </Section>
      <div className="border-bottom" />
      {/* Products Features */}
      <Section id="features">
        <Container className="grid items-center gap-4 lg:py-6">
          <SectionHeader>
            <Heading as="h2">{categoryInfo.features.heading}</Heading>
            <Heading as="h5">{categoryInfo.features.subHeading}</Heading>
          </SectionHeader>
          <div className="mx-auto grid w-full max-w-3xl items-start gap-4 sm:grid-cols-2 md:gap-6 lg:max-w-5xl lg:grid-cols-3">
            {categoryInfo.features.items.map((feature) => (
              <div key={feature.title} className="grid gap-1">
                <Heading as="h4" className="mb-2">
                  {feature.title}
                </Heading>
                <p className="text-sm text-muted-foreground">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CustomerTestimonials testimonials={testimonials} />
      <ProductsCarousel products={products} />
    </>
  );
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const data = await payload.find({
    collection: "categories",
  });

  const categories = data.docs.map((category) => category.slug);

  return categories;
}
