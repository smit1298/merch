import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";



function navbar() {
  const [Button]

  return (
    <Navbar className="general shadow-sm" bg="white" expand="lg">
      <Container className="nav-container">
        <Navbar.Brand className="logo me-5" href="/">
          <img src="./Assets/images/logo.jpg" alt="Merch_logo_image" />
          {/* <p className="merch-name">Merch.xyz</p> */}
        </Navbar.Brand>
        <Navbar.Toggle className="minimize mb-4" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "150px" }}>
            <Nav.Link>
              <Link className="link" to="/" onClick={setButton}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/contact"> Contact us</Link>
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link className="me-3">
              <Link className="link" to="">Shop now</Link>
            </Nav.Link>
            <Link className="link" to="/register">
              <Button id="register" variant="outline-success">
                Register my company
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
