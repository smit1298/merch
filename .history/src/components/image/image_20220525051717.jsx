import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './image.css'

function image(props) {
  return (
    <Container>
      <Row>
        <Col className="grey">
          <div className="grey-image">
            <img className="image" src={props.item.img} alt={props.item.name} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default image;
