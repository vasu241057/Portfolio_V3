import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data.ts";
import SkillCard from "./SkillCard";
import SkillsInfoCard from "../SkillsInfoCard/SkillsInfoCard.tsx";

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data: any) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
      <h5>TECHNICAL PROFICIENCY</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
