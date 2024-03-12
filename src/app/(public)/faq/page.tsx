import { Container } from "@/components/container";
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
      <h2 className="mt-6 text-center text-xl font-bold">
        Frequently Asked Questions
      </h2>
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
