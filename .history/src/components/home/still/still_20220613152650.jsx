import React from 'react'
import { Container,Row, Col, Link } from 'react-bootstrap'
import './still.css'

const still = () => {
  return (
    <Container>
      <Row className="avatars text-center justify-content-center">
        <Col>
          <Row className="avatars text-center justify-content-center">
            <div className="avatar justify-content-center d-flex">
              <div className="img">
                <img src="./Assets/images/avatar1.png" alt="avatar1" />
                <img src="./Assets/images/avatar2.png" alt="avatar2" />
                <img src="./Assets/images/avatar3.png" alt="avatar3" />
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
            <Link className="link-btn" to="/contact">
              <Button>Get in touch</Button>
            </Link>
          </Row>
        </Col>
        
      </Row>
    </Container>
  );
}

export default still