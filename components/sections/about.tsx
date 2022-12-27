import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutImage from "/public/images/About.webp";
import { Container, Section } from "components";

const styles = {
  container:
    "flex flex-col flex-col-reverse lg:flex-row lg:flex-wrap items-center pt-0 pb-6 lg:py-24 w-full",
  imageContainer: "bg-cover w-full lg:w-1/2",
  image: "rounded-tl-[8rem] rounded-br-[12rem] shadow-lg",
  textContainer:
    "w-full lg:w-1/2 text-center lg:text-left pt-3 px-6 lg:px-0 lg:pt-0 lg:pr-8",
  title: "mb-2 text-6xl font-bold text-primary",
  subtitle: "mb-5 text-md text-secondary text-lg",
  description: "text-2xl text-secondary space-y-4 leading-relaxed",
  buttonContainer:
    "flex flex-wrap items-center w-auto mt-6 space-y-5 lg:px-0 lg:space-y-0 lg:space-x-5",
  buttonSecondary: "w-full lg:w-auto btn btn-secondary",
  buttonPrimary: "w-full lg:w-auto btn btn-primary",
};

export const About = () => {
  return (
    <Section title="about">
      <Container className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Experts in Print</h2>
          <h4 className={styles.subtitle}>
            We are team of professionals, and we want to be a part of your
            success.
          </h4>
          <div className={styles.description}>
            <p>
              At Gemprint we believe in providing exceptional quality, and
              extraordinary service at an affordable price.
            </p>
            <p>
              We will do our best to understand your needs and offer you what
              you really need. We offer our expertise you the best solution for
              the best price!
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/blog" passHref>
              <button className={styles.buttonSecondary}>Read the Blog</button>
            </Link>
            <Link href="/contact" passHref>
              <button className={styles.buttonPrimary}>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={aboutImage}
            alt="About section image"
            placeholder="blur"
          />
        </div>
      </Container>
    </Section>
  );
};

export default About;
