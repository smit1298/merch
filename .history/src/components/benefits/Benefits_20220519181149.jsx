import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Details from "../features/details";

function Benefits() {
  return (
    <>
      <Container>
        <Row>
          <Col clas>
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
              title="Simple to place an order"
              description="Users access the your customized store using a
unique company ID and email address/Voucher ID. They can quickly glance through what they want and place the order."
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
