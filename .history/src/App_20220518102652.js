import React from "react";
import Navbar from "./components/nav/navbar";
import Hero from "./components/hero/Hero";
import "./App.css";
import data from "./components/data";

function App() {
  const cards =data.map(item => {
    return(
      <Image 
        key={}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
