import React from "react";

function image(props) {
  return (
    <C>
      <div className="grey col">
        <img className="Thanos" src={props.item.img} alt={props.item.name} />
      </div>
    </C>
  );
}

export default image;
