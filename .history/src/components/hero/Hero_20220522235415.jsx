import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import Button from "../nav/Button";
import { Container, Row, Col } from "react-bootstrap";

function hero() {
  return (
    <Container fluid className="container-hero">
      <Row className="w-100">
        <Col className="get-started col-md-6 w-50">
        <div>

        </div>
         
        </Col>

        {/* Hero page Image  */}
        <Col className="products col-md-6 w-50 ">
          <Row className="top-img w-100 mb-2">
            <Col className="top-first me-2 w-50">
              <img
                src="./Assets/images/frontback.jpg"
                alt="front and back branded tee shirt"
              />
            </Col>
            <Col className="top-second w-50">
              <img src="./Assets/images/sleeve.jpg" alt="branded sleeve" />
            </Col>
          </Row>
          <Row className="bottom-img w-100">
            <Col className="bottom-first w-30">
              <img src="./Assets/images/capblue.jpg" alt="cap1" />
            </Col>
            <Col className="bottom-second w-30">
              <img src="./Assets/images/capwhite.jpg" alt="cap2" />
            </Col>
            <Col className="bottom-third w-30">
              <img src="./Assets/images/white.jpg" alt="white tee shirt" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default hero;
