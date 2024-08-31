import React, { useEffect } from "react";

const ThankYouModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Ensure that the Lottie player script is loaded
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Lottie Background Animation */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-20">
        <lottie-player
          src="https://lottie.host/c34c441f-7765-442b-b4ca-83d82510529f/42UJUSiEQW.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-lg z-10 flex flex-col items-center">
        <div className="w-[200px] h-[200px] mb-4">
          <lottie-player
            src="https://lottie.host/8e88ba87-7ba8-4600-bcb3-3787a8f6ed1d/Q1iFXTET5C.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
          ></lottie-player>
        </div>

        <p className="text-gray-800 lg:text-xl md:text-xl text-lggi text-center my-6 leading-relaxed">
          Thank you for taking the first step with us!
          <br />
          Our dedicated counselor will reach out to you shortly.
         
        </p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white text-xl px-6 py-2 hover:border-[#000] cursor-pointer transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
