import React from "react";
import { Icon } from "@iconify/react";

function Details(props) {
  const features = props.features;
  const listFeatures = features.map((feature) => {
    return (
      <li key={feature}>
        <Icon icon="ant-design:check-circle-twotone" color="red" /> &nbsp;
        {feature}
      </li>
    );
  });
  return (
    <>
    <div>{props.Icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ol>{listFeatures}</ol>
    </>
  );
}

export default Details;
