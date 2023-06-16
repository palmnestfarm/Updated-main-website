import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./MyNav.css";
import palmnestLogo from "../images/palmnest_logo.webp"
const MyNav = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{ paddingTop: "0px", paddingBottom: "13px" }}>
        <Container>
          <Navbar.Brand href="/">
            <img src={palmnestLogo} alt="" className="img-fluid" width="90%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav className="d-flex ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About-us">About Us</Nav.Link>

              <NavDropdown title="Accomodation" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/luxuryTents">Luxury Tents</NavDropdown.Item>
                <NavDropdown.Item href="/cottages">Royal Cottages</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/Activities">Activities</Nav.Link>
              <Nav.Link href="/nearest-attraction">Nearest Attraction</Nav.Link>

              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                {/* <NavDropdown.Item href="/blog">Blogs</NavDropdown.Item> */}
                <NavDropdown.Item href="/testimonials">Testimonials</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/restaurant">Restaurant & Bar</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
