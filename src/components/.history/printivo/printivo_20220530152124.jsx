import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./printivo.css"

function Printivo() {
  return (
    <Container fluid className='pt-5'>
      <Row className="printivo d-flex justify-content-between">
        <Col className='growing col-lg-6 col-sm-12 col-md-12'>
          <div>
            <p>Our growing list of trusted partners grows even bigger</p>
          </div>
        </Col>

        <Col className='printivo-img pscol-lg-6 col-sm-12 col-md-12'>
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

export default Printivo