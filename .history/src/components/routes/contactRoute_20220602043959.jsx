import React from "react";
import Navbar from "../nav/navbar";
import ContactForm from "../contact/contactForm";
import Footer from "../footer/Footer";


function contactRoute() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default contactRoute;
