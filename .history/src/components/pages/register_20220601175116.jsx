import React from "react";
import Register from '../register/registerForm'
import {Container, Row, Col} from "react-bootstrap";
import Shop from "../register/shop";

function Contact() {
  return (
    <Container fluid>
      <Row>
          <Col><Register /></Col>
          <Col ><Shop /></Col>
      </Row>
    </Container>
  );
}

export default Contact;
