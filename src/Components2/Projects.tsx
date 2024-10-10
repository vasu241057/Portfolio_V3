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
    name: "P2P File-Transfer",
    imageSrc: "/P2P.jpeg",
    githubLink: "https://github.com/vasu241057/e-commerce",
    projectLink: "https://p2-p-frontend.vercel.app/websocket",
    codeExplanation:
      "A P2P file-sharing website that enables instant file transfers between two users via WebSocket using a passcode, built with Express, TypeScript, Prisma, and WebSocket.",
  },
  {
    name: "E-commerce",
    imageSrc: "/e-commerce.jpg",
    githubLink: "https://github.com/vasu241057/Portfolio_V3",
    projectLink: "https://portfolio-v3-neon-nine.vercel.app/",
    codeExplanation:
      "e-Shopping is an e-commerce platform for efficiently setting up and managing online stores.",
  },
  {
    name: "Image processing",
    imageSrc: "/Image-processing.png",
    githubLink: "https://github.com/vasu241057/image-processing-frontend",
    projectLink: "https://image-processing-frontend-9dsj.vercel.app/",
    codeExplanation:
      "A system for processing, compressing, and uploading images from CSV files to AWS S3 with async support",
  },
  {
    name: "Paytm Clone",
    imageSrc: "/paytm.jpg",
    githubLink: "https://github.com/vasu241057/paytm-fullstack",
    projectLink: "https://paytm-vasu.vercel.app/",
    codeExplanation:
      "MERN stack app with user signup/signin, secure transfers, and search functionality.",
  },
  {
    name: "Recipe app",
    imageSrc: "/Recipe.jpg",
    githubLink: "hhttps://github.com/vasu241057/Recipe-app",
    projectLink: "https://vasu241057.github.io/Recipe-app/",
    codeExplanation:
      "web app for searching recipe of a food item & displaying it in the form of tables. JS, Edaman recipe.",
  },
];

interface HeroProps {
  isVisible: boolean;
}

const ProjectsSection: React.FC<HeroProps> = ({ isVisible }) => {
  const [hover, setHover] = useState<number | null>(0);
  const [animation, setAnimation] = useState("initial");
  const [activeTab, setActiveTab] = useState("Profile");
  const [animation2, setAnimation2] = useState("initial");

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setAnimation("revealing");
      }, 100);
      setTimeout(() => {
        setAnimation("final");
        setAnimation2("final");
      }, 1000);
    }
  }, [isVisible]);

  const handleTabChange = (tab: string) => {
    setAnimation2("initial"); // reset content animation
    setTimeout(() => setActiveTab(tab), 50); // add delay before changing content
    setTimeout(() => {
      setAnimation2("revealing"); // start revealing the new content
    }, 200);
    setTimeout(() => {
      setAnimation2("final"); // set final state
    }, 400);
  };

  return (
    <aside
      id="projects"
      className="flex flex-col ml-5 max-md:ml-0 max-md:w-full md:max-h-full w-[33%]"
    >
      <div className="grid grid-rows-12 grow text-black whitespace-nowrap max-md:mt-7 max-md:max-w-full md:grid-row- md:max-h-full md:gap-5 ">
        <div
          className={`flex overflow-hidden flex-col px-8 py-6 w-full text-2xl font-medium bg-gray-100 rounded-3xl max-md:px-5 max-md:max-w-full row-span-10 transition-transform duration-[1500ms]  ease-in-out ${
            animation === "initial"
              ? "scale-x-0 scale-y-0 opacity-0"
              : "scale-x-1 scale-y-1 opacity-100"
          }`}
          style={{
            transformOrigin: "0% 30%",
          }}
        >
          <div className="flex gap-5 justify-center">
            <TabsComponent onTabChange={handleTabChange} />
          </div>
          <div className="overflow-y-auto my-8 hide-scrollbar">
            {activeTab === "Profile" &&
              projects.map((project, index) => (
                <div
                  key={project.name}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                  className={`transition-opacity duration-300 ease-in-out ${
                    animation2 === "final" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className={` flex justify-center overflow-hidden transition-all duration-1000 ease-in-out mt-5 ${
                      index === hover ? "h-[210px]" : "h-0"
                    }`}
                  >
                    <img
                      loading="lazy"
                      src={project.imageSrc}
                      className={`object-contain  transition-transform duration-[1500ms] ease-in-out ${
                        animation === "initial"
                          ? "scale-0 opacity-0"
                          : animation === "revealing"
                          ? "scale-100 opacity-0"
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
                    className={`text-sm text-gray-600 mt-2 transition-opacity duration-1000 ease-in-out break-words whitespace-normal ${
                      animation === "final" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {project.codeExplanation} <br />
                  </div>
                  <div
                    className={`shrink-0 mt-7 h-0.5 border-2 border-red-300 border-solid transition-transform duration-1000 ease-in-out ${
                      animation === "final" ? "scale-100" : "scale-0"
                    }`}
                  />
                </div>
              ))}

            {activeTab === "Work-Experience" && (
              <div
                className={`transition-opacity duration-400 ease-in-out break-words whitespace-normal ${
                  animation2 === "final" ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Work Experience
                  </h2>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      Software Developer
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      HDFC ERGO General Insurance Company Limited
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      June 2023 – Present | Bengaluru
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                      <li>
                        Developed server-side services for Motor Insurance and
                        Admin Dashboard, improving API performance by 35%.
                      </li>
                      <li>
                        Implemented analytics & monitoring features, improving
                        product performance by 40% & reducing latency by 60%.
                      </li>
                      <li>
                        Implemented secure authentication and authorization
                        system, reducing user onboarding time by 40%.
                      </li>
                      <li>
                        Led development of dynamic Proposal Form for health
                        insurance using NestJS.
                      </li>
                      <li>
                        Containerized apps with Docker, improving page load
                        times by 25%.
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      Product Development Intern
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">Blue Yonder</p>
                    <p className="text-sm text-gray-500 mb-2">
                      July 2022 – January 2023 | Bengaluru
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                      <li>
                        Developed API using Mulesoft for secure authentication
                        of 500+ employees.
                      </li>
                      <li>
                        Mapped & optimized 20+ CIS Oracle runs, maintained TM
                        and TP API environments.
                      </li>
                      <li>
                        Validated and corrected 30+ files by SQL ingestion and
                        transform service.
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      Back-End Intern
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">Donut</p>
                    <p className="text-sm text-gray-500 mb-2">
                      January 2022 – May 2022 | Remote
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                      <li>
                        Developed RESTful APIs using Node.js & Express.js,
                        implementing advanced multi-filter search functionality.
                      </li>
                      <li>
                        Collaborated on database schema design, improving query
                        efficiency by 30%.
                      </li>
                      <li>
                        Implemented 100+ unit tests, reducing bug rate by 40%.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Skills" && (
              <div
                className={`transition-opacity duration-400 ease-in-out ${
                  animation2 === "final" ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col gap-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Technical Skills
                  </h2>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["TypeScript", "C++", "Javascript", "Java", "C"].map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      Frontend Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "ReactJS",
                        "NextJS",
                        "Redux",
                        "Recoil",
                        "Jest",
                        "HTML5",
                        "SCSS/SASS",
                        "MaterialUI",
                        "TailwindCSS",
                        "NextUI",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      Backend Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "NodeJS",
                        "ExpressJS",
                        "JWT",
                        "PrismaORM",
                        "Cloudfare Workers",
                        "NestJS",
                        "Sessions/Cookies",
                        "Redis",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      Database Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["PostgreSQL", "MongoDB", "SQLite"].map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      Developer Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AWS",
                        "Docker",
                        "Jira",
                        "Postman",
                        "Figma",
                        "Git",
                        "Bitbucket",
                        "GCP",
                        "Confluence",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <nav
          className={`flex overflow-hidden flex-col justify-center px-14 py-9  w-full text-base font-light uppercase bg-gray-100 rounded-3xl max-md:px-5 max-md:max-w-full  row-span-2 transition-transform duration-[1500ms] ease-in-out ${
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
