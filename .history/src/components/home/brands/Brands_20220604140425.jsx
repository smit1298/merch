import React from "react";
import Button from "../../nav/Button";
import { Container, Row, Col } from "react-bootstrap";
// import Brand from "./images/brand.jpg";
import "./Brands.css";

function Brands() {
  return (
    <div>
      <Container className="pt-5">
        <Row className="merch-brands">
          <Col className="brand-cont">
            <section className="brands">
              <div className="brands-top">
                <h6 className="pt-3">Why Merchs.xyz</h6>
                <h3 className="pt-3 mb-4">
                  Its your brand, it should be unique. Get your company a
                  customised merchandise webstore
                </h3>
              </div>

              <div className="brands-bottom">
                <p className="pt-3">
                  Your organization has invested resources into developing a
                  brand story and and identity. It’s critical that your company
                  merchandise resonates with your employees and your swag
                  convey(s) just the right message to your customers and agency
                  partners. <br /> <br /> Yourbrand.merchs.xyz offers you access
                  to a wide range of products with little or no expense of
                  stocking prebranded apparel and soft goods.
                </p>
                <Link></Link>
                <Button href="#">Get in touch</Button>
              </div>
            </section>
          </Col>

          <Col className="brand-img " >
            <img src="./Assets/images/brand.jpg" alt="why merchs.xyz" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Brands;
