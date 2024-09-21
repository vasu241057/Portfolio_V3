import React from "react";
import "./ProfileStyle.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="left">
          <div className="bubble"></div>
        </div>
        <div className="right">
          <h1>Vasu Khandelwal</h1>
          <p className="designation">FullStack Developer</p>
          <p className="about-text">
            Hello there! As a full-stack developer from Jaipur, I've journeyed
            from C to a buffet of modern technologies. I craft sleek front-end
            experiences with ReactJS, NextJS, and friends, while my back-end
            skills in NodeJS and various databases keep things running smoother
            than a well-oiled machine. When I'm not building web wonders, you'll
            find me in the competitive coding arena, solving problems with the
            focus of a chai wallah during rush hour. Driven by an insatiable
            curiosity and a commitment to quality, I'm always ready to tackle
            the next digital challenge. Let's build something remarkable
            together – no peacock dance required.
          </p>
          <div className="social-icon-cv">
            <div className="cv">
              <Link
                to={
                  "https://drive.google.com/file/d/194JC9ad6QIQvzWhL8MX6YSyc6iAx3421/view?usp=sharing"
                }
                target="_blank"
                className="submit-btn"
              >
                DOWNLOAD RESUME
              </Link>
            </div>
            <div className="social-link">
              <Link to={"https://github.com/vasu241057"} target="_blank">
                <FaGithub size={40} style={{ color: "white" }} />
              </Link>

              <Link
                to={"https://www.linkedin.com/in/vasu-khandelwal-04b5861a1/"}
                target="_blank"
              >
                <FaLinkedin size={40} style={{ color: "white" }} />
              </Link>
              <Link to={"https://www.instagram.com/kh_vasu/"} target="_blank">
                <FaInstagram size={40} style={{ color: "white" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
