import React from "react";
import Button from "@mui/material/Button";

import { propTypes } from "react-bootstrap/esm/Image";

function Button(props) {
  return (
    <>
      <Button>{props.children}</Button>
    </>
  );
}

export default Button;
