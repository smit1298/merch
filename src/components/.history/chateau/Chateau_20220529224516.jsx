import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./chateau.css";

function Chateau() {
  return (
    <>
      <Container fluid>
        <Row className="chateau">
          <Col className="text-center">
            <div className="chateau-img">
              <img src="./Assets/images/chateau.jpg" alt="chateau" />
            </div>
            .quote
            <h3>
              Merch.xyz has really increased our brand outlook, they make really
              awesome brand items that are easily recognisiable and what we
              represent as a brand, i will always use them.
            </h3>
            <img src="./Assets/images/osonuga.png" alt="osonuga" />
            <h4>Osonuga Oluwatobi</h4>
            <p>Managing Director / Chateau Royal</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Chateau;
