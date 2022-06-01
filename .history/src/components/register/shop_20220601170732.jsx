import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Shop() {
  return (
    <Container>
      <Row>
        <Col>
        <img src="./Assets/icons/smallYellow.png" alt="small Yellow" />
        <img src="./Assets/icons/yellowBigStar.png" alt="Big Yellow" />
        <img src="./Assets/icons/whiteStar.png" alt="white Star" />
          <h1>Shop for the best Merchs in the market</h1>
          <p>
            Create a free account and get to enjoy everything Merch.xyz has to
            offer. Get started in 2 minutes.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
