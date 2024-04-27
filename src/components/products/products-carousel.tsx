"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/utils/tempt-types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Container } from "../container";
import { Heading } from "../heading";
import { Section } from "../section";
import { SectionHeader } from "../section-header";

export function ProductsCarousel({ products }: { products: Product[] }) {
  return (
    <Section id="products">
      <Container>
        <SectionHeader>
          <Heading as="h2">Products</Heading>
        </SectionHeader>
        {products && products.length > 0 ? (
          <div className="flex justify-center">
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {products &&
                  products.map((product, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <div className="relative">
                          <AspectRatio
                            ratio={16 / 9}
                            className="relative overflow-hidden rounded-md"
                          >
                            <Image
                              alt={product.image.alt}
                              className="h-full w-full object-cover transition duration-500 hover:scale-105"
                              height="310"
                              src={product.image.href}
                              width="550"
                            />
                          </AspectRatio>
                          <span className="absolute left-2 top-2 rounded-lg bg-primary px-2 py-1  text-sm font-semibold text-white">
                            {product.name}
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ) : (
          <div className="text-center">No Products available.</div>
        )}
      </Container>
    </Section>
  );
}
