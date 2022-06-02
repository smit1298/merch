import React from "react";

function feedbackDetail(props) {
  return (
    <>
      <div className="benefit-cont">
        <img src={props.Image} alt={props.name} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default Detail;