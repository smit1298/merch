import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./image.css";

function image() {
  return (
    <Container>
      <Row className="images">
        <Row className="text">
          <div>
            <h6>join our trusted brands</h6>
          </div>
        </Row>
        <Row>
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
