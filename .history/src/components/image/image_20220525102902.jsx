import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./image.css";

function image(props) {
  return (
    <Container>
      <Row className="images">
        <Col className="grey">
          <div className="grey-image"><img src="./Assets/images/sportinglagos.jpg" alt="sporting" /> </div>
        </Col>
        <Col className="grey">
          <div className="grey-image"><img src="./Assets/images/chateau.jpg" alt="chateau" /> </div>
        </Col>
        <Col className="grey">
          <div className="grey-image"><img src="./Assets/images/atco.jpg" alt="sporting" /> </div>
        </Col>
        <Col className="grey">
          <div className="grey-image"><img src="./Assets/images/sportinglagos.jpg" alt="sporting" /> </div>
        </Col>
        <Col className="grey">
          <div className="grey-image"><img src="./Assets/images/sportinglagos.jpg" alt="sporting" /> </div>
        </Col>
        <Col className="grey">
          <div className="grey-image"><img src="./Assets/images/sportinglagos.jpg" alt="sporting" /> </div>
        </Col>
      </Row>
    </Container>
  );
}

export default image;
