import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <img src="./Assets/images/logo.jpg" alt="merch.xyz" />
        </Col>
      </Row>
      <Row className="d-inline text-center">
        <Link to="/">Overview</Link>
        <Link to="/">Features</Link>
        <Link to="/">Help</Link>
        <Link to="/">Policy</Link>
      </Row>
    </Container>
  );
}

export default Footer;
