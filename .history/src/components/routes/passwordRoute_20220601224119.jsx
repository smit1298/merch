import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Password from "../password/password"
import PasswordShop from '../password/passwordShop'

const passwordRoute = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="ps-5 ms-5"><Password /></Col>
        <Col><PasswordShop /></Col>
      </Row>
    </Container>
  );
}

export default passwordRoute