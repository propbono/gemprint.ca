import React from "react";
import Image from "next/image";
import heroImage from "../public/images/Hero.webp"

const styles = {
  section:
    "w-full h-auto bg-center bg-cover md:h-screen md:pt-24 relative",
  heroContainer: "container py-6 md:py-24 relative z-auto",
  card: "w-full px-8 pt-6 pb-10 bg-white rounded-md shadow-md md:opacity-60 md:w-4/6 hover:opacity-100",
  preTitle: "mb-2 text-2xl",
  title: "mb-4 text-5xl font-bold text-secondary",
};

export const Hero = () => {
  return (
    <section className={styles.section}>
      <Image
        src={heroImage}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
        className="z-[-10]"
      />
      <div className={styles.heroContainer}>
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
          <p className="mb-10 text-3xl">
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
      </div>
    </section>
  );
};
