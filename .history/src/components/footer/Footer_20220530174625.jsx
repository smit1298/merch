import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <Container fluid >
      <Row className="footer text-center">
        <Col className="foote-img">
          <img src="./Assets/images/logo.jpg" alt="merch.xyz" />
        </Col>
      </Row>
      <Row className="footlink d-inline justify-content-center text-center">
       <div>
          <a href="/">Overview</a>
        <a href="/">Features</a>
        <a href="/">Help</a>
        <a href="/">Policy</a>
       </div>
      </Row>
    </Container>
  );
}

export default Footer;
