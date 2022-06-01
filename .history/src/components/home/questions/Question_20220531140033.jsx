import React, { useState } from "react";
import {
  Accordion,
  Card,
  Container,
  useAccordionButton,
  Row
} from "react-bootstrap";
import "./question.css";
import Button from "../../nav/Button";

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    handleClick();
  });

  return (
    <div className="card-header" type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const Question = () => {
  const [activeKey, setActiveKey] = useState(0);

  const data = [
    {
      question: "How do i get my Merchs?",
      answer:
        "We protect your merchz with the retun policies and we use ourn own personal delivery people so you dony need to worry about losing your items. Trust us, you are well protected."
    },
    { question: "This is a question placeholder?", answer: "" },
    { question: "This is a question placeholder?", answer: "" },
    { question: "This is a question placeholder?", answer: "" },
    { question: "This is a question placeholder?", answer: "" },
    { question: "This is a question placeholder?", answer: "" }
  ];
  return (
    <Container className="App">
      <Row className="all-question text-center justify-content-center pt-5 w-100">
        <Row className="frequent">
          <div>
            <h3>Frequently asked questions</h3>
            <p>Everything you need to know about Aimcare.africa</p>
          </div>
        </Row>
        <Row>
          <Accordion
            className="question text-center"
            defaultActiveKey={0}
            activeKey={activeKey}
          >
            {data.map((item, index) => (
              <Card key={index}>
                <CustomToggle
                  as={Card.Header}
                  eventKey={index}
                  handleClick={() => {
                    if (activeKey === index) {
                      setActiveKey(null);
                    } else {
                      setActiveKey(index);
                    }
                  }}
                >
                  <span className="d-flex justify-content-between">
                    <div>{item.question}</div> <hr />
                    <div>{activeKey === index ? "-" : "+"}</div>
                  </span>
                </CustomToggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body className="answer">{item.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Row>

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

          <Button href="#">Get in touch</Button>
        </Row>
      </Row>
    </Container>
  );
};
export default Question;
