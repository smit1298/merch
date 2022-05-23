import React from "react";
import { Container, Row} from "react-bootstrap";

function Footer() {
  return (
    <Container>
      <Row>
      <Col>
      <img src="./Assets/images/logo.jpg" alt="merch.xyz" />

      </Col>
      </Row>
       <Row className="d-flex ">
           <a href="http://">Overview</a>
           <a href="http://">Features</a>
           <a href="http://">Help</a>
           <a href="http://">Policy</a>
       </Row>
    </Container>
  );
}

export default Footer;
