import React from "react";

const styles = {
  section: "bg-white-200 container mx-auto",
  columns: "grid grid-cols-2",
  about: {
    image:
      "flex items-center justify-center py-24 text-white text-3xl bg-about-section bg-contain",
    text: "px-10 py-24 text-center",
    title: "mb-3 text-5xl font-bold text-primary",
    subtitle: "mb-4 text-md text-secondary",
    description: "text-xl text-secondary space-y-4",
  },
};

export const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.about.image}>
          <h2>About</h2>
        </div>
        <div className={styles.about.text}>
          <h2 className={styles.about.title}>Experts in Print</h2>
          <h4 className={styles.about.subtitle}>
            We are team of professionals, and we want to be a part of your
            success.
          </h4>
          <div className={styles.about.description}>
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
        </div>
      </div>
    </section>
  );
};
