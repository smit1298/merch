import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function Button(props) {
  return <>
<button>{props.children}</button>
  </>
}

export default Button;
