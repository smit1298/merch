import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../login/login";
import LoginShop from "../login/loginShop";
import "../register/register.css";
import "./loginRoute.css"

function login() {
  return (
    <Container fluid className="">
      <Row>
        <Col className=" col-sm-12 ps-5 ms-5">
          <Login />
        </Col>
        <Col className="shops">
          <LoginShop />
        </Col>
      </Row>
    </Container>
  );
}

export default login;
