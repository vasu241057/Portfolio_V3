import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./Projects";
import ContactSection from "./Contact";

const MainContent: React.FC = () => {
  return (
    <div className="flex gap-5 max-md:flex-col md:max-h-full">
      <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full md:max-h-full ">
        <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full md:max-h-full md:grid-rows-8">
          <div className="row-span-4">
            <HeroSection />
          </div>
          <div className="mt-6 max-md:max-w-full row-span-4">
            <div className="flex gap-5 max-md:flex-col">
              <AboutSection />
              <ContactSection />
            </div>
          </div>
        </div>
      </div>
      <ProjectsSection />
    </div>
  );
};

export default MainContent;
