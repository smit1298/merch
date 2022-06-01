import React from "react";
import Register from '../register/registerForm'
import {Container, Row, Col} from "react-bootstrap";
import Shop from "../register/shop";
impo

function Contact() {
  return (
    <Container fluid>
      <Row>
          <Col><Register /></Col>
          <Col className="shops"><Shop /></Col>
      </Row>
    </Container>
  );
}

export default Contact;
