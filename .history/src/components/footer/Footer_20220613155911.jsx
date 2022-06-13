import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="text-center">
        <Col className="footer-img">
          <a className="image" href="/">
            <img src="./Assets/images/logo.jpg" alt="merch.xyz" />
          </a>
        </Col>
      </Row>
      <Row className="footlink text-center">
        <div className="links d-flex justify-content-center  text-center">
          <a href="/">Overview</a>
          <a href="/">Features</a>
          <a href="/">Help</a>
          <a href="/">Policy</a>
        </div>
      </Row>
      <Row>
        <div className="foot-small d-flex ms-5 ps-5">
          <small className="ri">
            &copy; 2022 Merch.xyz. All rights reserved.
          </small>
          <small className="terms">
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
            <a href="/">Policy</a>
          </small>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
