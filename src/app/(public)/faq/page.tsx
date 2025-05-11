import { ogImageUrl } from "@/utils/ogImageUrl";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, FAQ_LD_SCHEMA } from "@/utils/constants";
import Script from "next/script";

export async function generateMetadata() {
  const title = "Frequently Asked Questions | Gemprint";
  const description =
    "Find answers to common questions about Gemprint's printing services, ordering, and delivery.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl({ title, description }),
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

export default function Faq() {
  return (
    <Container>
      <Heading as="h2" className="lg:text-center">
        Frequently Asked Questions
      </Heading>
      <Accordion type="multiple" className="mt-4">
        {FAQ_ITEMS.map(({ title, text }, index) => (
          <AccordionItem key={title} value={title} className="w-full">
            <AccordionTrigger className="p-4">{title}</AccordionTrigger>
            <AccordionContent className="px-8 py-4">{text}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Script
        type="application/ld+json"
        id="schema-faq"
        suppressHydrationWarning
        content={JSON.stringify(FAQ_LD_SCHEMA)}
      />
    </Container>
  );
}
