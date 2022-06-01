import React from "react";import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/home/home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

import * as React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
