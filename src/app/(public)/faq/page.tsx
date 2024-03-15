import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/utils/constants";

export default function Faq() {
  return (
    <Container>
      <Heading as="h2" className="lg:text-center">
        Frequently Asked Questions
      </Heading>
      <Accordion type="multiple" className="mt-4">
        {FAQ.map(({ title, text }, index) => (
          <AccordionItem key={title} value={title} className="w-full">
            <AccordionTrigger className="p-4">{title}</AccordionTrigger>
            <AccordionContent className="px-8 py-4">{text}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
