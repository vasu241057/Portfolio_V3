import React from "react";
import "./HeroAllStyle.css";

interface HeroAllProps {
  heading: string;
  text: string;
}

const HeroAll: React.FC<HeroAllProps> = ({ heading, text }) => {
  return (
    <div className="heroAll-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroAll;
