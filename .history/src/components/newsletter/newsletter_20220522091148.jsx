import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../nav/Button";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h5>Join our newsletter</h6>
          </div>
          <div>
            <p>
              Sign up for our newsletter and get 10% off your next purchase.
            </p>
          </div>
        </Col>
        <Col>
          <form>
            <span>
              <input
                aria-label="Your email address"
                name="email_address"
                placeholder="Your email address"
                required
                type="email"
                //   onChange={handleEmailChange}
                value={email}
              />
              <Button onClick={""}>Subscribe</Button>
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscribeForm;
