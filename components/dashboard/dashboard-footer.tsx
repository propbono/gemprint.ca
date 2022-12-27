import { Container, Section } from "components";
import React from "react";

const styles = {
  section: "bg-secondary text-gray-100 text-lg",
  wrapper:
    "flex text-center md:text-left flex-col-reverse w-full md:w-auto md:justify-between md:flex-row py-3",
};

export const DashboardFooter = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <footer className={styles.wrapper}>
          <div>
            <p>© 2017-2022 Gemprint</p>
          </div>
        </footer>
      </Container>
    </Section>
  );
};

export default DashboardFooter;
