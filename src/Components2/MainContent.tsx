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
      <div className="w-[67%] max-md:ml-0 max-md:w-full md:max-h-full  ">
        <div className=" grid grid-rows-12 w-full max-md:mt-12 max-md:max-w-full h-full  ">
          <div className="row-span-8">
            <HeroSection isVisible={isVisible} />
          </div>

          <div className={`mt-6 max-md:max-w-full row-span-4`}>
            <div className="flex gap-5 max-md:flex-col h-full  ">
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
