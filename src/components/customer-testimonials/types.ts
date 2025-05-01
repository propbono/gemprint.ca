export type Testimonial = {
  name: string;
  role?: string;
  text: string;
};

export type CustomerTestimonialProps = {
  defaultColumns?: 2 | 3;
};
