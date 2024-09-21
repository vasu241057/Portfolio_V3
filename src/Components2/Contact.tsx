import React, { useEffect, useState } from "react";

interface HeroProps {
  isVisible: boolean;
}

const ContactSection: React.FC<HeroProps> = ({ isVisible }) => {
  const [animation, setAnimation] = useState("initial");
  const [showText, setShowText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAnimation, setModalAnimation] = useState("hidden");

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

  const handleContactClick = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setModalAnimation("visible");
    }, 50);
  };

  const closeModal = () => {
    setModalAnimation("hidden");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  return (
    <>
      <section
        id="contact"
        className={`w-2/5 h-full max-md:w-full transition-all duration-[1500ms] ease-in-out ${
          animation === "initial"
            ? "scale-x-0 scale-y-0 opacity-0"
            : "scale-x-1 scale-y-1 opacity-100"
        }`}
        style={{
          transformOrigin: "65% 0%",
        }}
        onClick={handleContactClick}
      >
        <div className="flex flex-col justify-between h-full p-6 bg-gray-300 rounded-3xl text-black cursor-pointer">
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

      {/* Updated Styled Modal with Animation */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black overflow-y-auto h-full w-full flex justify-center items-center z-50 transition-all duration-300 ease-in-out ${
            modalAnimation === "visible" ? "bg-opacity-50" : "bg-opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative p-4 w-full max-w-md transition-all duration-300 ease-in-out ${
              modalAnimation === "visible"
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gray-100 rounded-3xl shadow-lg overflow-hidden">
              {/* Modal header */}
              <div className="flex items-center justify-between p-6 bg-gray-300 rounded-t-3xl">
                <h3 className="text-3xl font-medium text-black">
                  Let's Connect
                </h3>
                <button
                  type="button"
                  className="text-black hover:text-gray-700 rounded-full p-1"
                  onClick={closeModal}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-6 space-y-4">
                <p className="text-base text-gray-700">
                  I'm always open to new opportunities and collaborations. Feel
                  free to reach out!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                    <span className="text-lg text-gray-700">
                      Bengaluru, India
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span className="text-lg text-gray-700">
                      +91 7791932421
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="text-lg text-gray-700">
                      vasu.khandelwal08@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-between p-6 bg-gray-200 rounded-b-3xl">
                <button
                  onClick={() =>
                    (window.location.href =
                      "mailto:vasu.khandelwal08@gmail.com")
                  }
                  type="button"
                  className="text-white bg-black hover:bg-gray-800 font-medium rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out"
                >
                  Send Email
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-black bg-transparent hover:bg-gray-300 font-medium rounded-full text-sm px-6 py-3 text-center transition duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;
