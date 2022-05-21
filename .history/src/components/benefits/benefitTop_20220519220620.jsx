import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import Details from "../features/details"

function benefitTop() {
  return (
    Container
    <Row>
      <Col className="text-center">
        <Details
          top="Benefits"
          head="You get lots and lots of benefits from using Merch.xyz"
          brief="Overview of benefits from using Merch.xyz"
          features={[]}
        />
      </Col>
    </Row>
  );
}

export default benefitTop