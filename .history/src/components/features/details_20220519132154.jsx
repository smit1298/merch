import React from "react";

function details(props) {
  const features = props.features;
  const listFeatures = features.map((feature) => {
    <li key >{feature}</li>;
  });
  return (
    <>
      <section></section>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul>{listFeatures}</ul>
    </>
  );
}

export default details;
