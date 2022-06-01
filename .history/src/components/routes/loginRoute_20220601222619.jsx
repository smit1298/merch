import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../login/login";
import Shop from "../register/shop";
import "../register/register.css";
import "./loginRoute.css"

function login() {
  return (
    <Container fluid>
      <Row>
        <Col className="ps-5 ms-5">
          <Login />
        </Col>
        <Col style={{height}} className="shops">
          <Shop />
        </Col>
      </Row>
    </Container>
  );
}

export default login;
