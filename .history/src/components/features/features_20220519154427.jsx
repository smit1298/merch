import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Details from "./details";

function features() {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <h6> Why Merch.xyz</h6>
          <h3>Features we are sure you will love</h3>
          <p>
            We are very good features that we are very sure you will actually
            love
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Details
            Icon={<Icon icon="bi:truck" />}
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
          <Details
            Icon={<Icon icon="bi:truck" />}
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
          <Details
            Icon={<Icon icon="bi:truck" />}
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
    
    </Container>
  );
}

export default features;
