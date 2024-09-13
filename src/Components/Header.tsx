import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-col justify-center px-6 py-11 w-full font-light text-black bg-red-100 rounded-3xl max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center max-md:max-w-full">
        <h1 className="self-stretch my-auto text-2xl uppercase">
          <span className="italic">JULIA</span>{" "}
          <span className="font-medium">HUANG</span>
        </h1>
        <nav className="flex flex-col self-stretch my-auto text-base whitespace-nowrap min-w-[240px] w-[303px]">
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
