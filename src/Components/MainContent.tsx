import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./Projects";
import ContactSection from "./Contact";

interface MainProps {
  isVisible: boolean;
}

const MainContent: React.FC<MainProps> = ({ isVisible }) => {
  return (
    <div className="flex gap-5 max-md:flex-col md:max-h-full">
      <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full md:max-h-full ">
        <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full  ">
          <HeroSection isVisible={isVisible} />

          <div
            className={`mt-6 max-md:max-w-full transition-opacity duration-1000  ${
              isVisible ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <div className="flex gap-5 max-md:flex-col ">
              <AboutSection isVisible={isVisible} />
              <ContactSection isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>

      <ProjectsSection isVisible={isVisible} />
    </div>
  );
};

export default MainContent;
