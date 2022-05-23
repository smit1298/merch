import React from "react";
import { Container, Row, Col} from "react-bootstrap";

function Footer() {
  return (
    <Container>
      <Row className="text-center">
      <Col>
      <img src="./Assets/images/logo.jpg" alt="merch.xyz" />

      </Col>
      </Row>
       <Row className="d-inline text-center">
           <Li href="http://">Overview</Li>
           <Li href="http://">Features</Li>
           <Li href="http://">Help</Li>
           <Li href="http://">Policy</Li>
       </Row>
    </Container>
  );
}

export default Footer;
