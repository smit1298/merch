import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function button(props) {
  return (
    <>
    <Link to={props}>

    </Link>
      <Button href={props.href} className={`btn-started ${props.className}`}>{props.children}</Button>
    </>
  );
}

export default button;
      