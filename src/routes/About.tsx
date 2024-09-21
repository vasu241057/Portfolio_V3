import React from "react";

import HeroAll from "../components/HeroAll.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Skills from "../components/skills/Skills.tsx";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

const About: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroAll heading={"ABOUT"} text={"I'm a Front-End Developer"} />
      <AboutMe />
      <Skills />
      <Footer />
    </>
  );
};

export default About;
