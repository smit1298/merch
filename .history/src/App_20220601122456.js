import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ges" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


