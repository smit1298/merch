import React, { useState } from "react";
import "./question.css";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";

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
    { question: "This is a question placeholder?", answer: "" }
  ];
  return (
    <div className="App">
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
              {item.question}
              {activeKey === index ? "-" : "+"}
            </CustomToggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{item.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};
export default Question;
