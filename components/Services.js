import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";

import styles from "@/styles/Services.module.scss";

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <Container>
        <Row className={`row-cols-1 row-cols-xl-3 g-4 ${styles.servicesRow}`}>
          <Col>
            <Card className={`h-100 border-0 bg-light ${styles.service}`}>
              <Card.Img
                variant="top"
                src="/images/Experts.webp"
                alt="Experts in print"
              />
              <Card.Header className={styles.serviceName}>
                Experts in Print
              </Card.Header>
              <Card.Body>
                <Card.Text className={styles.serviceDescription}>
                  We combine our expertise, best online technology and our
                  standard print services to optimize our client’s needs. Let us
                  be your trusted partner.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={`h-100 border-0 bg-light ${styles.service}`}>
              <Card.Img
                variant="top"
                src="/images/Trusted.webp"
                alt="Trusted partner image"
              />
              <Card.Header className={styles.serviceName}>
                Trusted Partner
              </Card.Header>
              <Card.Body>
                <Card.Text className={styles.serviceDescription}>
                  Since 2017 Gemprint partnered with many Canadian brands. We
                  offer our expertise and craftmanship to build your Brand and
                  deliver exceptional marketing services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={`h-100 border-0 bg-light ${styles.service}`}>
              <Card.Img
                variant="top"
                src="/images/Services.webp"
                alt="Services image"
              />
              <Card.Header className={styles.serviceName}>Services</Card.Header>
              <Card.Body>
                <Card.Text className={styles.serviceDescription}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Digital & Offset Printing
                    </li>
                    <li className="list-group-item">Social Media Marketing</li>
                    <li className="list-group-item">Direct Maling / Admail</li>
                    <li className="list-group-item">Graphic & Web Design</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
