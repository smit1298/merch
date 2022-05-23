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
           <Link to="http://">Overview</Link>
           <Link to="http://">Features</Link>
           <Link to="http://">Help</Link>
           <Link to="http://">Policy</Link>
       </Row>
       Row
    </Container>
  );
}

export default Footer;
