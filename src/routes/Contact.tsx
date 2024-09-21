import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HeroAll from "./HeroAll";
import Form from "./Form";

const Contact: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroAll heading={"CONTACT"} text={"Hello, Let's have a chat"} />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
