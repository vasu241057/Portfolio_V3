import React from "react";

import HeroAll from "./HeroAll.tsx";
import AboutMe from "./AboutMe.tsx";
// import Skills from "../components/skills/Skills.tsx";
import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import Skills from "./skills/Skills.tsx";

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
