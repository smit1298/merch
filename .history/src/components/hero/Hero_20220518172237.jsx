import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import Button from "../nav/Button";
import front from "../../images/frontback.jpg";
import sleeve from "../../images/sleeve.jpg";
import capblue from "../../images/capblue.jpg";
import capwhite from "../../images/capwhite.jpg";
import white from "../../images/white.jpg";
import { Container, Row, Col } from "react-bootstrap";


function hero() {
  return (
    
    <div className="container-hero">
      <Row className="row w-100">
        <Col className="col get-started w-50 ">
          <p className="inline">
            <span className="what">What’s new?</span>
            <span className="get ms-2">Get 10% of your next Merch Buy</span>
          </p>

          <h2 className="produce">
            <span style={{ color: "#566BD9" }}>Produce</span> & &nbsp;
            <span style={{ color: "#DBA90F" }}>ship</span> your branded
            materials straight to you and your stakeholders.
          </h2>

          <p>
            We design and produce your company merchandise for your employees,
            customers, partners and events.
          </p>

          {/* <Button className="btn-started" href="#text-buttons">
            Get Started
          </Button> */}

        <Button href="" >Get Started</Button>

        </Col>

        <Col className="col products w-50">
          <div className="row top-img">
            <img src={front} alt="front and back branded tee shirt" />
            <img src={sleeve} alt="branded sleeve" />
          </div>
          <div className="row bottom-img">
            <img src={capblue} alt="cap1" />
            <img src={capwhite} alt="cap2" />
            <img src={white} alt="white tee shirt" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default hero;
