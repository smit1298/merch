import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Register() {
  const [values, setValues] = useState({
    companyName: "",
    companyEmail: "",
    rcNumber: "",
    password: "",
    comfirmPassword: ""
  });

  const handleCompanyName = (event) => {
    setValues({ ...values, companyName: event.target.value });
  };
  const handleCompanyEmail = (event) => {
    setValues({ ...values, companyEmail: event.target.value });
  };
  const handleRcNumber = (event) => {
    setValues({ ...values, rcNumber: event.target.value });
  };
  const handlePassword = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleComfirmPassword = (event) => {
    setValues({ ...values, comfirmPassword: event.target.value });
  };

  return (
    <Container>
      <Row>
        <Col className="form-container">
          <img src="./Assets/images/logo.jpg" alt="Merch.xyz" />
          <h1>Register my company</h1>
          <form className="register-form">
          .suc
            <label htmlFor="companyName">
              Company Name<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              onChange={handleCompanyName}
              value={values.companyName}
              className="form-field"
              placeholder="Company ABC"
              name="companyName"
              type="text"
            />
            <br />
            <label htmlFor="companyEmail">
              Company Email<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              onChange={handleCompanyEmail}
              value={values.companyEmail}
              className="form-field"
              placeholder="Company-name@testcompany.com"
              name="companyEmail"
              type="email"
            />
            <br />
            <label htmlFor="rcNumber">RC Number</label> <br />
            <input
              onChange={handleRcNumber}
              value={values.rcNumber}
              className="form-field"
              placeholder="3493803202010"
              name="rcNumber"
            />
            <br />
            <label htmlFor="password">
              Password<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              onChange={handlePassword}
              value={values.password}
              className="form-field"
              placeholder="Create a password"
              name="password"
              type="password"
            />
            <br />
            <label htmlFor="password">
              Confirm Password<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              onChange={handleComfirmPassword}
              value={values.comfirmPassword}
              className="form-field"
              placeholder="Create a password"
              name="confirmPassword"
              type="password"
            />
            <br />
            <button type="submit">Create my account</button> <br />
            <button type="submit">Sign up with Typeform</button> <br />
            <span className="d-flex">
              <p>Already have an account? </p> &nbsp;
              <a href="http://"> Log in</a>
            </span>
          </form>
          <span className="d-flex">
            <small>
              <p>&copy; Company-name</p>
            </small>
            <small>
              <img src="./Assets/icons/message.png" alt="message" />
              <a href="/contact">help@testcompany.com</a>
            </small>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
