import React from "react";
import Button from "@mui/material/Button";


function button(props) {
  return (
    <>
      <Button  className={`btn-started ${props.className}`}>{props.children}</Button>
    </>
  );
}

export default button;
      