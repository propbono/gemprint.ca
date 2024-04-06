import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LinkCard } from "@/components/link-card";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui";
import aboutImage from "@/images/about.webp";
import { LINK_CARD_ITEMS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

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
              <Link href="/contact-us">
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
      <Section className=" bg-slate-50" id="services">
        <Container className="space-y-6 px-4 py-8 md:py-12 lg:py-12">
          <SectionHeader>
            <Heading as="h2">
              How we change <span className="text-primary">the game</span>.
            </Heading>
            <Heading as="h5">
              Elevate your print and web design experience with us. Uncover how
              we&apos;re transforming the industry standards. Let&apos;s
              revolutionize your brand&apos;s presence with tailored designs and
              personalized content that captivate your audience.
            </Heading>
          </SectionHeader>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {LINK_CARD_ITEMS.map((linkCard) => (
              <LinkCard card={linkCard} key={linkCard.title} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
