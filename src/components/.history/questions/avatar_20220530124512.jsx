import React from "react";
import { Container, Row } from "react-bootstrap";

function Avatar() {
  return (
    <>
      <Container fluid>
        <Row className="avatars text-center justify-content-center">
          <div className="avatar justify-content-center d-flex">
            <div className="avatar-images">
              <img src="./Assets/images/avatar1.png" alt="avatar1" />
            </div>
            <div className="avatar-images">
              <img src="./Assets/images/avatar2.png" alt="avatar2" />
            </div>
            <div className="avatar-images">
              <img src="./Assets/images/avatar3.png" alt="avatar3" />
            </div>
            <div className="avatar-images">
              <img src="./Assets/images/avatar4.png" alt="avatar4" />
            </div>
          </div>
          <div className="questions">
            <h3>Still have questions?</h3>
            <p>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>

          <Button href="#">Get in touch</Button>
        </Row>
      </Container>
    </>
  );
}

export default Avatar;
