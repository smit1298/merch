import React, { useState } from "react";
import "./question.css";
import {
  Accordion,
  Card,
  Container,
  useAccordionButton,
  Row,
  Col
} from "react-bootstrap";

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
      <Row>
        <Row className="text-center">
          <h3>Frequently asked questions</h3>
          <p>Everything you need to know about Aimcare.africa</p>
        </Row>
        <Col>
          <Accordion defaultActiveKey={0} activeKey={activeKey}>
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
                    <div>{item.question}</div>
                    <div>{activeKey === index ? "-" : "+"}</div>
                  </span>
                </CustomToggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>{item.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Col>
        <Row>
            <h3></h3>
        </Row>
      </Row>
    </Container>
  );
};
export default Question;
