import { useEffect, useState } from "react";

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
      className={`flex flex-col h-[115%] justify-center px-7   mt-4 w-full font-light text-black bg-gray-100 rounded-3xl max-md:px-5 max-md:max-w-full transition-all duration-[1500ms] ease-in-out ${
        animation === "initial"
          ? "scale-x-0 scale-y-0 opacity-0"
          : "scale-x-1 scale-y-1 opacity-100"
      }`}
      style={{
        transformOrigin: "50% 100%",
      }}
    >
      <div className="flex flex-wrap gap-10 py-12  justify-between items-center max-md:max-w-full">
        <h1
          className={`self-stretch my-auto text-2xl uppercase transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="italic">Vasu</span>{" "}
          <span className="font-medium">Khandelwal</span>
        </h1>
        <nav
          className={`flex flex-col self-stretch my-auto text-base whitespace-nowrap  transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="https://drive.google.com/file/d/194JC9ad6QIQvzWhL8MX6YSyc6iAx3421/view?usp=sharing"
            className="self-stretch my-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
