import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function image(props) {
  return (
    <Container>
    <Row>
      <Col className="grey col-lg-12 col-md-4 ">
        <img className="Thanos" src={props.item.img} alt={props.item.name} />
      </Col>
    </Row>
      
    </Container>
  );
}

export default image;
