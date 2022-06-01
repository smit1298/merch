import React from "react";
import Navbar from "../nav/navbar";
import Hero from "../components/hero/Hero";
import "./Home.css";
// import data from "./components/data";
import Image from "../image/image";
import Brands from "../brands/Brands";
import Features from "../features/Features";
import Chateau from "../components/chateau/Chateau";
import Benefits from "../components/benefits/Benefits";
import Question from "../components/questions/Question";
import Printivo from "../components/printivo/Printivo";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";

function Home() {
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
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
