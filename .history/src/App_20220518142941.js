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
      <div id="join" className="pb-5">
        <h6 className="container text-center">Join our trusted Brands</h6>
        <section className="trusted-brands container">
          {data.map((item) => {
            return <Image key={item.id} item={item} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
