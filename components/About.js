import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "@/styles/About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <Row>
          <Col
            md={5}
            className={`${styles.aboutTitle} 
                d-flex d-flex align-items-center 
                justify-content-center text-white
                `}
          >
            <h2>About</h2>
          </Col>
          <Col
            md={7}
            className={`d-flex flex-column 
          ${styles.aboutText} ${styles.aboutDescription}`}
          >
            <p>
              <strong>
                We are a experts in print, team of professionals, and we want to
                be a part of your team.
              </strong>
            </p>
            <p>
              At Gemprint we believe in providing exceptional quality, and
              extraordinary service at an affordable price.{" "}
            </p>
            <p>
              We will do our best to understand your needs and offer you what
              you really need. We offer our expertise you the best solution for
              the best price!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
