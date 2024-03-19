import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { LuPhoneCall } from "react-icons/lu";

export default function ContactUs() {
  return (
    <Section className="h-full">
      <Container className="h-full pt-0 lg:p-0">
        <div className="flex h-full flex-col md:flex-row">
          <div className="w-full flex-grow bg-foreground p-6 text-primary-foreground md:w-1/3 lg:pt-32">
            <Heading as="h1" className="text-left text-primary-foreground">
              <span className="text-primary">Let&apos;s talk!</span> Tell us all{" "}
              <u>about your project</u>.
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Use this form to contact us if you would like to know more about
              Gemprint, our services and products. Our standard response time to
              this form communication is less than a day, in most cases much
              faster.
            </p>

            <div className="mt-5 flex items-center gap-2 text-2xl font-bold">
              <LuPhoneCall className="text-primary" size={16} />
              <span className="text-sm">+1 416 666 1676</span>
            </div>
          </div>
          <ContactForm className="w-full flex-grow p-6 md:w-2/3 lg:pt-32" />
        </div>
      </Container>
    </Section>
  );
}
