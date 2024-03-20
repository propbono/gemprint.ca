import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { LuPhoneCall } from "react-icons/lu";

// TODO: Fix styles on the contact us button in menu
// TODO: update email template

export default function ContactUs() {
  return (
    <Section className="h-full">
      <Container className="h-full pt-0 lg:p-0">
        <div className="flex h-full flex-col md:flex-row">
          <div className="w-full flex-grow bg-secondary-foreground p-6 text-primary-foreground md:w-1/3 lg:pt-32">
            <Heading as="h1" className="text-left text-primary-foreground">
              <span className="text-primary">Let&apos;s talk!</span> Tell us all{" "}
              <u>about your project</u>.
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Thank you for considering Gemprint for your inquiries about our
              services and products. Please utilize this form to reach out to us
              and discover more about what we offer.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground">
              If you have specific printing needs, we encourage you to provide
              all necessary details in your message to help us better understand
              your requirements.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Rest assured, we strive to respond promptly to all submissions
              through this form. Our standard response time is typically less
              than a day, often much quicker, ensuring you receive the
              assistance you need in a timely manner.
            </p>
            <div className="mt-5 text-lg font-bold md:text-xl">Contact Us</div>
            <div className="mt-3 flex items-center gap-2 text-lg font-bold md:text-xl">
              <LuPhoneCall className="text-primary" />
              <span>+1 416 666 1676</span>
            </div>
          </div>
          <ContactForm className="w-full flex-grow p-6 md:w-2/3 lg:pt-32" />
        </div>
      </Container>
    </Section>
  );
}
