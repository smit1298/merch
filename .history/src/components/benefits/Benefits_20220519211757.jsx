import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Details from "../features/details";

function Benefits(props) {

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
            <div>
              <
                src={props.item.img}
                alt={props.item.name}
              />
            </div>
          </Col>
          <Col>
            <Details
              Image="./Assets/icons/order.png"
              name="place an order"
              title="Simple to place an order"
              description="Users access the your customized store using a unique company ID and email address/Voucher ID. They can quickly glance through what they want and place the order."
              features={[]}
            />
          </Col>
          <Col>
            <Details
              Image="./Assets/icons/payment.png"
              name="payment option"
              title="Multiple Payment Options"
              description="Supports multiple checkout payment options with a payment gateway integration for credit card and account transfer. We also use a voucher system that can be invoiced and pay at the end of the month."
              features={[]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Benefits;
