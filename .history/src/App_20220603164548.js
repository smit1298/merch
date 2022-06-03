import React, {use}from "react";
import Navs from "./components/nav/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/routes/homeRoute";
import Contact from "./components/routes/contactRoute";
import Register from "./components/routes/registerRoute";
import Login from "./components/routes/loginRoute";
import Password from "./components/routes/passwordRoute";

function App() {
    const [Buttons, setButton] = useState(false);

    const setButtonActive = () => {
      setButton(true);
    };
  return (
    <Router>
      <Navs />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/password" element={<Password />} />
      </Routes>
    </Router>
  );
}

export default App;
