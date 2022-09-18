import React from "react";
import Image from "next/image";

import { ServiceCard } from "components";

import expertImage from "/public/images/Experts.webp";
import trustImage from "/public/images/Trusted.webp";
import servicesImage from "/public/images/Services.webp";

const expertCard = {
  img: {
    path: expertImage,
    alt: "Experts in Print",
  },
  title: "Experts in Print",
  content:
    "Gemprint is your online print partner. We combine our expertise and the best available technology to achieve highest printing and designing standards for our clients. Let us be your trusted partner.",
  link: "/#",
};

const trustedCard = {
  img: {
    path: trustImage,
    alt: "Trusted partner",
  },
  title: "Trusted Partner",
  content:
    "Since 2017 Gemprint partnered with many Canadian brands. We offer our expertise and craftmanship to build your Brand and deliver exceptional marketing services.",
  link: "/#",
};

const servicesCard = {
  img: {
    path: servicesImage,
    alt: "Services",
  },
  title: "Services",
  content:
    "We are specializing in high quality print and digital services. Especially during the pandemic we grew our digital portfolio, ask us about website design and marketing campaigns.",
  link: "/#",
};

export const Services = () => {
  return (
    <section id="services" className="relative py-8 lg:top-[-15rem]">
      <div className="container flex flex-col items-start justify-between w-full space-y-8 lg:space-x-8 lg:space-y-0 lg:flex-row">
        <ServiceCard card={expertCard} />
        <ServiceCard card={trustedCard} />
        <ServiceCard card={servicesCard} />
      </div>
    </section>
  );
};

export default Services;
