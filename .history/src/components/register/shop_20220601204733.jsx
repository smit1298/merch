import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./shop.css";

function Shop() {
  return (
    <Container fluid className="cont">
      <Row>
        <Col className="shop">
          <div className="stars">
            <img src="./Assets/icons/smallYellowStar.png" alt="small Yellow" />
            <img src="./Assets/icons/yellowBigStar.png" alt="Big Yellow" />
            <img src="./Assets/icons/whiteStar.png" alt="white Star" />
          </div>
          <div className="content">
            <h1>Shop for the best Merchs in the market</h1>
            <p>
              Create a free account and get to enjoy everything Merch.xyz has to
              offer. Get started in 2 minutes.
            </p>
          </div>
<div className="register-avatar">
  <img src="./Assets/images/register1.png" alt="avatar1" />
  <img src="./Assets/images/register1.png" alt="avatar2" />
  <img src="./Assets/images/register1.png" alt="avatar1" />
  <img src="./Assets/images/register1.png" alt="avatar1" />
  <img src="./Assets/images/register1.png" alt="avatar1" />
</div>

        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
