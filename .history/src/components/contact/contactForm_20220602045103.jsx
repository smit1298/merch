import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

function ContactForm() {
  // setting values to default
  const [values, setValues] = useState({
    firstName: "",
    email: "",
    phoneN: "",
    password: "",
    comfirmPassword: ""
  });

  //   setting submit state
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  //   handling changes for inputs
  const handlefirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleemail = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleRcNumber = (event) => {
    setValues({ ...values, phoneN: event.target.value });
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
      values.firstName &&
      values.email &&
      values.phoneN &&
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
          <h6>Contact us</h6>
          <h1>Get in touch</h1>

            <p>We’d love to hear from you. Please fill out this form.</p>

          <form className="register-form" onSubmit={handleSubmit}>
            {submitted && valid ? (
              <div className="success-message">
                Success! Thank You for registering
              </div>
            ) : null}
            {/* company name */}
            <label htmlFor="firstName">
              Company Name<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              onChange={handlefirstName}
              value={values.firstName}
              className="form-field"
              placeholder="Company ABC"
              name="firstName"
              type="text"
            />
            <br />
            {submitted && !values.firstName ? (
              <span className="error-text">Please enter your company name</span>
            ) : null}
            <br />
            {/* company email */}
            <label htmlFor="email">
              Company Email<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              onChange={handleemail}
              value={values.email}
              className="form-field"
              placeholder="Company-name@testcompany.com"
              name="email"
              type="email"
            />
            <br />
            {submitted && !values.email ? (
              <span className="error-text">Please enter a valid email</span>
            ) : null}
            <br />
            {/* RC Number */}
            <label htmlFor="phoneN">RC Number</label> <br />
            <input
              onChange={handleRcNumber}
              value={values.phoneN}
              className="form-field"
              placeholder="3493803202010"
              name="phoneN"
            />
            <br />
            {submitted && !values.phoneN ? (
              <span className="error-text">Please enter your RC Number</span>
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
            {/* Confirm Password */}
            <label htmlFor="confirmPassword">
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
            {values.password !== values.comfirmPassword ? (
              <span className="error-text">Password does not match</span>
            ) : null}
            <br />
            <button className="create" type="submit">
              Create my account
            </button>{" "}
            <br />
            <button className="sign-up" type="submit">
              <Icon icon="logos:typeform-icon" width="30" /> &nbsp; Sign up with
              Typeform
            </button>
            <br />
            <span className="account d-flex text-center justify-content-center">
              <p>Already have an account? </p> &nbsp;
              <a href="/login"> Log in</a>
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

export default ContactForm;
