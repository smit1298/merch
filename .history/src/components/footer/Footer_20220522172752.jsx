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
           <Link href="http://">Overview</Link>
           <Link href="http://">Features</Link>
           <Link href="http://">Help</Link>
           <Link href="http://">Policy</Link>
       </Row>
    </Container>
  );
}

export default Footer;
