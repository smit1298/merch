import React from "react";
import { Container } from "react-bootstrap";

function image(props) {
  return (
    <Container>
    
      <div className="grey col">
        <img className="Thanos" src={props.item.img} alt={props.item.name} />
      </div>
    </Container>
  );
}

export default image;
