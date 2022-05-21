import React, { useState } from "react";
// import "./styles.css";
import { Accordion, Card, useAccordion } from "react-bootstrap";

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordion(eventKey, () => {
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
    { name: "mike", age: 22 },
    { name: "clive", age: 25 },
    { name: "morgan", age: 82 }
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
              {item.name}
              {activeKey === index ? "-" : "+"}
            </CustomToggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{item.age}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};
export default Question;
