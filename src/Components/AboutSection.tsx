import { useEffect, useState } from "react";

interface HeroProps {
  isVisible: boolean;
}

const AboutSection: React.FC<HeroProps> = ({ isVisible }) => {
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
    <section
      id="about"
      className={`w-1/2 max-md:w-full transition-all duration-[1500ms] ease-in-out ${
        animation === "initial"
          ? "scale-x-0 scale-y-0 opacity-0"
          : "scale-x-1 scale-y-1 opacity-100"
      }`}
      style={{
        transformOrigin: "100% 0%",
      }}
    >
      <div className="flex flex-col justify-between h-full p-6 bg-gray-100 rounded-3xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a297902af0cf02040270f1c6cf286683f019b463133a44fe6e198d89790d4538?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91"
          className={`object-contain w-[38px] aspect-square transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
          alt=""
        />
        <p
          className={`text-xl font-light leading-6 text-black transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Full-stack dev from Jaipur. , NodeJS, Nest expert,ReactJS, NextJS
          ,Go,. Database whiz. Competitive coder. Curiosity-driven
          problem-solver. Let's build something remarkable – no peacock dance
          required.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
