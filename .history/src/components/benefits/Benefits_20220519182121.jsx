import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Details from "../features/details";

function Benefits() {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
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
              Icon={<Icon icon="prime:check-square" />}
              title="On-Demand Ordering"
              description="We offer our clients access to a wide range of products with little or no expense of stocking pre-branded apparel and soft goods."
              features={[]}
            />
            <Details
              Icon={<Icon icon="ei:credit-card" />}
              title="Multiple Payment Options"
              description="Supports multiple checkout payment options with a payment gateway integration for credit card and account
transfer. We also use a voucher system that can be
invoiced and pay at the end of
the month."
              features={[]}
            />
          </Col>
          <Col>
            <Details
              Icon={<Icon icon="octicon:zap-24" />}
              title="Simple to place an order"
              description="Users access the your customized store using a
unique company ID and email address/Voucher ID. They can quickly glance through what they want and place the order."
              features={[]}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Benefits;
