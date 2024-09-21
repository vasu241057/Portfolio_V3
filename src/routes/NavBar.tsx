import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBarStyle.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar: React.FC = () => {
  // ............Theme toggle Start .............

  const [theme, setTheme] = useState<"dark-theme" | "light-theme">(
    "dark-theme"
  );

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // ............Theme toggle end .............

  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setColor(true);
    } else {
      setColor(false);
    }
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>

      <ul
        onClick={() => setClick(false)}
        className={click ? "nav-menu active" : "nav-menu"}
      >
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/project"> Project </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>

        <div onClick={toggleTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-7 h-7 transition-all duration-300 ${
              theme === "dark-theme"
                ? " fill-none stroke-sky-500 stroke-2"
                : "fill-sky-500"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </div>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
