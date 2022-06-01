import React from "react";
import { BrowserRouter as Router, Routes Route, Link } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <div>
    <Home />
    <p>the</p>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;


