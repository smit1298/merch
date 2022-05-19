import React from "react";
import {Container, Row, Col} from 'react-bootstrap'

function Chateau() {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <img src="./Assets/images/chateau.jpg" alt="chateau" />
            <h3>
              Merch.xyz has really increased our brand outlook, they make really
              awesome brand items that are easily recognisiable and what we
              represent as a brand, i will always use them.
            </h3>
            <img src="./Assets/images/osonuga.png" alt="osonuga" />
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Chateau;
