import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function image(props) {
  return (
    <Container>
    <Row>
      <Col className="grey">
        <img style={{width: "80px", height: " 30px"}} className="Thanos" src={props.item.img} alt={props.item.name} />
      </Col>
    </Row>
      
    </Container>
  );
}

export default image;
