import React from "react";
import Navbar from "./components/nav/navbar";
import Hero from "./components/hero/Hero";
import "./App.css";
import data from "./components/data";

function App() {
  const cards =data.map(item => {
    return(
      <Image 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section></section>
    </div>
  );
}

export default App;
