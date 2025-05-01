import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import type { CustomerTestimonialProps, Testimonial } from "./types";
import { cn } from "@/utils/cn";
import { shuffleArray } from "@/utils/shuffle-array";
import { TESTIMONIALS } from "@/utils/constants";

export const CustomerTestimonials = ({
  defaultColumns = 2,
}: CustomerTestimonialProps) => {
  const testimonials: Testimonial[] = shuffleArray(TESTIMONIALS).slice(
    0,
    defaultColumns
  );
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
          {testimonials.map((testimonial) => (
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
    </Section>
  );
};
