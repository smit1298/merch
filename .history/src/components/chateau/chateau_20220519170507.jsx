import React from "react";
import {Container, Row, Col} from 'react-bootstrap'

function Chateau() {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <img src="./Assets/images/chateau.jpg" alt="chateau" />
            <h3></h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Chateau;
