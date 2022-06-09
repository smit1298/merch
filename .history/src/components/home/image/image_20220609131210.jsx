import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./image.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Slider from ''
import { Carousel } from "react-responsive-carousel";

  
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
          <div className="grey-container row d-flex ps-4 ms-3">
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/sportinglagos.jpg" alt="sporting" />
            </div>
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/chateau.jpg" alt="chateau" />
            </div>
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/atco.jpg" alt="atco" />
            </div>
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/robethson.jpg" alt="robethson" />
            </div>
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/comerico.jpg" alt="comerico" />
            </div>
            <div className="grey-image settle col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/settle2.jpg" alt="settle" />
            </div>
          </div>
        </Row>

<Row>
  <Slider />
</Row>
       
      </Row>
    </Container>
  );
}

export default image;
