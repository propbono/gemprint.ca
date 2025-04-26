export type Testimonial = {
  name: string;
  role: string;
  text: string;
};

export type CustomerTestimonialProps = {
  testimonials: Testimonial[];
};
