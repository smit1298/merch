import React from "react";
import Navbar from "./components/nav/navbar";
import Hero from "./components/hero/Hero";
import "./App.css";
import data from "./components/data";
import Image from "./components/image/image";
import Brands from "./Brands";
import { Container} from "react-bootstrap";



function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <div id="join" className="pb-5">
        <h6 className="container text-center pt-2 pb-3">Join our trusted Brands</h6>
        <section className="trusted-brands container">
          {data.map((item) => {
            return <Image key={item.id} item={item} />;
          })}
        </section>
      </div>
      <Brands />
    </Container>
  );
}

export default App;
