import { PostHogButton } from "@/components/posthog-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const productSlides = [
  {
    src: "/images/business-cards/business-cards_1.png",
    alt: "Business Cards sample",
    label: "Business Cards",
  },
  {
    src: "/images/flyers/flyers_1.png",
    alt: "Flyers sample",
    label: "Flyers",
  },
  {
    src: "/images/brochures/brochures_1.png",
    alt: "Brochures sample",
    label: "Brochures",
  },
  {
    src: "/images/banners/banners-and-signage_1.png",
    alt: "Banners sample",
    label: "Banners & Signage",
  },
  {
    src: "/images/election-signs/election-signs_1.png",
    alt: "Election Signs sample",
    label: "Election Signs",
  },
  {
    src: "/images/ncr-forms/ncr-invoices_1.png",
    alt: "NCR Forms sample",
    label: "NCR Forms",
  },
  {
    src: "/images/postcards/postcards_1.png",
    alt: "Postcards sample",
    label: "Postcards",
  },
  {
    src: "/images/promo/promotional-products_1.png",
    alt: "Promotional Products sample",
    label: "Promo Products",
  },
  {
    src: "/images/real-estate-signs/real-estate-signs_1.png",
    alt: "Real Estate Signs sample",
    label: "Real Estate Signs",
  },
];

export function HeroVariantA() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col justify-center overflow-hidden bg-gray-950">
      {/* Radial gradient for depth (same as Variant B) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,212,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 50% 100%, rgba(0,212,255,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text + CTAs */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl/none">
              Premium Print That Makes{" "}
              <span className="text-primary">Your Brand Stand Out</span>
            </h1>
            <p className="max-w-xl text-lg text-gray-300">
              Business cards, flyers, signage &amp; more — Toronto-based, fast
              turnaround
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Toronto Since 2018
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Fast Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Quality Guaranteed
              </span>
            </div>

            {/* CTAs — below text, outside carousel */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <PostHogButton
                text="Get a Free Quote"
                url="/contact-us"
                eventName="contact us click"
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
              />
              <PostHogButton
                text="Explore Products"
                url="/print-products"
                eventName="see the products click"
                size="lg"
                variant="outline"
                className="border-gray-500 bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-gray-800 hover:text-white"
              />
            </div>
          </div>

          {/* Right: Product carousel */}
          <div className="hidden lg:block px-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {productSlides.map((slide) => (
                  <CarouselItem key={slide.alt}>
                    <div className="overflow-hidden rounded-lg bg-gray-800">
                      <AspectRatio ratio={4 / 3}>
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 0px, 450px"
                        />
                      </AspectRatio>
                    </div>
                    <p className="mt-3 text-center text-sm font-medium text-gray-300">
                      {slide.label}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="h-10 w-10 bg-white text-gray-900 border-gray-200 hover:bg-gray-100 hover:border-gray-400 active:scale-95 transition-transform shadow-md" />
              <CarouselNext className="h-10 w-10 bg-white text-gray-900 border-gray-200 hover:bg-gray-100 hover:border-gray-400 active:scale-95 transition-transform shadow-md" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
