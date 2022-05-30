import React from "react";
import "./Benefits.css";

function Detail() {
//   const features = props.features;
//   const listFeatures = features
//     ? features.map((feature) => {
//         return (
//           <li key={feature}>
//             <img src="./Assets/icons/check.png" alt={props.name} /> &nbsp;
//             {feature}
//           </li>
//         );
//       })
//     : null;

  return (
    <>
      <div className="feature-cont">
        <img src={props.Image} alt={props.name} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <ul>{listFeatures}</ul>
      </div>
    </>
  );
}

export default Detail;
