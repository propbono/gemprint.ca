import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_US_LD_SCHEMA } from "@/utils/constants";
import Script from "next/script";
import { LuPhoneCall } from "react-icons/lu";

// TODO: update email template

export default function ContactUs() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 to-slate-100">
      <Container className="grid md:grid-cols-2 gap-8 max-w-6xl">
        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full -ml-32 -mb-32" />

          <div className="relative z-10">
            <Heading as="h1" className="text-left text-primary-foreground">
              <span className="text-primary">Let&apos;s talk!</span> Tell us all{" "}
              <u>about your project</u>.
            </Heading>

            <p className="text-slate-300 mb-8">
              Thank you for considering Gemprint for your inquiries about our
              services and products. Please utilize this form to reach out to us
              and discover more about what we offer.
            </p>

            <div className="bg-slate-800/50 p-6 rounded-xl mb-8">
              <p className="font-medium mb-4">
                If you have specific printing needs, we encourage you to provide
                all necessary details in your message to help us better
                understand your requirements.
              </p>
            </div>

            <p className="text-slate-300 mb-10">
              Rest assured, we strive to respond promptly to all submissions
              through this form. Our standard response time is typically less
              than a day, often much quicker, ensuring you receive the
              assistance you need in a timely manner.
            </p>

            <div className="pt-6 border-t border-slate-700">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <div className="flex items-center gap-3 text-primary">
                <LuPhoneCall className="h-5 w-5" />
                <span className="text-lg font-medium">+1 416 666 1676</span>|
                <span className="text-lg font-medium">+1 647 833 8068</span>
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="p-8">
            <ContactForm />
          </CardContent>
        </Card>
      </Container>
      <Script
        type="application/ld+json"
        id="schema-contact-us"
        suppressHydrationWarning
        content={JSON.stringify(CONTACT_US_LD_SCHEMA)}
      />
    </Section>
  );
}
