import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../login/login";

function login() {
  return (
    <Container>
      <Row>
        <Col>
          <Login />
        </Col>
        <Col className="shops">
          <Shop />
        </Col>
      </Row>
    </Container>
  );
}

export default login;
