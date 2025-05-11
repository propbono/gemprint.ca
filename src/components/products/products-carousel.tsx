"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Product } from "@/utils/tempt-types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export function ProductsCarousel({ products }: { products: Product[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {products?.map((product) => (
          <CarouselItem
            key={product.href}
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
                    width="550"
                    height="310"
                    src={product.image.href}
                    sizes="(max-width: 768px) 100vw, 50vw"
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
  );
}
