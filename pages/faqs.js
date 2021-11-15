import React, { useRef } from "react";
import { Layout, FormCard } from "@/components";

const styles = {
  section: "relative lg:min-h-screen lg:pt-24",
  container: "container py-6 lg:py-17 relative z-auto",
  description: "p-6 flex"
  };

const Faqs = () => {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.container}>
          <FormCard title="I’m not sure if my artwork is correct, what should I do?">
            <p className={styles.description}>
              That’s why we are here. If you are in any doubt or have any
              questions please contact us and we will be delighted to help you.
              Or, choose to email your artwork when ordering and tell us in the
              email what you are unsure about and we will check it out for you.
              We’re experts in digital printing, so you don’t have to be!
            </p>
          </FormCard>
          <FormCard title="What is Bleed?">
            <p className={styles.description}>
              An ink that prints beyond the trim edge of the page to ensure it
              extends to the edge of the page after trimming. As there is a
              degree of movement when printing on any press, you should always
              create 3mm bleed on all edges where the bleed is needed. Supplying
              your job without bleed may result in white lines when we trim it.
            </p>
          </FormCard>
          <FormCard title="How do I supply my artwork?">
            <p className={styles.description}>
              Please upload your artwork during a checkout process. On the
              checkout page, there is a filed where you can upload your files.
              However, if your files are bigger than 64 MB (each) please upload
              them to wetransfer.com and send us the links.
            </p>
          </FormCard>
          <FormCard title="Can I add items or make changes to an existing order?">
            <p className={styles.description}>
              If your order is placed on hold or pending payment, you still can
              make some changes to your artwork or the order itself. However,
              please contact us as soon as possible by phone, so we can make
              sure your changes will be included in the production.
            </p>
          </FormCard>
          <FormCard title="What are the methods of payment?">
            <p className={styles.description}>
              You can pay by Credit Card using PayPal gateway or E-mail
              transfer. For returning customers we are also accepting cheques.
            </p>
          </FormCard>
          <FormCard title="Can you check my artwork to make sure it’s set up correctly?">
            <p className={styles.description}>
              Of course! This is part our our process to make sure that all
              orders are produced properly, and we’ll do it for free! By the
              time we release your job to print our experts will have it
              checked. If you want to know more about our process or what we
              check, please follow our blog.
            </p>
          </FormCard>
        </div>
      </section>
    </Layout>
  );
};

export default Faqs;
