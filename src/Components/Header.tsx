import React, { useEffect, useState } from "react";

interface HeroProps {
  isVisible: boolean;
}

const Header: React.FC<HeroProps> = ({ isVisible }) => {
  const [animation, setAnimation] = useState("initial");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setAnimation("revealing");
      }, 100);

      setTimeout(() => {
        setShowText(true);
      }, (1500 * 5) / 6);
    }
  }, [isVisible]);

  return (
    <header
      className={`flex overflow-hidden flex-col justify-center mt-1 px-6 py-7 w-full font-light text-black bg-red-100 rounded-3xl max-md:px-5 max-md:max-w-full transition-all duration-[1500ms] ease-in-out ${
        animation === "initial"
          ? "scale-x-0 scale-y-0 opacity-0"
          : "scale-x-1 scale-y-1 opacity-100"
      }`}
      style={{
        transformOrigin: "50% 100%",
      }}
    >
      <div className="flex flex-wrap gap-10 justify-between items-center max-md:max-w-full">
        <h1
          className={`self-stretch my-auto text-2xl uppercase transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="italic">JULIA</span>{" "}
          <span className="font-medium">HUANG</span>
        </h1>
        <nav
          className={`flex flex-col self-stretch my-auto text-base whitespace-nowrap min-w-[240px] w-[303px] transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="flex gap-10 justify-between items-center">
            <li>
              <a href="#projects" className="self-stretch my-auto">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#about" className="self-stretch my-auto">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#contact" className="self-stretch my-auto">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
