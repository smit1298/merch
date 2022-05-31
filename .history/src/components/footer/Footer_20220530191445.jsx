import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="text-center">
        <Col className="footer-img">
          <img src="./Assets/images/logo.jpg" alt="merch.xyz" />
        </Col>
      </Row>
      <Row className=" text-center">
        <div className="footlink d-flex justify-content-center  text-center">
          <a href="/">Overview</a>
          <a href="/">Features</a>
          <a href="/">Help</a>
          <a href="/">Policy</a>
        </div>
      </Row>
      <Row>
        <div className="foot-small">
          <small>&copy; 2022 Merch.xyz. All rights reserved.</small>
        <a href="http://"></a>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
