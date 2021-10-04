import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import footerStyles from "@/styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col sm={6}>
            <p>© 2017-2021 Gemprint</p>
          </Col>
          <Col sm={6} className="d-flex justify-content-end">
            <Nav>
              <li className={footerStyles.socialLinks}>
                <a href="https://www.facebook.com/GemprintGTA">Facebook</a>
              </li>
              <li className={footerStyles.socialLinks}>
                <a href="https://www.instagram.com/gemprint_gta/">Instagram</a>
              </li>
              <li className={footerStyles.socialLinks}>
                <a href="https://twitter.com/GemprintTheSix">Twitter</a>
              </li>
              <li className={footerStyles.socialLinks}>
                <a href="https://linkedin.com">LinkedIn</a>
              </li>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
