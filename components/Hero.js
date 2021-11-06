import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import heroStyles from "@/styles/Hero.module.scss";

export const Hero = () => {
  return (
    <section className={heroStyles.hero}>
      <Container>
        <Row>
          <Col xs={9} sm={11} lg={9} className={`card ${heroStyles.heroCard}`}>
            <div className="card-body">
              <p>
                May 2, 2018 by{" "}
                <strong className="text-primary">Maimuna Gabeyre</strong>
              </p>
              <h2 className={heroStyles.heroCardTitle}>
                Be original, be creative choose Gemprint
              </h2>
              <Image
                src="/images/zigzag.svg"
                className={heroStyles.heroCardSeparator}
                alt="zig_zag image"
                width={100}
                height={20}
              />
              <p className={heroStyles.heroCardContent}>
                Are you looking for a reliable and affordable printer? We are
                experts in print. Our experienced team is here to help you
                succeed.
              </p>
              <a
                href="mailto:maimuna.gabeyre@gemprint.ca"
                className="mt-auto text-white btn btn-primary"
              >
                Request a Quote
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
