import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./printivo.css"

function Printivo() {
  return (
    <Container fluid className='printivo-cont'>
      <Row className="printivo">
        {/* <Col className='growing col-lg-6 col-sm-12 col-md-12'> */}
        <Col className='growing col-lg-6 col-sm-12 col-md-12'>
          <div>
            <p>Our growing list of trusted partners grows even bigger</p>
          </div>
        </Col>

        <Col className='printivo-img ps-5 col-lg-6 col-sm-12 col-md-12'>
          <span>
            <img src="./Assets/images/printivo.png" alt="printivo" />
            <img src="./Assets/images/grace.png" alt="grace" />
            <img src="./Assets/images/ship.png" alt="ship" />
            <img src="./Assets/images/heritage.png" alt="ship" />
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Printivo