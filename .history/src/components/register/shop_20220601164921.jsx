import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Shop() {
  return (
    <Container>
      <Row>
        <Col>
          <Icon
            icon="mdi:star-four-points"
            color="yellow"
            width="720"
            height="50"
          />
          <Icon icon="mdi:star-four-points-outline" width="720" height="100" />
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
