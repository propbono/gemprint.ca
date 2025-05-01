import { ContactUsButton } from "@/components/contact-us-btn";
import { Container } from "@/components/container";
import { CustomerTestimonials } from "@/components/customer-testimonials";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import aboutImage from "@/images/about.webp";
import { OUR_VALUES } from "@/utils/constants";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Section id="about" className="border-bottom">
        <Container className="flex items-center justify-center gap-8 lg:pb-16 lg:pt-[9rem]">
          <div className="w-full md:w-1/2">
            <Heading as="h1">Experts in Print</Heading>
            <Heading as="h4">
              Partner with Gemprint <u>today</u>, and let us achieve{" "}
              <span className="text-primary">success together</span>.
            </Heading>
            <div className="text-md space-y-4 leading-relaxed text-secondary-foreground lg:text-lg">
              <p>
                We are a dedicated team of professionals committed to
                contributing to your triumphs. Our mission is to provide
                unparalleled quality and service without breaking the bank.
              </p>
              <p>
                With a firm commitment to excellence, we tailor our services to
                suit your unique requirements. Your needs are our priority, and
                we strive to offer precisely what you require.
              </p>
            </div>
            <div className="mt-6 flex w-full flex-wrap items-center gap-4">
              {/* <Link href="/blog">
                <Button variant="outline">See the products</Button>
              </Link> */}
              <ContactUsButton />
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
      <Section className="border-bottom bg-primary/10" id="our-values">
        <Container className="flex items-center flex-col px-4 py-8 md:py-12 lg:py-12">
          <SectionHeader>
            <Heading as="h2">
              Our <span className="text-primary">Core Values</span>.
            </Heading>
            <Heading as="h5">
              The principles that guide everything we do at Gemprint, from
              client interactions to production processes.
            </Heading>
          </SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {OUR_VALUES.map((value) => (
              <div
                key={value.title}
                className="group text-center p-6 border border-primary/35 hover:border-primary rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary-foreground text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-full mb-4 transition-all duration-700">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CustomerTestimonials defaultColumns={3} />
    </>
  );
}
