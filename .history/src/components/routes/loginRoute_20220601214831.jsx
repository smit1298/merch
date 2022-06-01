import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../login/login";
import Shop from "../register/shop";
import "../register/register.css";


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
