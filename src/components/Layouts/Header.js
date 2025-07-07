import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll"; // use this!
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    setNav(scrollValue > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand>
            <Link to="home" smooth={true} duration={500} offset={-70} className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as="span">
                <Link to="home" smooth={true} duration={500} offset={-70} className="nav-link">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link to="about" smooth={true} duration={500} offset={-70} className="nav-link">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link to="menuSection" smooth={true} duration={500} offset={-70} className="nav-link">
                  Our Menu
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link to="shop" smooth={true} duration={500} offset={-70} className="nav-link">
                  Shop
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link to="contact" smooth={true} duration={500} offset={-70} className="nav-link">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link to="footer" smooth={true} duration={500} offset={-70} className="nav-link">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;