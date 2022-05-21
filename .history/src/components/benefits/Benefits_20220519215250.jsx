import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Details from "../features/details";

function Benefits(props) {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <Details
              top="Benefits"
              head="You get lots and lots of benefits from using Merch.xyz"
              brief="Overview of benefits from using Merch.xyz"
              features={[]}
            />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p>{props.item.titles}</p>
            <h4>{props.item.descriptions}</h4>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default Benefits;
