import React from "react";

function image(props) {
  return (
    <div className="grey col">
      <img className="Thanos" src={props.item.img} alt={props.item.name}  style={{}}/>
    </div>
  );
}

export default image;
