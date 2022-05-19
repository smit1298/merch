import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default navbar;
