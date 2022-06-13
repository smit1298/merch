import React from "react";
import Hero from "../home/hero/Hero";
import "./homeRoute.css";
// import data from "./data";
import Image from "../home/image/image";
import Brands from "../home/brands/Brands";
import Features from "../home/features/Features";
import Chateau from "../home/chateau/Chateau";
import Benefits from "../home/benefits/Benefits";
import Question from "../home/questions/Question";
import Printivo from "../home/printivo/Printivo";
import Newsletter from "../home/newsletter/Newsletter";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className="home-route">
      <Hero />
      {/* <Image /> */}
      {/* <div id="join" className="pb-5">
        <h6 className="text-center pt-2 pb-3">Join our trusted Brands</h6>
        <section className="trusted-brands container">
          {data.map((item) => {
            return <Image key={item.id} item={item} />;
          })}
        </section>
      </div> */}
      {/* <Brands /> */}
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
