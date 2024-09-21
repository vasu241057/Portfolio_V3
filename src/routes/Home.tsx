import React, { useEffect } from "react";
import NavBar from "./NavBar.tsx";
import Hero from "./Hero.tsx";
import Footer from "./Footer.tsx";
import ProjectCards from "./ProjectCards.tsx";
import Profile from "./Profile.tsx";
// import Skills from "../components/skills/Skills.tsx";
import WorkExperience from "./work-Ex.tsx";
import Loader, { loadingListener } from "./loader.tsx";
import Skills from "./skills/Skills.tsx";

// import SkillsProgress from '../components/SkillsProgress'

const Home: React.FC = () => {
  useEffect(() => {
    loadingListener();
  }, []);

  return (
    <>
      <div>
        <Loader />
        <NavBar />
        <Hero />
        <Profile />
        {/* <SkillsProgress/> */}
        <Skills />
        <WorkExperience />
        <ProjectCards />
        <Footer />
      </div>
    </>
  );
};

export default Home;
