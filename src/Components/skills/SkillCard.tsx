import React from "react";
import "./SkillCard.css";

interface SkillCardProps {
  title: string;
  iconUrl: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  iconUrl,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt={title} />
      </div>

      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
