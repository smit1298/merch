import React from "react";
import "./features.css";

function Details(props) {
  const features = props.features;
  const listFeatures = features
    ? features.map((feature) => {
        return (
          <li cla key={feature}>
            <img src="./Assets/icons/check.png" alt={props.name} /> &nbsp;
            {feature}
          </li>
        );
      })
    : null;

  return (
    <>
      <div className="top">
        <h4>{props.top}</h4>
        <h3>{props.head}</h3>
        <p>{props.brief}</p>
      </div>

      <div className="feature-cont">
        <img src={props.Image} alt={props.name} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <ul>{listFeatures}</ul>
      </div>
    </>
  );
}

export default Details;
