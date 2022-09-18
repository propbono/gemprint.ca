import React from "react";
import Image from "next/image";

import { Section, ServiceCard } from "components";

import expertImage from "/public/images/Experts.webp";
import trustImage from "/public/images/Trusted.webp";
import servicesImage from "/public/images/Services.webp";
import Container from "../container";

export const Services = () => {
  return (
    <Section title="services" className="py-8 lg:top-[-15rem]">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-3 lg:gap-4">
        <ServiceCard
          image={expertImage}
          alt="Experts in Print"
          title="Experts in Print"
          content="Gemprint is your online print partner. We combine our expertise and the best available technology to achieve highest printing and designing standards for our clients. Let us be your trusted partner."
        />
        <ServiceCard
          image={trustImage}
          alt="Trusted Partner"
          title="Trusted Partner"
          content="Since 2017 Gemprint partnered with many Canadian brands. We offer our expertise and craftmanship to build your Brand and deliver exceptional marketing services."
        />
        <ServiceCard
          image={servicesImage}
          alt="Services"
          title="Services"
          content="We are specializing in high quality print and digital services. Especially during the pandemic we grew our digital portfolio, ask us about website design and marketing campaigns."
        />
      </Container>
    </Section>
  );
};

export default Services;
