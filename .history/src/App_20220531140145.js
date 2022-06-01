import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home";

function App() {
  return (
    <Router>
    <Home />
      <Routes>
        <Route exact path="/" component={<Home />} />
        {/* <Route path="/contact" element={<p>jekj</p>} /> */}
      </Routes>
    </Router>
  );
}

export default App;


