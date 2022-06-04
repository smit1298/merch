import React from "react";

function feedbackDetail(props) {
  return (
    <>
      <div className="feedback-cont">
        <img src={props.Image} alt={props.name} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        < href={props.link}>{props.contact}</>
      </div>
    </>
  );
}

export default feedbackDetail;