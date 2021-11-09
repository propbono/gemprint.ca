import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full h-auto bg-center bg-cover md:h-screen md:pt-24 bg-hero-section">
      <div className="container py-6 md:py-24">
        <div className="w-full px-8 pt-6 pb-10 bg-white rounded-md shadow-md md:opacity-60 md:w-3/4 hover:opacity-100">
          <p className="mb-2 text-2xl">
            May 2, 2018 by{" "}
            <strong className="text-primary">Maimuna Gabeyre</strong>
          </p>
          <h2 className="mb-4 text-5xl font-bold text-secondary">
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
            className="px-6 py-4 my-auto text-xl text-white rounded bg-primary hover:bg-secondary hover:text-gray-100"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};
