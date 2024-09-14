import React, { useEffect, useState } from "react";

interface HeroProps {
  isVisible: boolean;
}

const HeroSection: React.FC<HeroProps> = ({ isVisible }) => {
  const [animationState, setAnimationState] = useState("initial");
  const [animation, setAnimation] = useState("initial");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setAnimation("revealing");
      }, 100);

      setTimeout(() => {
        setAnimation("final");
        setShowText(true);
      }, (1500 * 5) / 6);
    }
  }, [isVisible]);

  useEffect(() => {
    const shrinkTimer = setTimeout(() => {
      setAnimationState("shrinking");
    }, 50);

    const moveTimer = setTimeout(() => {
      setAnimationState("final");
    }, 800);

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(moveTimer);
    };
  }, []);

  return (
    <section className="h-full relative">
      <div className="flex h-full gap-5 max-md:flex-col">
        <div
          className={`flex flex-col w-[63%] max-md:w-full h-full bg-gray-100 rounded-3xl text-black overflow-hidden transition-all duration-[1500ms] ease-in-out ${
            animation === "initial"
              ? "scale-x-0 scale-y-0 opacity-0"
              : animation === "revealing"
              ? "scale-x-1 scale-y-1 opacity-100"
              : "scale-x-1 scale-y-1 opacity-100"
          }`}
          style={{
            transformOrigin: "100% 30%",
          }}
        >
          <div className="flex flex-col justify-between h-full px-6 py-9">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a732317479bceb5aabbed11b61261399456bc6dd7fdf342a5128b66dec28ad8?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91"
              className={`object-contain self-end w-[119px] aspect-square transition-opacity duration-500 ${
                showText ? "opacity-100" : "opacity-0"
              }`}
              alt=""
            />
            <h2
              className={`text-5xl font-bold leading-tight max-md:text-4xl transition-opacity duration-500 ${
                showText ? "opacity-100" : "opacity-0"
              }`}
            >
              Backend Engineer
              <span className="text-lg italic font-light">ok, Got it</span>
              <br />
              FullStack
              <span className="italic font-light"> Engineer</span>
            </h2>
          </div>
        </div>

        <div
          className={`flex flex-col max-md:w-full overflow-hidden transition-all duration-[1500ms] ease-in-out ${
            animationState === "initial"
              ? "w-[43%] h-[110%] -translate-x-[50px] translate-y-[50px]"
              : animationState === "shrinking"
              ? "w-[37%] h-full -translate-x-[58px] translate-y-[58px]"
              : "w-[37%] h-full translate-x-0 translate-y-0"
          }`}
        >
          <img
            loading="lazy"
            src="/public/Profile-image.jpeg"
            alt="Julia Huang's AI-driven architectural design"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
