import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

function Brands() {
  return (
    <div>
      <Container>
        <Row>
          <Col className='' xs={6}>
            <section>
              <h6>Why Merchs.xyz</h6>
              <h3>
                Its your brand, it should be unique. Get your company a
                customised merchandise webstore
              </h3>
              <p>
                Your organization has invested resources into developing a brand
                story and and identity. It’s critical that your company
                merchandise resonates with your employees and your swag
                convey(s) just the right message to your customers and agency
                partners. Yourbrand.merchs.xyz offers you access to a wide range
                of products with little or no expense of stocking prebranded
                apparel and soft goods.
              </p>
            </section>
          </Col>
          <Col xs={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Brands