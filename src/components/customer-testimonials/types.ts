export type Testimonial = {
  name: string;
  role?: string;
  text: string;
};

export type CustomerTestimonialProps = {
  testimonials: Testimonial[];
  defaultColumns?: 2 | 3;
};
