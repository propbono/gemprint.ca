import { Container } from "@/components/container";
import { CustomerTestimonials } from "@/components/customer-testimonials";
import { Heading } from "@/components/heading";
import { HeroVariantA } from "@/components/hero/variant-a";
import { LinkCard } from "@/components/link-card";
import { PostHogButton } from "@/components/posthog-button";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { LINK_CARD_ITEMS, TESTIMONIALS } from "@/utils/constants";
import { ogImageUrl } from "@/utils/ogImageUrl";

export async function generateMetadata() {
  const title = "Gemprint | Premium Print Solutions for Your Business";
  const description =
    "High-quality printing services including business cards, flyers, brochures, signage, and promotional products for businesses across Canada.";
  const cta1 = "Get Started Today";
  const cta2 = "Explore Products";

  return {
    title,
    description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl({ title, description, cta1, cta2 }),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl({ title, description, cta1, cta2 })],
    },
  };
}

export default function Home() {
  return (
    <>
      <HeroVariantA />

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
      <CustomerTestimonials testimonials={TESTIMONIALS} defaultColumns={3} />
    </>
  );
}
