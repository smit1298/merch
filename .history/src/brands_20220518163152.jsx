import React from 'react';
import Button from "./components/nav/Button";
import {Container, Row, Col} from "react-bootstrap";

function Brands() {
  return (
    <div>
      <Container className='pt-5'>
        <Row>
          <Col className="products" xs={6}>
            <section>
              <h6 className='p-2'>Why Merchs.xyz</h6>
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
              <Button href="">Get in touch</Button>
            </section>
          </Col>
          <Col xs={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Brands