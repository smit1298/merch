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
              placeholder="Company-name@"
              name="companyName"
              type="text"
            />
            <input
              className="form-field"
              placeholder="Company Name"
              name="companyName"
              type="text"
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
