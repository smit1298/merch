import React from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Navbar
} from "react-bootstrap";
import Logo from "../images/logo.jpg";

function navbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="" />
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
<Nav.Link></Nav.Link>
            <Nav.Link variant="outline-success">Register my company</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;
