import { Container } from "@/components/container";
import { CustomerTestimonials } from "@/components/customer-testimonials";
import { Heading } from "@/components/heading";
import { LinkCard } from "@/components/link-card";
import { PostHogButton } from "@/components/posthog-button";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LINK_CARD_ITEMS } from "@/utils/constants";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.webp"
            alt="Creative paint splash background"
            fill
            className="object-cover "
            priority
          />
          <div className="absolute inset-0" />
        </div>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_400px]">
            <Card className="flex flex-col justify-center space-y-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-foreground">
                  <u>Premium</u> Print Solutions{" "}
                  <span className="text-primary">for Your Business</span>
                </CardTitle>
                <CardDescription className="max-w-[600px] text-muted-foreground md:text-xl dark:text-background">
                  From business cards to banners, we deliver high-quality print
                  products with fast turnaround times and exceptional customer
                  service.
                </CardDescription>
              </CardHeader>
              <CardFooter className="grid grid-cols-1 sm:flex sm:flex-row gap-4">
                <PostHogButton
                  text="Get Started Today"
                  url="./contact-us"
                  eventName="contact us click"
                />
                <PostHogButton
                  text="Explore Products"
                  url="./print-products"
                  eventName="see the products click"
                  variant="outline"
                />
              </CardFooter>
            </Card>
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/images/flyers/flyers_1.png"
                fill
                alt="Print products showcase"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </AspectRatio>
          </div>
        </Container>
      </Section>
      <Section className="bg-slate-50" id="services">
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
      <Section
        id="quote"
        className="w-full py-12 md:py-24 lg:py-32 bg-primary/60 text-primary-foreground"
      >
        <Container className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 lg:pt-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to{" "}
              <span className="text-foreground">elevate your brand</span> with
              premium <u>print materials</u>?
            </h2>
            <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today for a free quote and consultation. Our print
              experts are ready to help bring your vision to life.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <PostHogButton
              text="Get a Free Quote"
              url="./contact-us"
              eventName="contact us click"
            />
            <PostHogButton
              text="See our services"
              url="./print-products"
              eventName="see the products click"
              variant="secondary"
            />
          </div>
        </Container>
      </Section>
      <CustomerTestimonials defaultColumns={3} />
    </>
  );
}
