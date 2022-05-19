import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";

import Details from "./details";

function features() {
  return (
    <Container>
      <Row>
        <Col>
          <h6> Why Merch.xyz</h6>
          <h3>Features we are sure you will love</h3>
          <p>
            We are very good features that we are very sure you will actually
            love
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Details Icon={<BsTruck/>} />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default features;
