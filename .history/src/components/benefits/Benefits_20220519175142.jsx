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
              top="Why Merch.xyz"
              head="Features we are sure you will love"
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
