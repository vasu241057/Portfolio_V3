import React, { useEffect, useState } from "react";
import "./Projects.css";
import SocialIcons from "./SocialIcons";

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

interface WorkExperience {
  // Define the structure for work experience data
  company: string;
  role: string;
  duration: string;
  description: string;
}

const workExperiences: WorkExperience[] = [
  // Add your work experience data here
  {
    company: "Example Corp",
    role: "Software Engineer",
    duration: "2020 - Present",
    description:
      "Developed and maintained web applications using React and Node.js.",
  },
  // Add more work experiences as needed
];

interface Skill {
  name: string;
  level: number; // 1-5 for example
}

const skills: Skill[] = [
  // Add your skills data here
  { name: "React", level: 5 },
  { name: "TypeScript", level: 4 },
  { name: "Node.js", level: 4 },
  // Add more skills as needed
];

interface HeroProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<HeroProps> = ({ isVisible }) => {
  const [hover, setHover] = useState<number | null>(0);
  const [animation, setAnimation] = useState("initial");
  const [flipDirection, setFlipDirection] = useState<"left" | "right" | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("Projects");

  const handleTabChange = (newTab: string) => {
    const tabOrder = ["Projects", "Work-Experience", "Skills"];
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newTab);

    if (currentIndex < newIndex) {
      setFlipDirection("right");
    } else if (currentIndex > newIndex) {
      setFlipDirection("left");
    }

    setAnimation("flipping");
    setTimeout(() => {
      setActiveTab(newTab);
      setAnimation("final");
      setFlipDirection(null);
    }, 1000); // Half of the flip animation duration
  };
  const renderContent = () => {
    switch (activeTab) {
      case "Projects":
        return (
          <div className="overflow-y-auto my-8  md:h-[80.3%] hide-scrollbar">
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
        );
      case "Work-Experience":
        return (
          <div className="overflow-y-auto my-8 md:h-[80.3%] hide-scrollbar w-full">
            {workExperiences.map((experience, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold">{experience.company}</h3>
                <p className="text-lg">{experience.role}</p>
                <p className="text-sm text-gray-600">{experience.duration}</p>
                <p className="mt-2">{experience.description}</p>
              </div>
            ))}
          </div>
        );
      case "Skills":
        return (
          <div className="overflow-y-auto my-8 md:h-[80.3%] hide-scrollbar">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setAnimation("revealing");
      }, 100);
      setTimeout(() => {
        setAnimation("final");
      }, 1000);
    }
  }, [isVisible]);

  return (
    <aside
      id="projects"
      className="flex flex-col ml-5 max-md:ml-0 max-md:w-full md:max-h-full mb-4 "
    >
      <div className="flex flex-col grow text-black whitespace-nowrap max-md:mt-7 max-md:max-w-full md:grid-row- md:max-h-full md:gap-5 ">
        <div
          className={`flex overflow-hidden flex-col px-8 pt-7 pb-7 w-full text-2xl font-medium bg-gray-100 rounded-3xl max-md:px-5 max-md:max-w-full transition-all duration-2000 ease-in-out ${
            animation === "initial"
              ? "scale-x-0 scale-y-0 opacity-0"
              : animation === "flipping"
              ? flipDirection === "right"
                ? "flip-right-360"
                : "flip-left-360"
              : "scale-x-100 scale-y-100 opacity-100"
          }`}
          style={{
            transformOrigin: "center",
            perspective: "1000px",
          }}
        >
          <div className=" gap-5 justify-center">
            <TabsComponent
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
            <div className="content-wrapper">{renderContent()}</div>
          </div>
        </div>
        <nav
          className={`flex overflow-hidden flex-col justify-center px-14 py-9  w-full text-base font-light uppercase bg-gray-100 rounded-3xl max-md:px-5 max-md:max-w-full md:max-h-[20%] transition-transform duration-[1500ms] ease-in-out ${
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

const TabsComponent: React.FC<{
  activeTab: string;
  onTabChange: (tab: string) => void;
}> = ({ activeTab, onTabChange }) => {
  return (
    <div>
      {/* Mobile View */}
      <div className="md:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select your tab
        </label>
        <select
          id="tabs"
          className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
          onChange={(e) => onTabChange(e.target.value)}
          value={activeTab}
        >
          <option value="Projects">Projects</option>
          <option value="Work-Experience">Work Experience</option>
          <option value="Skills">Skills</option>
        </select>
      </div>

      {/* Desktop View */}
      <ul className="hidden text-sm font-medium text-center text-black rounded-lg shadow sm:flex bg-gray-100">
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => onTabChange("Projects")}
            className={`inline-block w-full p-4 border-r border-gray-200 rounded-s-lg hover:bg-gray-50 active focus:outline-none transition-transform duration-300 ease-in-out ${
              activeTab === "Projects" ? "bg-gray-200" : ""
            }`}
          >
            Projects
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => onTabChange("Work-Experience")}
            className={`inline-block w-full p-4 border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50 focus:outline-none transition-transform duration-300 ease-in-out ${
              activeTab === "Work-Experience" ? "bg-gray-200" : ""
            }`}
          >
            Work-Experience
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => onTabChange("Skills")}
            className={`inline-block w-full p-4 border-r border-gray-200 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:outline-none transition-transform duration-300 ease-in-out ${
              activeTab === "Skills" ? "bg-gray-200" : ""
            }`}
          >
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsSection;
