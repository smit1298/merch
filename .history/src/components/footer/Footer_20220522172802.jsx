import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <Row className="text-center">
      <Col>
      <img src="./Assets/images/logo.jpg" alt="merch.xyz" />

      </Col>
      </Row>
       <Row className="d-inline text-center">
           <Link ="http://">Overview</Link>
           <Link ="http://">Features</Link>
           <Link ="http://">Help</Link>
           <Link ="http://">Policy</Link>
       </Row>
    </Container>
  );
}

export default Footer;
