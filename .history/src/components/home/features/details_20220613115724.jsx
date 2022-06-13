import React from "react";
import "./features.css";

function Details(props) {
  const features = props.features;
  const listFeatures = features
    ? features.map((feature) => {
        return (
          <li key={feature}>
            <img src="./Assets/icons/check.png" alt={props.name} /> &nbsp;
            {feature}
          </li>
        );
      })
    : null;

  return (
    <>
      <div className="feature-cont">
        <img src={props.Image} alt={props.name} />
        <h3 className="w-100">{props.title}</h3>
        <p className="mb-5">{props.description}</p>
        <ul className="mt-3">{listFeatures}</ul>
        <img
      </div>
    </>
  );
}

export default Details;
