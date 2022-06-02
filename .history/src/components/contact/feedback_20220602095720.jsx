import React from "react";
import FeedbackDetail from "./feedbackDetail";

import { Container, Row, Col } from "react-bootstrap";

function Feedback() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="contact-head">
            <h6>Contact us</h6>
            <h1>We’d love to hear from you</h1>
            <p>Our friendly team is always here to chat.</p>
          </div>
        </Col>
      </Row>
      <Row>
<Col className="col-lg-4">
            <Detail
              Image="./Assets/icons/order.png"
              name="place an order"
              title="Simple to place an order"
              description="Users access the your customized store using a unique company ID and email address/Voucher ID. They can quickly glance through what they want and place the order."
              // features={[]}
            />

          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
      </Row>
    </Container>
  );
}

export default Feedback;
