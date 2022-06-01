import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <Row>
        <Col className="form-container">
          <form className="register-form">
          <label htmlFor="company"></label>
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
              type="password"
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

//    <label
//               htmlFor="defaultFormRegisterPasswordEx"
//               className="grey-text"
//             >
//               Your password
//             </label>
//             <input
//               type="password"
//               id="defaultFormRegisterPasswordEx"
//               className="form-control"
//             />
//             <div className="text-center mt-4">
//               <MDBBtn color="unique" type="submit">
//                 Register
//               </MDBBtn>
//             </div>
