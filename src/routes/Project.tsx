import React from "react";

import Footer from "../components/Footer.tsx";
import HeroAll from "../components/HeroAll.tsx";
import ProjectCards from "../components/ProjectCards.tsx";
import NavBar from "../components/NavBar.tsx";

const Project: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroAll heading={"PROJECTS"} text={"Some of my recent projects"} />
      <ProjectCards />

      <Footer />
    </>
  );
};

export default Project;
