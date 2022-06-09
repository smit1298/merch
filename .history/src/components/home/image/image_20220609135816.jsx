import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./image.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "../slider/slider";
import { Carousel } from "react-responsive-carousel";

function image() {
  return (
    <Container fluid id="trusted-brands">
      <Row id="images">
        <Row className="trusted-center">
          <Col className="trusted-text">
            <h6>Join our trusted Brands</h6>
          </Col>
        </Row>
        <Row id="allimages">
          <div className="grey-container row d-flex ps-4 ms-3">
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/sportinglagos.jpg" alt="sporting" />
            </div>
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/chateau.jpg" alt="chateau" />
            </div>
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/atco.jpg" alt="atco" />
            </div>
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/robethson.jpg" alt="robethson" />
            </div>
            <div className="grey-image col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/comerico.jpg" alt="comerico" />
            </div>
            <div className="grey-image settle col col-lg-2 col-sm-6 col-md-3 col-xs-6 ">
              <img src="./Assets/images/settle2.jpg" alt="settle" />
            </div>
          </div>
        </Row>

        <Row>
          {/* <header class="page-header">
  <div class="container flow">
    <h1 class="page-title">Horizontal scrolling</h1>
    <p class="page-subtitle">Let's create a horizontal media scroller!</p>
  </div>
</header>
<h2 class="section-title">Individual elements</h2> */}

          <div class="media-scroller snaps-inline">
            <div class="media-element">
              <img
                src="./Assets/images/sportinglagos.jpg"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1641118961077-440391095cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1640767014413-b7d27c58b058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1642484865851-111e68695d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1642237778207-24985a0bf876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1642177584449-fa0b017dccc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1643249960396-d39d2a63ce8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0Mw&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1641424222187-1c336d21804c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODg0OA&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src="https://images.unsplash.com/photo-1640998483268-d1faffa789ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODkwNA&ixlib=rb-1.2.1&q=80&w=400"
                alt=""
              />
            </div>
          </div>
        </Row>
      </Row>
    </Container>
  );
}

export default image;
