import React from "react";
import Navbar from "../nav/Na";
import ContactForm from "../contact/contactForm";
import Footer from "../footer/Footer";
import Feedback from "../contact/feedback";


function contactRoute() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Feedback />
      <Footer />
    </div>
  );
}

export default contactRoute;
