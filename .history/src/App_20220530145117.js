import React from "react";
import Navbar from "./components/nav/navbar";
import Hero from "./components/hero/Hero";
import "./App.css";
// import data from "./components/data";
import Image from "./components/image/image";
import Brands from "./Brands";
import Features from "./components/features/Features";
import Chateau from "./components/chateau/Chateau";
import Benefits from "./components/benefits/Benefits";
import Question from "./components/questions/Question";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    <Image />
      {/* <div id="join" className="pb-5">
        <h6 className="text-center pt-2 pb-3">Join our trusted Brands</h6>
        <section className="trusted-brands container">
          {data.map((item) => {
            return <Image key={item.id} item={item} />;
          })}
        </section>
      </div> */}
      <Brands />
      <Features />
      <Chateau />
      <Benefits />
      <Question />
      <Printivo />
      {/* <Newsletter /> */}
      {/* <Footer />   */}
    </div>
  );
}

export default App;
