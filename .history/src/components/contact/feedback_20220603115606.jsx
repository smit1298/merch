import React from "react";
import FeedbackDetail from "./feedbackDetail";
import "./feedback.css"

import { Container, Row, Col } from "react-bootstrap";

function Feedback() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="contact-bottom">
            <h6>Contact us</h6>
            <h1>We’d love to hear from you</h1>
            <p>Our friendly team is always here to chat.</p>
          </div>
        </Col>
      </Row>

      <Row className="feedback-img">
        <Col>
          <img
            src="./Assets/images/contactFeedback.png"
            alt="contact feedback"
          />
        </Col>
      </Row>

      <Row id="feedback">
        <Col className="feedback col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/envelope.png"
            title="Chat to sales"
            name="Sales Chat"
            description="Speak to our friendly team."
            contact="sales@merchs.xyz"
            link="#"
          />
        </Col>
        <Col className="feedback col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/chat.png"
            title="Chat to support"
            name="Support Chat"
            description="We’re here to help."
            contact="contact@merchs.xyz"
            link="#"
          />
        </Col>
        <Col className="feedback col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/location.png"
            title="Visit us"
            name="Support Chat"
            description="We’re here to hel."
            contact="contact@merchs.xyz"
            link="#"
          />
        </Col>
        <Col className="feedback col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/chat.png"
            title="Chat to support"
            name="Support Chat"
            description="We’re here to help."
            contact="contact@merchs.xyz"
            link="#"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Feedback;
