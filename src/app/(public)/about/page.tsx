import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LinkCard } from "@/components/link-card";
import { Section } from "@/components/section";
import { Button } from "@/components/ui";
import aboutImage from "@/images/about.webp";
import { LINK_CARD_ITEMS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { LuArrowDownCircle } from "react-icons/lu";

export default function About() {
  return (
    <>
      <Section id="about" className="border-b-2 border-dashed border-b-primary">
        <Container className="flex items-center justify-center gap-8 lg:pb-16 lg:pt-40">
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
                you really need. We offer our expertise you the best solution
                for the best price!
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
      <Section className=" bg-slate-50" id="services">
        <Container className="space-y-6 px-4 py-8 md:py-12 lg:py-12">
          <div className="flex items-center justify-center text-primary">
            <LuArrowDownCircle size={32} />
          </div>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <Heading as="h2">
              How we change <span className="text-primary">the game</span>.
            </Heading>
            {/* TODO: Change this paragraph verbiage */}
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Elevate your print and web design experience with us. Uncover how
              we`&apos;re transforming the industry standards. Let`&apos;s
              revolutionize your brand`&apos;s presence with tailored designs
              and personalized content that captivate your audience.
            </p>
          </div>
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
