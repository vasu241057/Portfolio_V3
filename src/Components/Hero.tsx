import React from "react";
import "./HeroStyle.css";
import myVideo from "../assets/herovideo.mp4";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="mask">
        <video className="hero-video" autoPlay loop muted>
          <source src={myVideo} />
        </video>
      </div>
      <div className="content">
        <p>HI, I'M Vasu Khandelwal</p>
        <h1 className="font-black">
          <span>Software</span> Developer.
        </h1>
        <div>
          <Link to="/project" className="btn w-[80%] block rounded-2xl">
            {" "}
            Project --{">"}{" "}
          </Link>
          <Link
            to="/contact"
            className="btn btn-light w-[80%] block rounded-2xl"
          >
            {" "}
            Contact --{">"}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
