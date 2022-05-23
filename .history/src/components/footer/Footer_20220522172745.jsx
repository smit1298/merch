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
           <Ki href="http://">Overview</Ki>
           <Ki href="http://">Features</Ki>
           <Ki href="http://">Help</Ki>
           <Ki href="http://">Policy</Ki>
       </Row>
    </Container>
  );
}

export default Footer;
