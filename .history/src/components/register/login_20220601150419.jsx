import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./registerForm.css";

function Register() {
  // setting values to default
  const [values, setValues] = useState({
    companyName: "",
    companyEmail: "",
    rcNumber: "",
    password: "",
    comfirmPassword: ""
  });

  //   setting submit state
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  //   handling changes for inputs
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

  // handling submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.companyName &&
      values.companyEmail &&
      values.rcNumber &&
      values.password &&
      values.comfirmPassword
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <Container>
      <Row>
        <Col className="form-container">
          <img className="reg" src="./Assets/images/logo.jpg" alt="Merch.xyz" />
          <h1>Log in</h1>

          <form className="register-form" onSubmit={handleSubmit}>
            {/* company email */}
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
            {submitted && !values.companyEmail ? (
              <span className="error-text">Please enter a valid email</span>
            ) : null}
            <br />
            {/* Password */}
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
            {submitted && !values.password ? (
              <span className="error-text">Please enter a valid password</span>
            ) : null}
            <br />
            {/* Log-in Button */}
            <button className="create" type="submit">
              Login
            </button>
            <br />
            <button className="sign-up" type="submit">
              <Icon icon="logos:typeform-icon" width="30" /> &nbsp; Sign up with
              Typeform
            </button>
            <br />
            <span className="account d-flex text-center justify-content-center">
              <p>Already have an account? </p> &nbsp;
              <a href="http://"> Log in</a>
            </span>
          </form>
          <span className="reg-foot d-flex justify-content-between">
            <small>
              <p>&copy; Company-name</p>
            </small>
            <small>
              <Icon icon="bi:envelope" /> &nbsp;
              <a href="/contact">help@testcompany.com</a>
            </small>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
