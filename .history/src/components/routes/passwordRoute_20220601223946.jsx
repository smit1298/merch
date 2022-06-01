import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Password from "../password/password"

const passwordRoute = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="ps-5 ms-5"><password /></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default passwordRoute