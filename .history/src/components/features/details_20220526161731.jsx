import React from "react";
import './features.css'
function Details(props) {
  const features = props.features;
  const listFeatures = features.map((feature) => {
    return (
      <li key={feature}>
        <img src="./Assets/icons/check.png" alt={props.name} /> &nbsp;
        {feature}
      </li>
    );
  });
  return (
    <>
    <div className="top">
       <h4>{props.top}</h4>
      <h3>{props.head}</h3>
      <p>{props.brief}</p>
    </div>
     
     <div className="feature-cont"></div>
      <div>{props.Icon}</div>
      <img src={props.Image} alt={props.name} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul>{listFeatures}</ul>
    </>
  );
}

export default Details;
