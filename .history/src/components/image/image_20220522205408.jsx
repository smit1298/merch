import React from "react";
import { Container, Row } from "react-bootstrap";

function image(props) {
  return (
    <Container>
    <Row>
      < className="grey col ">
        <img className="Thanos" src={props.item.img} alt={props.item.name} />
      </>
    </Row>
      
    </Container>
  );
}

export default image;
