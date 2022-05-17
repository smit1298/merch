import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../images/logo.jpg";
import "./navbar.css";

function navbar() {
  return (
    <div>
      <Navbar className="navbar shadow-sm" bg="white" expand="lg">
        <Container className="px ">
          <Navbar.Brand className="logo" href="#">
            <img src={Logo} alt="Merch_logo_image" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Contact us</Nav.Link>
            </Nav>

            <Nav.Link id="shop" className="me-3">
              Shop now
            </Nav.Link>
            <Nav.Link id="register" className="me-5" variant="outline-success">
              Register my company
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;
