import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
    <Home />
    <p>the</p>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/contact" element={<p>jekj</p>} /> */}
      </Routes>
    </Router>
  );
}

export default App;


