import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./image.css";

function image() {
  return (
    <Container fluid id="trusted-brands">
      <Row id="images">
        <Row className="text-center">
          <Col className="trusted-text">
            <h6>Join our trusted Brands</h6>
          </Col>
        </Row>
        <Row id="allimages">
          <Col className="grey">
            <div className="grey-image">
              <img src="./Assets/images/sportinglagos.jpg" alt="sporting" />
            </div>
          </Col>
          <Col className="grey">
            <div className="grey-image">
              <img src="./Assets/images/chateau.jpg" alt="chateau" />
            </div>
          </Col>
          <Col className="grey">
            <div className="grey-image">
              <img src="./Assets/images/atco.jpg" alt="atco" />
            </div>
          </Col>
          <Col className="grey">
            <div className="grey-image">
              <img src="./Assets/images/robethson.jpg" alt="robethson" />
            </div>
          </Col>
          <Col className="grey">
            <div className="grey-image">
              <img src="./Assets/images/comerico.jpg" alt="comerico" />
            </div>
          </Col>
          <Col className="grey">
            <div className="grey-image">
              <img src="./Assets/images/settle2.jpg" alt="settle" />
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default image;
