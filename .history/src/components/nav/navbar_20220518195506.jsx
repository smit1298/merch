import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Logo from "../../images/logo.jpg";
import "./navbar.css";

function navbar() {
  return (
    <Container fluid>
      <Navbar className="navbar shadow-sm" bg="white" expand="lg">
        <Container className="px-5">
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

      <Navbar bg="danger" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={Logo} alt="Merch_logo_image" />
          </Navbar.Brand>
          <Navbar.Toggle className="pb" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Contact us</Nav.Link>
            </Nav>
            <Nav
              className="ms-auto my-2 my-lg-0"
              // style={{ maxHeight: "150px" }}
            >
              <Nav.Link href="#">Link</Nav.Link>
              <Button variant="outline-success"> Register my company</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default navbar;
