import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Logo from "../../images/logo.jpg";
import "./navbar.css";

function navbar() {
  return (
    <Navbar id="merch-nav" bg="white" expand="lg">
      <Container >
        <Navbar.Brand className="me-5" href="#">
          <img className="ms-1" src={Logo} alt="Merch_logo_image" />
        </Navbar.Brand>
        <Navbar.Toggle className="mb-4" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "150px" }}>
            <Nav.Link className="ms-5" href="#action1">Home</Nav.Link>
            <Nav.Link className="ms-4" href="#action2">Contact us</Nav.Link>
          </Nav>
          <Nav
            className="ms-auto my-2 my-lg-0"
          >
            <Nav.Link className="me-3" href="#">Shop now</Nav.Link>
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
