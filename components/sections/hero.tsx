import React from "react";
import Image from "next/image";
import { Container, Section } from "components";

import heroImage from "/public/images/Hero.webp";

const styles = {
  section:
    "w-full h-auto bg-center bg-cover lg:h-screen md:pt-20 lg:pt-24 relative",
  container: "py-6 md:py-12 lg:py-16 relative z-auto",
  card: "group bg-white px-8 pt-6 pb-10 rounded-md shadow-md lg:opacity-60 lg:max-w-5xl hover:opacity-100 transition duration-1000 ease-in-out",
  preTitle: "mb-2 text-2xl",
  title: "mb-4 text-5xl font-bold text-secondary leading-snug",
  text: "mb-10 text-3xl lg:opacity-60 group-hover:opacity-100 transition duration-1500 ease leading-relaxed",
};

export const Hero = () => {
  return (
    <Section className={styles.section}>
      <div className="hidden lg:block">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
        />
      </div>
      <Container className={styles.container}>
        <div className={styles.card}>
          <p className={styles.preTitle}>
            May 2, 2018 by{" "}
            <strong className="text-primary">Maimuna Gabeyre</strong>
          </p>
          <h2 className={styles.title}>
            Be original, be creative choose Gemprint
          </h2>
          <Image
            src="/images/zigzag.svg"
            className="mb-4"
            alt="zig_zag image"
            width={100}
            height={20}
          />
          <p className={styles.text}>
            Are you looking for a reliable and affordable printer? We are
            experts in print. Our experienced team is here to help you succeed.
          </p>
          <a
            href="mailto:maimuna.gabeyre@gemprint.ca"
            className="my-auto btn btn-primary"
          >
            Request a Quote
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
