import React from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Navbar
} from "react-bootstrap";
import Logo from "../../images/logo.jpg";
import "./navbar.css";

function navbar() {
  return (
    <nav Name="navbar navbar-expand-lg navbar-light bg-light">
  <div Name="container-fluid">
    <a Name="navbar-brand" href="/">Navbar</a>
    <button Name="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span Name="navbar-toggler-icon"></span>
    </button>
    <div Name="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul Name="navbar-nav me-auto mb-2 mb-lg-0">
        <li Name="nav-item">
          <a Name="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li Name="nav-item">
          <a Name="nav-link" href="/">Link</a>
        </li>
        <li Name="nav-item">
          <a Name="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form Name="d-flex">
        <input Name="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button Name="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default navbar;
