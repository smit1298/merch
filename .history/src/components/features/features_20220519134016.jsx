import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTruck } from "react-icons/bs";

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
          <h1>bhe</h1>
        </Col>
        <Col>
          <Details>title}</Details>
        </Col>
      </Row>
      <Row>
        <Col><h5>bsh</h5></Col>
        <Col><h4>mnfkj</h4></Col>
      </Row>
      <Row>
        <Col><h2>yuhg</h2></Col>
        <Col><h3>lksbh</h3></Col>
      </Row>
    </Container>
  );
}

export default features;
