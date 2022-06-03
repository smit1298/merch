import React from "react";
import Navs from "../nav/navbar";
import ContactForm from "../contact/contactForm";
import Footer from "../footer/Footer";
import Feedback from "../contact/feedback";


function contactRoute() {
  return (
    <div>
      <Navs />
      <ContactForm />
      <Feedback />
      <Footer />
    </div>
  );
}

export default contactRoute;
