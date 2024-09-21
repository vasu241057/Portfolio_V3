import React, { Fragment } from "react";
import "./SkillsInfoCard.css";

interface Skill {
  skill: string;
}

interface SkillsInfoCardProps {
  heading: string;
  skills: Skill[];
}

const SkillsInfoCard: React.FC<SkillsInfoCardProps> = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <Fragment key={`skill_${index}`}>
            <div className="skills-info">
              <p>{item.skill}</p>
              <p className="percentage">{""}</p>
            </div>

            <div className="skills-progress-bg">
              <div className="skills-progress" style={{ width: "100%" }} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
