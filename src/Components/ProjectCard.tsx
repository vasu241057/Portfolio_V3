import React from "react";
import "./ProjectCardStyle.css";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  text: string;
  git: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  alt,
  title,
  text,
  git,
  link,
}) => {
  return (
    <div className="projects-card">
      <div className="project-img">
        <img src={image} alt={alt} />
      </div>
      <h2 className="">{title}</h2>
      <p>{text}</p>
      <div className="project-button">
        <Link to={link} target="_blank" className="project-btn">
          Live Demo
        </Link>
        <Link to={git} target="_blank" className="project-btn">
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
