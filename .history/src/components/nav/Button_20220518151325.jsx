import React from "react";
import Button from "@mui/material/Button";


function button(props) {
  return (
    <>
      <Button className="b">{props.children}</Button>
    </>
  );
}

export default button;
