import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <Row>
        <Col className="form-container">
          <form className="register-form">
            <input
              className="form-field"
              placeholder="Company ABC"
              name="companyName"
              type="text"
            />
            <input
              className="form-field"
              placeholder="Company-name@testcompany.com"
              name="companyEmail"
              type="email"
            />
            <input
              className="form-field"
              placeholder="3493803202010"
              name="rcNumber"
              type="number"
            />
            <input
              className="form-field"
              placeholder="Company Name"
              name="companyName"
              type="text"
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
