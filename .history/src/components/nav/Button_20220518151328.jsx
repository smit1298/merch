import React from "react";
import Button from "@mui/material/Button";


function button(props) {
  return (
    <>
      <Button className="btn">{props.children}</Button>
    </>
  );
}

export default button;
