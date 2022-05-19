import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import Button from "../nav/Button";
import front from "../../images/frontback.jpg";
import sleeve from "../../images/sleeve.jpg";
import capblue from "../../images/capblue.jpg";
import capwhite from "../../images/capwhite.jpg";
import white from "../../images/white.jpg";
import {Container, Row, Col} from "react-bootstrap";


function hero() {
  return (
<div>
      <Container>
       
        <Row>
          <Col xs={6}></Col>
          <Col xs={6}>xs=6</Col>
        </Row>
      </Container>

    <div className="container-hero">
      <div className="row w-100">
        

        <section className="col products w-50">
          <div className="row top-img">
            <img src={front} alt="front and back branded tee shirt" />
            <img src={sleeve} alt="branded sleeve" />
          </div>
          <div className="row bottom-img">
            <img src={capblue} alt="cap1" />
            <img src={capwhite} alt="cap2" />
            <img src={white} alt="white tee shirt" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default hero;
