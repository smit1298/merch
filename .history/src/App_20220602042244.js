import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/routes/homeRoute";
import Register from "./components/routes/registerRoute";
import Login from "./components/routes/loginRoute";
import Password from "./components/routes/passwordRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        Route
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/password" element={<Password />} />
      </Routes>
    </Router>
  );
}

export default App;


