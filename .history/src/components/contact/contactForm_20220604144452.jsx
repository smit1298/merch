import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "./contactForm.css";

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
  const [value, setValue] = useState();

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
   const handleMessage = (event) => {
    setValues({ ...values, message: event.target.value });
  };

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
        <Col className="contact-container">
          <div className="contact-head">
            <h6>Contact us</h6>
            <h1>Get in touch</h1>
            <p>We’d love to hear from you. Please fill out this form.</p>
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
