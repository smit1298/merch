import React from "react";

function image(props) {
  return (
    <div className="grey col">
      <img className="Thanos" src={props.item.img} alt={props.item.name}  style={{width}}/>
    </div>
  );
}

export default image;
