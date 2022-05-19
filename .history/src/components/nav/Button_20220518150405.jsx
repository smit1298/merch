import React from "react";
import Button from "@mui/material/Button";

import { propTypes } from "react-bootstrap/esm/Image";

function Button(props) {
  return <>
<button>{props.children}</button>
  </>
}

export default Button;
