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
          <div className="left">
            <p className="inline">
              <span className="what">What’s new?</span>
              <span className="get ms-2">Get 10% of your next Merch Buy</span>
            </p>

            <h2 className="produce">
              <span style={{ color: "#566BD9" }}>Produce</span> & &nbsp;
              <span style={{ color: "#DBA90F" }}>ship</span> your branded
              materials straight to you and your stakeholders.
            </h2>

            <p className="design">
              We design and produce your company merchandise for your employees,
              customers, partners and events.
            </p>

            {/* <Button className="btn-started" href="#text-buttons">
            Get Started
          </Button> */}

            <Button href="#">Get Started</Button>
          </div>
        </Col>

        {/* Hero page Image  */}
        <Col className="products col-md-6 w-50 ">
        <div className="right">

        </div>
          
        </Col>
      </Row>
    </Container>
  );
}

export default hero;
