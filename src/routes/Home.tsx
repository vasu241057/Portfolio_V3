import React, { useEffect } from "react";
import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";
import ProjectCards from "../components/ProjectCards.tsx";
import Profile from "../components/Profile.tsx";
import Skills from "../components/skills/Skills.tsx";
import WorkExperience from "../components/work-Ex.tsx";
import Loader, { loadingListener } from "../components/loader.tsx";

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
