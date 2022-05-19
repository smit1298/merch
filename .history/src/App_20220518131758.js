import React from "react";
import Navbar from "./components/nav/navbar";
import Hero from "./components/hero/Hero";
import "./App.css";
import data from "./components/data";
import Image from "./components/image/image";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="">
        {data.map((item) => {
          return <Image key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
