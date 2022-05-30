import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <Container fluid >
      <Row className="footer text-center">
        <Col className="">
          <img src="./Assets/images/logo.jpg" alt="merch.xyz" />
        </Col>
      </Row>
      <Row className="d-inline text-center">
        <a href="/">Overview</a>
        <a href="/">Features</a>
        <a href="/">Help</a>
        <a href="/">Policy</a>
      </Row>
    </Container>
  );
}

export default Footer;
