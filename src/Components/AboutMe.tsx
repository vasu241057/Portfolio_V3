import React from "react";
import { Link } from "react-router-dom";
import "./AboutMeStyle.css";
import aboutMeImg1 from "../assets/react1.jpg";
import aboutMeImg2 from "../assets/react2.webp";

const AboutMe: React.FC = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe-container">
        <div className="left">
          <h1>Who am I ?</h1>
          <p>
            Hello! I am a Front-End Web Developer with a keen eye for design and
            a passion for creating beautiful and functional websites. I have a
            B.Sc degree in Department of Fashion Design and Apparel Engineering
            and 3 months of experience in the fashion industry. However, I
            realized that my true calling was in computer science and web
            development, so I decided to pursue a career in this field.
            <br />
            <br />
            Over the past 3 months, I have been learning HTML, CSS, JavaScript,
            React, Bootstrap, Tailwind CSS, MUI, and other front-end web
            development technologies. I have completed several projects using
            these technologies, and I am excited to continue honing my skills
            and building amazing websites.
            <br />
            <br />
            I am also proficient in version control systems like Git and GitHub,
            which allows me to collaborate effectively with other developers and
            keep track of changes to my code.
            <br />
            <br />
            Thank you for taking the time to read my introduction. I look
            forward to working with you!
          </p>
          <Link to={"/contact"} className="submit-btn">
            {" "}
            CONTACT{" "}
          </Link>
        </div>
        <div className="right">
          <div className="aboutMe-img">
            <div className="top">
              <img src={aboutMeImg1} alt="About Me Image" />
            </div>
            <div className="bottom">
              <img src={aboutMeImg2} alt="About Me Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
