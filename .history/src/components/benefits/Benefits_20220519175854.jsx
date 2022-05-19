import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Details from "../features/details";

function Benefits() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Details
              top="Benefits"
              head="You get lots and lots of benefits from using Merch.xyz"
              brief="Overview of benefits from using Merch.xyz"
              features={[]}
            />
          </Col>
        </Row>
        <Row className="text-center">
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
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Benefits;
