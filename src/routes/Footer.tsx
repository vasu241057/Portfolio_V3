import React from "react";
import "./styles/FooterStyle.css";
import {
  FaInstagram,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Bengaluru, India</p>
            </div>
          </div>

          <div className="phone location">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>+91 7791932421</p>
          </div>

          <div className="email location">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>vasu.khandelwal08@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
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

          <div className="social-icon">
            <Link to={"https://github.com/vasu241057"} target="_blank">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>

            <Link
              to={"https://www.linkedin.com/in/vasu-khandelwal-04b5861a1/"}
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to={"https://www.instagram.com/kh_vasu/"} target="_blank">
              <FaInstagram
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
