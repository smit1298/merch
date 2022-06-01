import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home";
import Register from "./components/pages/register";
import Login from "./components/register/login";
import Password from "./components/";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/password" element={<Password />} />
      </Routes>
    </Router>
  );
}

export default App;


