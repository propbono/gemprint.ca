import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import navStyles from "../styles/Header.module.scss";

const Header = () => {
  const renderNavList = () => {
    return links.map((item) => {});
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      className={navStyles.navShaddow}
    >
      <Container>
        <Navbar.Brand href="#home" className={navStyles.navbarBrand}>
          <Image
            className="logo-image"
            alt="Logo of Gemprint - experts in print"
            src="/images/Gemprint-vector-logo.svg"
            title="Gemprint"
            width="170"
            height="30"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="main-menu">
            <Link href="/" passHref>
              <Nav.Link className={navStyles.navbarItem}>Home</Nav.Link>
            </Link>
            <Link href="/#about" passHref>
              <Nav.Link className={navStyles.navbarItem}>About</Nav.Link>
            </Link>
            <Link href="/quote" passHref>
              <Nav.Link className={navStyles.navbarItem}>
                Request a Quote
              </Nav.Link>
            </Link>
            <Link href="/faqs" passHref>
              <Nav.Link className={navStyles.navbarItem}>FAQs</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className={navStyles.navbarItem}>Contact us</Nav.Link>
            </Link>
            <Link href="/blog" passHref>
              <Nav.Link className={navStyles.navbarItem}>Blog</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
