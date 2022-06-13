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
      <div className=`feature-cont ms-2 ${props.platform`>
      <div className="feature-description">
         <img src={props.Image} alt={props.name} />
        <h3 className="w-100">{props.title}</h3>
        <p className="mb-5">{props.description}</p>
        <ul className="mt-3">{listFeatures}</ul>
      </div>
       
        <div className="feature-img">
          <img className="imgCont" src={props.Gif} alt={props.name} />
        </div>
      </div>
    </>
  );
}

export default Details;
