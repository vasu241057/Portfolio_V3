// About
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-1/2 h-full max-md:w-full">
      <div className="flex flex-col justify-between h-full p-6 bg-red-100 rounded-3xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a297902af0cf02040270f1c6cf286683f019b463133a44fe6e198d89790d4538?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91"
          className="object-contain w-[38px] aspect-square"
          alt=""
        />
        <p className="text-xl font-light leading-6 text-black">
          Julia Huang is an innovative AI artist, renowned for blending
          cutting-edge technology with creative expression. Based in LA, she
          crafts unique digital art experiences accessible globally.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
