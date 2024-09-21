import React from "react";

import Footer from "./Footer.tsx";
import HeroAll from "./HeroAll.tsx";
import ProjectCards from "./ProjectCards.tsx";
import NavBar from "./NavBar.tsx";

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
