import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./image.css";

function image() {
  return (
    <Container fluid id="trusted-brands">
      <Row id="images">
        <Row className="trusted-center">
          <Col className="trusted-text">
            <h6>Join our trusted Brands</h6>
          </Col>
        </Row>
        <Row id="allimages">
          <Col className="grey d-flex ">
            <div class="col-md-2 col-sm-6">
              <img
                class="img-responsive"
                src="https://www.linkedfilm.com/upload/photos/2019/01/mercenaries.jpg"
             alt="n" />
            </div>
            <div class="col-md-2 col-sm-6">
              <img
                class="img-responsive"
                src="https://www.linkedfilm.com/upload/photos/2019/01/Narco-Valley.jpg"
             alt="n" />
            </div>
            <div class="col-md-2 col-sm-6">
              <img
                class="img-responsive"
                src="https://www.linkedfilm.com/upload/photos/2019/01/Vikingdom.jpg"
             alt="n" />
            </div>
            <div class="col-md-2 col-sm-6">
              <img
                class="img-responsive"
                src="https://www.linkedfilm.com/upload/photos/2019/01/Red-Dirt-Rising.jpg"
             alt="n" />
            </div>
            <div class="col-md-2 col-sm-6">
              <img
                class="img-responsive"
                src="https://www.linkedfilm.com/upload/photos/2019/01/At-All-Cost.jpg"
             alt="n" />
            </div>
            <div class="col-md-2 col-sm-6">
              <img
                class="img-responsive"
                src="https://www.linkedfilm.com/upload/photos/2019/01/mercenaries.jpg"
             alt="n" />
            </div>
            {/* <div className="grey-image col col-md-4 col-l ps-5 me-5">
              <img src="./Assets/images/sportinglagos.jpg" alt="sporting" />
            </div>
            <div className="grey-image col col-md-4 col-l ps-5 me-5">
              <img src="./Assets/images/chateau.jpg" alt="chateau" />
            </div>
            <div className="grey-image col col-md-4 col-l ps-5 me-5">
              <img src="./Assets/images/atco.jpg" alt="atco" />
            </div>
            <div className="grey-image col col-md-4 col-l ps-5 me-5">
              <img src="./Assets/images/robethson.jpg" alt="robethson" />
            </div>{" "}
            <div className="grey-image col col-md-4 col-l ps-5 me-5">
              <img src="./Assets/images/comerico.jpg" alt="comerico" />
            </div>{" "}
            <div className="grey-image col col-md-4 col-l ps-5 me-5">
              <img src="./Assets/images/settle2.jpg" alt="settle" />
            </div> */}
          </Col>
          {/* <Col className="grey"></Col>
          <Col className="grey"></Col>
          <Col className="grey"></Col>
          <Col className="grey"></Col>
          <Col className="grey"></Col> */}
        </Row>
      </Row>
    </Container>
  );
}

export default image;
