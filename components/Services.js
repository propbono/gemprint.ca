import React from "react";
import Image from "next/image";

import { ServiceCard } from "@/components";

const expertCard = {
  img: {
    path: "/images/Experts.webp",
    alt: "Experts in Print",
  },
  title: "Experts in Print",
  content:
    "We combine our expertise, best online technology and our standard print services to optimize our client’s needs. Let us be your trusted partner.",
  link: "/#",
};

const trustedCard = {
  img: {
    path: "/images/Trusted.webp",
    alt: "Trusted partner",
  },
  title: "Trusted Partner",
  content:
    "Since 2017 Gemprint partnered with many Canadian brands. We offer our expertise and craftmanship to build your Brand and deliver exceptional marketing services.",
  link: "/#",
};

const servicesCard = {
  img: {
    path: "/images/Services.webp",
    alt: "Services",
  },
  title: "Services",
  content:
    "We are specializing in high quality print and digital services. Especially during the pandemic we grew our digital portfolio, ask us about website design and marketing campaigns.",
  link: "/#",
};

export const Services = () => {
  return (
    <section id="services" className="py-8">
      <div className="container flex flex-col items-stretch justify-between w-full space-y-5 lg:space-x-5 lg:space-y-0 lg:flex-row">
        <ServiceCard card={expertCard} />
        <ServiceCard card={trustedCard} />
        <ServiceCard card={servicesCard} />
      </div>
    </section>
  );
};
