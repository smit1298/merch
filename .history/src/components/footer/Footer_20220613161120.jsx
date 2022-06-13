import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="foot-logo">
        <Col className="footer-img">
          <Link className="image" ="/">
            <img src="./Assets/images/logo.jpg" alt="merch.xyz" />
          </Link>
        </Col>
      </Row>

      <Row className="footlink">
        <div className="links">
          <Link ="/">Overview</Link>
          <Link ="/">Features</Link>
          <Link ="/">Help</Link>
          <Link ="/">Policy</Link>
        </div>
      </Row>

      <Row>
        <div className="foot-small">
          <small className="rights">
            &copy; 2022 Merch.xyz. All rights reserved.
          </small>
          <small className="terms">
            <Link ="/">Terms</Link>
            <Link ="/">Privacy</Link>
            <Link ="/">Policy</Link>
          </small>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
