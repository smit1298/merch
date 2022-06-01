import React from "react";
import Register from '../register/registerForm'
import Button from "../nav/Button";
import {Container, Row, Col} from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <Row>
          <Col><Register /></Col>
          <Col><Button /></Col>
      </Row>
    </Container>
  );
}

export default Contact;
