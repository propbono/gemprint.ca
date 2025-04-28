import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { CATEGORIES } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { LuArrowRightCircle } from "react-icons/lu";

export default function PrintProducts() {
  return (
    <Container>
      <Section>
        <SectionHeader>
          <Heading>Print Products</Heading>
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((item) => (
            <Link
              href={`/print-products/${item.category}`}
              key={item.category}
              className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={item.images[0].href || "/placeholder.svg"}
                  alt={item.images[0].alt}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
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
