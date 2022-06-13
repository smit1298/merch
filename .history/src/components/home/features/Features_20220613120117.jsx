import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Details from "./details";
import "./features.css";

function features() {
  return (
    <Container className="whole mt-5 pt-5">
      <Row className="text-center">
        <Col>
          <div className="top mb-4">
            <h4>Why Merch.xyz</h4>
            <h3>Features we are sure you will love</h3>
            <p>
              We are very good featrues that we are very sure you will actually
              love
            </p>
          </div>
        </Col>
      </Row>

      <Row className="bottom shipping d-flex">
        <Col className="first mb-5">
          <Details
            Image="./Assets/icons/shipping.png"
            name="Free shipping"
            title="Free Shipping"
            description="No matter the size of your item or location, Our shipment services would get to you"
            features={[
              "Over 1000+ shipping partners",
              "Cross Country Shipping",
              "Ship as easy as you want"
            ]}
            Gif="./Assets/images/Truck.gif"
          />
        </Col>
      </Row>

      <Row className=" bottom plattform d-flex">
        <Col className="plattform-cont">
          <img
            className="imgCont2"
            src="./Assets/images/plattform.gif"
            alt="plattform"
          />
        </Col>
        <Col className="second plattform-cont mb-5">
          <Details
            Image="./Assets/icons/integration.png"
            name="plattform integration"
            title="Platform Integration"
            description="Plugin other services you would want with your platform and have a wonderful experience"
            features={[
              "Over 100+ different Integrations",
              "Direct Integration with the Apple Store",
              "Direct Integration with the Google Play Store"
            ]}
            Gif="./Assets/images/Truck.gif"
          />
        </Col>
      </Row>

      <Row className="bottom domain d-flex">
        <Col className="third">
          <Details
            Image="./Assets/icons/Domain.png"
            name="custom domain"
            title="Custom Domain"
            description="Get your custom domain with our easy to use software"
            features={[
              "Create Custom Domains",
              "No Fee",
              "Use the custom domain anywhere"
            ]}
            Gif="./Assets/images/Truck.gif"
          />
        </Col>
        <Col>
          <img
            className="imgCont3 mt-5 pt-5"
            src="./Assets/images/domain.gif"
            alt="logistics"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default features;
