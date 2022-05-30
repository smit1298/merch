import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./printivo.css"

function printivo() {
  return (
    <Container fluid>
      <Row className="printivo d-flex justify-content-between">
        <Col>
          <div>
            <p>Our growing list of trusted partners grows even bigger</p>
          </div>
        </Col>
        <Col>
          <span>
            <img src="./Assets/images/printivo.png" alt="printivo" />
            <img src="./Assets/images/grace.png" alt="printivo" />
            <img src="./Assets/images/ship.png" alt="printivo" />
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default printivo