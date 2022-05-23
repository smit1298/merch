import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./navbar.css";

function navbar() {
  return (
    <Navbar className="general shadow-sm" bg="white" expand="lg">
      <Container className="nav-container">
        <Navbar.Brand className="logo me-5" href="#">
          <img src="./Assets/images/logo.jpg" alt="Merch_logo_image" />
          <p style={{display: "none"}} clas>Merch.xyz</p>
        </Navbar.Brand>
        <Navbar.Toggle className="minimize mb-4" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "150px" }}>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#action2">Contact us</Nav.Link>
          </Nav>

          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link className="me-3" href="#">
              Shop now
            </Nav.Link>
            <Button id="register" variant="outline-success">
              Register my company
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
