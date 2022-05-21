import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Details from "./details";

function features() {
  return (
    <Container>
      <Row className="text-center">
        <Col>
        <Details 
            top="Why Merch.xyz"
            head="Features we are sure you will love"
            brief="we are very good featrues that we are very sure you will actually love"
            features={[]}
        />
          {/* <h6> Why Merch.xyz</h6>
          <h3>Features we are sure you will love</h3>
          <p>
            We are very good features that we are very sure you will actually
            love
          </p> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Details
            Image="./Assets/icons/shipping.png"
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
          <img src="./Assets/images/Truck.png" alt="logistics" />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="./Assets/images/plattform.png" alt="logistics" />
        </Col>
        <Col>
          <Details
            Image="./Assetss/icons/<Icon icon="ion:rocket-outline" />}
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
      <Row>
        <Col>
          <Details
            Image="./Assets/icons/Domain.png"
            title="Custom Domain"   
            description="Get your custom domain with our easy to use software"
            features={[
              "Create Custom Domains",
              "No Fee",
              "Use the custom domain anywhere"
            ]}
          />
        </Col>
        <Col>{/* <img src="" alt="logistics" /> */}</Col>
      </Row>
    </Container>
  );
}

export default features;
