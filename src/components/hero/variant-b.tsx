import { Button } from "@/components/ui";
import Link from "next/link";

export function HeroVariantB() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-950 py-24 md:py-32 lg:py-40">
      {/* Radial gradient for depth */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,212,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 50% 100%, rgba(0,212,255,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Print. <span className="text-primary">Perfected.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
          From business cards to large-format signage, we deliver quality that
          speaks volumes.
        </p>
        <div className="mt-10">
          <Button size="lg" className="px-10 py-6 text-lg" asChild>
            <Link href="/print-products">Start Your Order</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
