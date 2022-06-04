import React from "react";
import { Link } from "react-router-dom";

function feedbackDetail(props) {
  return (
    <>
      <div className="feedback-cont">
        <img src={props.Image} alt={props.name} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Link cl to={props.link}>{props.contact}</Link>
      </div>
    </>
  );
}

export default feedbackDetail;