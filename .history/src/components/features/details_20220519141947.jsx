import React from "react";


function Details(props) {
  const features = props.features;
  const listFeatures = features.map((feature) => {
    return (
      <li key={feature}>
        <Icon icon="ant-design:check-circle-twotone" color="red" />
        {feature}
      </li>
    );
  });
  return (
    <>
    <div>{props.Icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul>{listFeatures}</ul>
    </>
  );
}

export default Details;
