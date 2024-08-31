import { useEffect } from "react";

const Modal = ({ showModal, closeModal, message,toName }) => {
  useEffect(() => {
    // Ensure that the Lottie player script is loaded
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg mx-auto z-10">
            <div className="w-[350px] h-[150px] mb-16 mx-auto">
              <lottie-player
                src="https://lottie.host/1643fafd-0ca7-45d6-82e2-f5d84ab82f7a/XHJoDubW8A.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "150%" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="text-gray-800 lg:text-xl md:text-xl text-lggi text-center my-6 leading-relaxed w-[80%] mx-auto">{message}</p>
            <div className="flex justify-center">
          <button
            onClick={closeModal}
            className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white text-xl px-6 py-2 hover:border-[#000] cursor-pointer transition"
          >
            Close
          </button>
        </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
