import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="foot-logo">
        <Col className="footer-img">
          <Link className="image" to="/">
            <img src="./Assets/images/logo.jpg" alt="merch.xyz" />
          </Link>
        </Col>
      </Row>

      <Row className="footlink">
        <div className="links">
          <Link  className="" to="/">Overview</Link>
          <Link className="" to="/">Features</Link>
          <Link className="" to="/">Help</Link>
          <Link className="" to="/">Policy</Link>
        </div>
      </Row>

      <Row>
        <div className="foot-small">
          <small className="rights">
            &copy; 2022 Merch.xyz. All rights reserved.
          </small>
          <small className="terms">
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Policy</Link>
          </small>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
