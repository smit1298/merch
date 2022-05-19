import React from "react";

function image(props) {
  return (
    <>
      <h6>Join our trusted Brands</h6>
      <div className="grey col">
        <img className="Thanos" src={props.item.img} alt={props.item.name} />
      </div>
    </>
  );
}

export default image;
