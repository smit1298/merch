import React from "react";
import { Icon } from "@iconify/react";

function Details(props) {
  const features = props.features;
  const listFeatures = features.map((feature) => {
    return (
      <li key={feature}>
        <img src="./Assets/icons/check.png" alt={}/> &nbsp;
        {feature}
      </li>
    );
  });
  return (
    <>
    <h4>{props.top}</h4>
    <h3>{props.head}</h3>
    <p>{props.brief}</p>
    <div>{props.Icon}</div>
    <img src={props.Image} alt={props.name} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul>{listFeatures}</ul>
    </>
  );
}

export default Details;
