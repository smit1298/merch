import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Details from "../features/details";

function Benefits() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Details
              top="Benefits"
              head="You get lots and lots of benefits from using Merch.xyz"
              brief="we are very good featrues that we are very sure you will actually love"
              features={[]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Benefits;
