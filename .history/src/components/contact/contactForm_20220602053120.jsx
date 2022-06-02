import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

function ContactForm() {
  // setting values to default
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  //   setting submit state
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  //   handling changes for inputs
  const handlefirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handlelastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handlePhoneNumber = (event) => {
    setValues({ ...values, phoneNumber: event.target.value });
  };
  const handleMessage = (event) => {
    setValues({ ...values, m: event.target.value });
  };
  // handling submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.phoneNumber &&
      values.message
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
                We will get back to you shortly. Thank You!
              </div>
            ) : null}
            <span className="d-flex">
              {/* first name */}
              <label htmlFor="firstName">
                First name<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                onChange={handlefirstName}
                value={values.firstName}
                className="form-field firstName"
                placeholder="Company ABC"
                name="firstName"
                type="text"
              />
              <br />
              {submitted && !values.firstName ? (
                <span className="error-text">Please enter your first name</span>
              ) : null}
              <br />
              {/* last name */}
              <label htmlFor="lastName">
                Last name<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                onChange={handlelastName}
                value={values.lastName}
                className="form-field lastName"
                placeholder="Company ABC"
                name="lastName"
                type="text"
              />
              <br />
              {submitted && !values.lastName ? (
                <span className="error-text">Please enter your last name</span>
              ) : null}
              <br />
            </span>
            {/* email */}
            <label htmlFor="email">
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              onChange={handleEmail}
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
            {/* Phone Number */}
            <label htmlFor="phoneNumber">Phone number</label> <br />
            <input
              onChange={handlePhoneNumber}
              value={values.phoneNumber}
              className="form-field"
              placeholder="+234 938 032 2011"
              name="phoneNumber"
            />
            <br />
            {submitted && !values.phoneNumber ? (
              <span className="error-text">Please enter your Phone Number</span>
            ) : null}
            <br />
            {/* message */}
            <label htmlFor="message">Message</label> <br />
            <input
              type="text"
              name="message"
              className="form-field message"
              onChange={handleMessage}
              value={values.message}
            />
            <br />
            {submitted && !values.message ? (
              <span className="error-text">Please enter your Message</span>
            ) : null}
            <br />
            <button className="create" type="submit">
              Send message
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
