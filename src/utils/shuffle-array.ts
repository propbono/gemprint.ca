import type { Testimonial } from "@/components/customer-testimonials";

export const shuffleArray = (testimonials: Testimonial[]) => {
  const shuffledTestimonials = [...testimonials];
  for (let i = shuffledTestimonials.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledTestimonials[i], shuffledTestimonials[j]] = [
      shuffledTestimonials[j],
      shuffledTestimonials[i],
    ];
  }
  return shuffledTestimonials;
};
