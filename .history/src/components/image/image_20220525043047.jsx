import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './image.css'

function image(props) {
  return (
    <Container>
    <Row>
      <Col className="grey">
        <img className="grey-ima" src={props.item.img} alt={props.item.name} />
      </Col>
    </Row>
      
    </Container>
  );
}

export default image;
