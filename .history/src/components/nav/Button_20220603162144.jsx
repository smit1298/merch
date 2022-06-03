import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function button(props) {
  return (
    <>
      <Link to={props.to}>
        <Button href={props.href} className={`btn-started ${props.className}`}>
          {props.children}
        </Button>
      </Link>
    </>
  );
}

export default button;
