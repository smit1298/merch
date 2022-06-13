import React from "react";
import "./Benefits.css";

function Detail(props) {
  return (
    <>
      <div className="benefit-cont">
        <img className="mb-2" src={props.Image} alt={props.name} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default Detail;
