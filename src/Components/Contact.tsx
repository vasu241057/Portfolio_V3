import React, { useEffect, useState } from "react";

interface HeroProps {
  isVisible: boolean;
}

const ContactSection: React.FC<HeroProps> = ({ isVisible }) => {
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

  return (
    <section
      id="contact"
      className={`w-1/2 h-full max-md:w-full transition-all duration-[1500ms] ease-in-out ${
        animation === "initial"
          ? "scale-x-0 scale-y-0 opacity-0"
          : "scale-x-1 scale-y-1 opacity-100"
      }`}
      style={{
        transformOrigin: "65% 0%",
      }}
    >
      <div className="flex flex-col justify-between h-full p-6 bg-red-300 rounded-3xl text-black">
        <div className="flex justify-between items-start">
          <p
            className={`text-base font-light transition-opacity duration-500 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
          >
            Have some <br /> questions?
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ec8263890bbbe4ce7fe0bd6a76f454cc9ba05266209e4c4dc8bb3c5c5f93a22?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91"
            className={`object-contain w-[38px] aspect-square transition-opacity duration-500 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
            alt=""
          />
        </div>
        <h2
          className={`text-5xl font-medium max-md:text-4xl transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Contact me
        </h2>
      </div>
    </section>
  );
};

export default ContactSection;
