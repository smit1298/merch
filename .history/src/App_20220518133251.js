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
      {/* <section className="trusted-brands">
        {data.map((item) => {
          return <Image key={item.id} item={item} />;
        })}
      </section> */}
      <section className="trusted-brand">

      </section>
    </div>
  );
}

export default App;
