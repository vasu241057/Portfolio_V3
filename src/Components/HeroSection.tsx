import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="h-full">
      <div className="flex h-full gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:w-full h-full">
          <div className="flex flex-col justify-between h-full px-6 py-9 bg-red-100 rounded-3xl text-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a732317479bceb5aabbed11b61261399456bc6dd7fdf342a5128b66dec28ad8?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91"
              className="object-contain self-end w-[119px] aspect-square"
              alt=""
            />
            <h2 className="text-5xl font-bold leading-tight max-md:text-4xl">
              Artist Redefining{" "}
              <span className="italic font-light">Architecture</span> with
              AI-Driven Design
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-[37%] max-md:w-full h-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bb8c34e70cd25c76d8c67904ea65e65405307388a0c8bee5b3081bfee8e0c8e?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91"
            className="object-cover w-full h-full rounded-3xl"
            alt="Julia Huang's AI-driven architectural design"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
