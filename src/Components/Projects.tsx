import React, { useEffect, useState } from "react";
import "./Projects.css";
import SocialIcons from "./SocialIcons";
import TabsComponent from "./Tabscontent";

interface Project {
  name: string;
  imageSrc?: string;
  githubLink?: string;
  projectLink?: string;
  codeExplanation: string;
  line2?: string;
}

const projects: Project[] = [
  {
    name: "E-commerce",
    imageSrc: "/e-commerce.jpg",
    githubLink: "https://github.com/vasu241057/e-commerce",
    projectLink: "https://e-commerce-vasu.vercel.app/",
    codeExplanation: "e-Shopping is an e-commerce platform for",
    line2: "efficiently setting up and managing online stores.",
  },
  {
    name: "Image processing",
    imageSrc: "/Image-processing.png",
    githubLink: "https://github.com/vasu241057/image-processing-frontend",
    projectLink: "https://image-processing-frontend-9dsj.vercel.app/",
    codeExplanation: "A system for processing, compressing, and uploading",
    line2: "images from CSV files to AWS S3 with async support",
  },
  {
    name: "Paytm Clone",
    imageSrc: "/paytm.jpg",
    githubLink: "https://github.com/vasu241057/paytm-fullstack",
    projectLink: "https://paytm-vasu.vercel.app/",
    codeExplanation: "MERN stack app with user signup/signin, secure",
    line2: "transfers, and search functionality.",
  },
  {
    name: "Recipe app",
    imageSrc: "/Recipe.jpg",
    githubLink: "hhttps://github.com/vasu241057/Recipe-app",
    projectLink: "https://vasu241057.github.io/Recipe-app/",
    codeExplanation: "web app for searching recipe of a food item &",
    line2: "displaying it in the form of tables. JS, Edaman recipe.",
  },
];

interface HeroProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<HeroProps> = ({ isVisible }) => {
  const [hover, setHover] = useState<number | null>(0);
  const [animation, setAnimation] = useState("initial");

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setAnimation("revealing");
      }, 100); // Start animation after 100ms

      setTimeout(() => {
        setAnimation("final");
      }, 1000); // End animation after 1000ms
    }
  }, [isVisible]);

  return (
    <aside
      id="projects"
      className="flex flex-col ml-5 max-md:ml-0 max-md:w-full md:max-h-full"
    >
      <div className="flex flex-col grow text-black whitespace-nowrap max-md:mt-7 max-md:max-w-full md:grid md:grid-rows-5 md:max-h-full md:gap-5">
        <div
          className={`flex overflow-hidden flex-col px-8 pt-7 pb-7w-full text-2xl font-medium bg-gray-100 rounded-3xl max-md:px-5 max-md:max-w-full md:row-span-4 md:h-[120%] md:mb-10 transition-transform duration-[1500ms] ease-in-out ${
            animation === "initial"
              ? "scale-x-0 scale-y-0 opacity-0" // Start from a point
              : animation === "revealing"
              ? "scale-x-1 scale-y-1 opacity-100" // Revealing effect
              : "scale-x-1 scale-y-1 opacity-100" // Final state
          }`}
          style={{
            transformOrigin: "0% 30%",
          }}
        >
          <div className="flex gap-5 justify-center">
            <TabsComponent />
          </div>
          <div className="overflow-y-auto max-h-[470px] hide-scrollbar">
            {projects.map((project, index) => (
              <div
                key={project.name}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
                className="relative transition-transform duration-500 ease-in-out"
              >
                <div
                  className={` flex justify-center overflow-hidden transition-all duration-1000 ease-in-out mt-5 ${
                    index === hover ? "h-[210px]" : "h-0"
                  }`}
                >
                  <img
                    loading="lazy"
                    src={project.imageSrc}
                    className={`object-contain w-[330px] h-[210px] transition-transform duration-[1500ms] ease-in-out ${
                      animation === "initial"
                        ? "scale-0 opacity-0" // Start small and invisible
                        : animation === "revealing"
                        ? "scale-100 opacity-0" // Scale done, still invisible
                        : "scale-100 opacity-100"
                    }`}
                    style={{
                      transformOrigin: "0% 50%",
                    }}
                    alt={`${project.name} project`}
                  />
                </div>

                <div className="self-start mt-8 max-md:mt-10 flex items-center justify-between w-full">
                  <span
                    className={`transition-opacity duration-1000 ease-in-out ${
                      animation === "final" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {project.name}
                  </span>
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-transform duration-1000 ease-in-out ${
                          animation === "final" ? "scale-100" : "scale-0"
                        }`}
                      >
                        <img
                          src="/github-svgrepo-com.svg"
                          alt="GitHub"
                          width="20"
                          height="20"
                        />
                      </a>
                    )}
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-transform duration-1000 ease-in-out ${
                          animation === "final" ? "scale-100" : "scale-0"
                        }`}
                      >
                        <img
                          src="/external-link-svgrepo-com.svg"
                          alt="GitHub"
                          width="20"
                          height="20"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className={`text-sm text-gray-600 mt-2 transition-opacity duration-1000 ease-in-out ${
                    animation === "final" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {project.codeExplanation} <br />
                  {project.line2}
                </div>
                <div
                  className={`shrink-0 mt-7 h-0.5 border-2 border-red-300 border-solid transition-transform duration-1000 ease-in-out ${
                    animation === "final" ? "scale-100" : "scale-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <nav
          className={`flex overflow-hidden flex-col justify-center px-14 py-11 mt-6 w-full text-base font-light uppercase bg-gray-100 rounded-3xl max-md:px-5 max-md:max-w-full md:row-span-1 md:max-h-[20%] md:mt-24 transition-transform duration-[1500ms] ease-in-out ${
            animation === "initial"
              ? "scale-x-0 scale-y-0 opacity-0"
              : "scale-x-1 scale-y-1 opacity-100"
          }`}
          style={{
            transformOrigin: "0% 0%",
          }}
        >
          <SocialIcons isVisible={isVisible} />
        </nav>
      </div>
    </aside>
  );
};

export default ProjectsSection;
