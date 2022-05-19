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
      <div>
        <h6 className="container justify-content-center">Join our trusted Brands</h6>
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
