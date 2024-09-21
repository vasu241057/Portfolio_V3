import React from "react";
import { ProjectCardData } from "./Data";
import ProjectCard from "./ProjectCard";
// import ProjectCard from "./ProjectCard";
// import { ProjectCardData } from "./Data";

const ProjectCards: React.FC = () => {
  return (
    <div className="project">
      <h1 className="project-heading font-black">RECENT PROJECTS</h1>
      <div className="project-container">
        {ProjectCardData.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            alt={item.alt}
            title={item.title}
            text={item.text}
            git={item.git}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
