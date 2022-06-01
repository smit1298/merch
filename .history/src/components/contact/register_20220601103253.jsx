import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <Row>
        <Col className="form-container">
          <form className="register-form">
            <label htmlFor="companyName">Company Name</label>
            <br />
            <input
              className="form-field"
              placeholder="Company ABC"
              name="companyName"
              type="text"
            />
            <br />
            <label htmlFor="companyEmail">Company Email</label> <br />
            <input
              className="form-field"
              placeholder="Company-name@testcompany.com"
              name="companyEmail"
              type="email"
            />
            <br />
            <label htmlFor="rcNumber">RC Number</label> <br />
            <input
              className="form-field"
              placeholder="3493803202010"
              name="rcNumber"
            />
            <br />
            <label htmlFor="password">Password</label> <br />
            <input
              className="form-field"
              placeholder="Create a password"
              name="companyName"
              type="password"
            />
            <br />
            <label htmlFor="password">Confirm Password</label> <br />
            <input
              className="form-field"
              placeholder="Create a password"
              name="companyName"
              type="password"
            />
            <br />
            <button type="submit">Create my account</button> <br />
            <button type="submit">Sign</button>
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
