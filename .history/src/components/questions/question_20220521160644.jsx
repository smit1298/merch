import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
// import "./styles.css";
// import { Accordion, Card, useAccordionButton } from "react-bootstrap";

// function CustomToggle({ children, eventKey, handleClick }) {
//   const decoratedOnClick = useAccordionButton(eventKey, () => {
//     handleClick();
//   });

//   return (
//     <div className="card-header" type="button" onClick={decoratedOnClick}>
//       {children}
//     </div>
//   );
// }

const Question = () => {
//   const [activeKey, setActiveKey] = useState(0);

//   const data = [
//     { name: "mike", age: 22 },
//     { name: "clive", age: 25 },
//     { name: "morgan", age: 82 }
//   ];
const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    // <div className="App">
    //   <Accordion defaultActiveKey={0} activeKey={activeKey}>
    //     {data.map((item, index) => (
    //       <Card key={index}>
    //         <CustomToggle
    //         //   as={Card.Header}
    //         //   eventKey={index}
    //           handleClick={() => {
    //             if (activeKey === index) {
    //               setActiveKey(null);
    //             } else {
    //               setActiveKey(index);
    //             }
    //           }}
    //         >
    //         <h5>{item.name}</h5>

    //          <span></span> {activeKey === index ? "-" : "+"}
    //         </CustomToggle>
    //         <Accordion.Collapse eventKey={index}>
    //           <Card.Body>{item.age}</Card.Body>
    //         </Accordion.Collapse>
    //       </Card>
    //     ))}
    //   </Accordion>
    // </div>
    <>
      <div className="App">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                  Why do you like web developemnt
                </h4>
                {/* <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                /> */}
                <Icon icon="akar-icons:plus" />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>Because I love coding</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
export default Question;
