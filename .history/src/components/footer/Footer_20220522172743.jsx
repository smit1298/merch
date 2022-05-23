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
           < href="http://">Overview</>
           < href="http://">Features</>
           < href="http://">Help</>
           < href="http://">Policy</>
       </Row>
    </Container>
  );
}

export default Footer;
