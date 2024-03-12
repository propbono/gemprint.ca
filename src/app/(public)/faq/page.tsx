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
      <Accordion type="multiple" className="mt-6">
        {FAQ.map(({ title, text }, index) => (
          <AccordionItem key={title} value={title} className="w-full">
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{text}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
