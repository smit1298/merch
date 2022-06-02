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

      <Row >
          <Col>
              <img src="./Assets/images/contactFeedback.png" alt="contact feedback" />
          </Col>
      </Row>

      <Row>
        <Col className="col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/envelope.png"
            title="Chat to sales"
            name="Sales Chat"
            description="Speak to our friendly team."
            contact="sales@merchs.xyz"
          />
        </Col>
        <Col className="col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/chat.png"
            title="Chat to support"
            name="Support Chat"
            description="We’re here to help."
            contact="contact@merchs.xyz"
          />
        </Col>
        <Col className="col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/location.png"
            title="Visit us"
            name="Location"
            description="Visit our office HQ."
            contact="39, Ikorodu road, Jibowu, Lagos. "
          />
        </Col>
        <Col className="col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/call.png"
            title="Call us"
            name="Sales Chat"
            description="Mon-Fri from 8am to 5pm."
            contact="+234 812 318 7053"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Feedback;
