import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { Button } from "@/components/ui";
import aboutImage from "@/images/about.webp";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <Section title="about">
      <Container className="flex items-center justify-center gap-8">
        <div className="w-full md:w-1/2">
          <Heading as="h1">Experts in Print</Heading>
          <Heading as="h4">
            We are team of professionals, and we want to be a part of your
            success.
          </Heading>
          <div className="text-md space-y-4 leading-relaxed text-secondary-foreground lg:text-lg">
            <p>
              At Gemprint we believe in providing exceptional quality, and
              extraordinary service at an affordable price.
            </p>
            <p>
              We will do our best to understand your needs and offer you what
              you really need. We offer our expertise you the best solution for
              the best price!
            </p>
          </div>
          <div className="mt-6 flex w-full flex-wrap items-center gap-4">
            <Link href="/blog">
              <Button variant="outline">See the products</Button>
            </Link>
            <Link href="/contact">
              <Button variant="default">Contact Us</Button>
            </Link>
          </div>
        </div>
        <div className="relative hidden bg-cover bg-center md:block md:h-1/2 md:w-1/2">
          <Image
            className="rounded-br-[12rem] rounded-tl-[8rem] shadow-lg"
            src={aboutImage}
            width={2560}
            height={1707}
            alt="About section image"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
          />
        </div>
      </Container>
    </Section>
  );
}
