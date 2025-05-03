import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/utils/cn";
import Script from "next/script";
import type { CustomerTestimonialProps, Testimonial } from "./types";

export const CustomerTestimonials = ({
  testimonials,
  defaultColumns = 2,
}: CustomerTestimonialProps) => {
  const reviews: Testimonial[] = testimonials.slice(0, defaultColumns);

  const TESTIMONIAL_LD_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gemprint",
    review: reviews.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      reviewBody: testimonial.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };

  return (
    <Section className="bg-gray-100">
      <Container className="grid items-center gap-4 lg:py-6">
        <SectionHeader>
          <Heading as="h2">Customer Testimonials</Heading>
          <Heading as="h5">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say about us.
          </Heading>
        </SectionHeader>
        <div
          className={cn(
            "mx-auto grid max-w-5xl items-start gap-6 grid-cols-1 md:gap-12",
            {
              "sm:grid-cols-2": defaultColumns === 2,
              "sm:grid-cols-3": defaultColumns === 3,
            }
          )}
        >
          {reviews.map((testimonial) => (
            <div key={testimonial.name} className="flex flex-col gap-2">
              <div className="flex-1 rounded-lg border bg-gray-50 p-6 dark:border-gray-950 dark:bg-gray-950">
                <p>{testimonial.text}</p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role
                  ? `— ${testimonial.name}, ${testimonial.role}`
                  : `— ${testimonial.name}`}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Script
        type="application/ld+json"
        id="schema-customer-testimonials"
        suppressHydrationWarning
        content={JSON.stringify(TESTIMONIAL_LD_SCHEMA)}
      />
    </Section>
  );
};
