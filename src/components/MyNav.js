import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./MyNav.css";
import palmnestLogo from "../images/palmnest_logo.webp"
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{ paddingTop: "0px", paddingBottom: "13px" }}>
        <Container>
          <Navbar.Brand to="/">
            <img src={palmnestLogo} alt="" className="img-fluid" width="90%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
            <Nav className="d-flex">
              <Nav.Link className="myNavs" eventKey="1"><Link to="/"> Home </Link></Nav.Link>

              <Nav.Link className="myNavs" eventKey="2"><Link to="/About-us">About Us</Link></Nav.Link>

              <NavDropdown title="Accomodation" id="navbarScrollingDropdown">
                <NavDropdown.Item className="myNavs" eventKey="3"><Link to="/luxuryTents">Luxury Tents</Link></NavDropdown.Item>
                <NavDropdown.Item className="myNavs" eventKey="4"><Link to="/cottages">Royal Cottages</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="myNavs"><Link to="/restaurant">Restaurant & Bar</Link></Nav.Link>
              <Nav.Link className="myNavs"><Link to="/Activities">Activities</Link></Nav.Link>
              <Nav.Link className="myNavs"><Link to="/nearest-attraction">Nearest Attraction</Link></Nav.Link>

              <Nav.Link className="myNavs"><Link to="/testimonials"> Testimonials </Link></Nav.Link>
              {/* <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item className="myNavs"><Link to="/gallery">Gallery</Link></NavDropdown.Item>
                <NavDropdown.Item className="myNavs"><Link to="/testimonials">Testimonials</Link></NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link className="myNavs"><Link to="/contact">Contact Us</Link></Nav.Link>

              <Nav.Link className="myNavs" eventKey="5"><Link to="/Activities">Activities</Link></Nav.Link>
              <Nav.Link className="myNavs" eventKey="6"><Link to="/nearest-attraction">Nearest Attraction</Link></Nav.Link>

              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item className="myNavs" eventKey="7"><Link to="/gallery">Gallery</Link></NavDropdown.Item>
                <NavDropdown.Item className="myNavs" eventKey="8"><Link to="/testimonials">Testimonials</Link></NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="myNavs" eventKey="9"><Link to="/restaurant">Restaurant & Bar</Link></Nav.Link>
              <Nav.Link className="myNavs" eventKey="10"><Link to="/contact">Contact Us</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
