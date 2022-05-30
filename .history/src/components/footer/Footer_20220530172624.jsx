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
        <a ="/">Overview</a>
        <a ="/">Features</a>
        <a ="/">Help</a>
        <a ="/">Policy</a>
      </Row>
    </Container>
  );
}

export default Footer;
