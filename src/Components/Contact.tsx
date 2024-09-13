import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-1/2 h-full max-md:w-full">
      <div className="flex flex-col justify-between h-full p-6 bg-red-300 rounded-3xl text-black">
        <div className="flex justify-between items-start">
          <p className="text-base font-light">
            Have some <br /> questions?
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ec8263890bbbe4ce7fe0bd6a76f454cc9ba05266209e4c4dc8bb3c5c5f93a22?placeholderIfAbsent=true&apiKey=82a1a1af3ce94a618a51fd1a3ee38d91"
            className="object-contain w-[38px] aspect-square"
            alt=""
          />
        </div>
        <h2 className="text-5xl font-medium max-md:text-4xl">Contact me</h2>
      </div>
    </section>
  );
};

export default ContactSection;
