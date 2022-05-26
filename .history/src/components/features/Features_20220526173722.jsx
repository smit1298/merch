import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Icon } from "@iconify/react";
import Details from "./details";
import './features.css'

const imgStyle ={
width: '576px',
height: '400px',
borderRadius: '8px',

}

function features() {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <div className="top">
            <h4>Why Merch.xyz</h4>
            <h3>Features we are sure you will love</h3>
            <p>
              We are very good featrues that we are very sure you will actually
              love
            </p>
          </div>
        </Col>
      </Row>

      <Row className="shipping">
        <Col>
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
          />
        </Col>
        <Col>
          <img style={imgStyle} src="./Assets/images/Truck.gif" alt="logistics" />
        </Col>
      </Row>

      <Row className="plattform">
        <Col>
          <img style={imgStyle} src="./Assets/images/plattform.gif" alt="plattform" />
        </Col>
        <Col>
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
          />
        </Col>
      </Row>

      <Row className="domain">
        <Col>
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
          />
        </Col>
        <Col>
          <img style={imgStyle} src="./Assets/images/domain.gif" alt="logistics" />
        </Col>
      </Row>
    </Container>
  );
}

export default features;
