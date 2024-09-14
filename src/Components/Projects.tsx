import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  imageSrc?: string;
  githubLink?: string;
  projectLink?: string;
  codeExplanation: string;
}

const projects: Project[] = [
  {
    name: "Musea",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5fe138be77ea94a9c91eec878c1e70f5169f080119aecf82aa3e3f024955047f?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91",
    githubLink: "https://github.com/example/musea",
    projectLink: "https://musea-project.com",
    codeExplanation: "React-based art gallery management system",
  },
  {
    name: "Elara",
    imageSrc:
      "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg",
    githubLink: "https://github.com/example/elara",
    projectLink: "https://elara-project.com",
    codeExplanation: "Node.js e-commerce platform with GraphQL API",
  },
  {
    name: "Verve",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5fe138be77ea94a9c91eec878c1e70f5169f080119aecf82aa3e3f024955047f?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91",
    githubLink: "https://github.com/example/verve",
    projectLink: "https://verve-project.com",
    codeExplanation: "Vue.js-powered social media dashboard",
  },
  {
    name: "Zephyr",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5fe138be77ea94a9c91eec878c1e70f5169f080119aecf82aa3e3f024955047f?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91",
    githubLink: "https://github.com/example/zephyr",
    projectLink: "https://zephyr-project.com",
    codeExplanation: "Python-based weather forecasting application",
  },
];

interface HeroProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<HeroProps> = ({ isVisible }) => {
  const [hover, setHover] = useState<number | null>(null);
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
          className={`flex overflow-hidden flex-col px-8 pt-7 pb-7w-full text-2xl font-medium bg-red-100 rounded-3xl max-md:px-5 max-md:max-w-full md:row-span-4 md:h-[120%] md:mb-10 transition-transform duration-[1500ms] ease-in-out ${
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
          <div className="flex gap-5 justify-between">
            <h2
              className={`transition-opacity duration-1000 ease-in-out ${
                animation === "final" ? "opacity-100" : "opacity-0"
              }`}
            >
              Projects
            </h2>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf1423798b95d7e316981440b12401abba63cb9f04ec734f0b4059d6294dafe5?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91"
              className={`object-contain shrink-0 my-auto aspect-square w-[26px] transition-transform duration-1000 ease-in-out ${
                animation === "final" ? "scale-100" : "scale-50"
              }`}
              alt=""
            />
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
                  className={`overflow-hidden transition-all duration-1000 ease-in-out mt-5 ${
                    index === hover ? "h-[210px]" : "h-0"
                  }`}
                >
                  <img
                    loading="lazy"
                    src={project.imageSrc}
                    className={`object-contain w-full h-full transition-opacity duration-1000 ease-in-out ${
                      index === hover ? "opacity-100" : "opacity-0"
                    }`}
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
                        <Github size={20} />
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
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className={`text-sm text-gray-600 mt-2 transition-opacity duration-1000 ease-in-out ${
                    animation === "final" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {project.codeExplanation}
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
          className={`flex overflow-hidden flex-col justify-center px-14 py-11 mt-6 w-full text-base font-light uppercase bg-red-100 rounded-3xl max-md:px-5 max-md:max-w-full md:row-span-1 md:max-h-[20%] md:mt-24 transition-transform duration-[1500ms] ease-in-out ${
            animation === "initial"
              ? "scale-x-0 scale-y-0 opacity-0" // Start from a point
              : "scale-x-1 scale-y-1 opacity-100" // Final state
          }`}
          style={{
            transformOrigin: "0% 0%",
          }}
        >
          <ul className="flex gap-10 justify-between items-center">
            <li>
              <a
                href="#"
                className={`transition-opacity duration-1000 ease-in-out ${
                  animation === "final" ? "opacity-100" : "opacity-0"
                }`}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`transition-opacity duration-1000 ease-in-out ${
                  animation === "final" ? "opacity-100" : "opacity-0"
                }`}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`transition-opacity duration-1000 ease-in-out ${
                  animation === "final" ? "opacity-100" : "opacity-0"
                }`}
              >
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default ProjectsSection;
