import { Button } from "@/components/ui";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export function HeroVariantA() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-950 py-16 md:py-24 lg:py-32">
      {/* Background hero image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl/none">
              Premium Print That Makes{" "}
              <span className="text-primary">Your Brand Stand Out</span>
            </h1>
            <p className="max-w-xl text-lg text-gray-300">
              Business cards, flyers, signage &amp; more — Toronto-based, fast
              turnaround
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="/contact-us">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/print-products">Browse Products</Link>
              </Button>
            </div>

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
          </div>

          {/* Right: Product image */}
          <div className={cn("hidden lg:block")}>
            <AspectRatio ratio={4 / 3}>
              <Image
                src="/images/hero.webp"
                alt="Gemprint premium print products"
                fill
                className="rounded-xl object-cover shadow-2xl"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
