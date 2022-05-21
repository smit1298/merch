import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Details from "../features/details";

function Benefits(props) {
  return (
    <>
      <Container>
        <Row className="text-center">
          <Col className="xl">
            <p>{props.item.titles}</p>
            <h4>{props.item.descriptions}</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Benefits;
