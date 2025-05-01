import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ComingSoon = () => {
  // Load Watson Assistant script
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "dbc5efd6-7930-44f3-a666-5c922e7af412",
      region: "au-syd",
      serviceInstanceID: "5ce544a6-f5fe-4683-b19b-6e4bf839a15a",
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    setTimeout(() => {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }, 0);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden font-bangers text-white"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        backgroundColor: "#2D2A3A", // Dark purple background like the logo
        backgroundImage:
          "linear-gradient(to bottom right, #2D2A3A, #1A1721, #2D2A3A)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Page Content */}
      <div className="container flex flex-col md:flex-row flex-grow relative z-10">
        {/* Text Section */}
        <div className="text-section flex-1 p-6 md:p-12 flex flex-col justify-end text-center md:text-left">
          {/* Logo Image instead of text */}
          <div className="mb-35 flex justify-center md:justify-start">
            <img
              src="img/fnr_logo.png"
              alt="Flick N Roll Pickleball"
              className="h-24 md:h-40 w-auto"
            />
          </div>

          <div className="flex justify-center md:justify-end flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-5xl text-[#FFA500] mt-5 mb-5">
              Coming Soon
            </h1>
            <p className="text-base md:text-lg text-gray-300 md:w-[50%] leading-relaxed">
              Get ready to experience the best pickleball court in town. We are
              launching soon with exciting games and events for all ages. Stay
              tuned!
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="w-full py-4 px-8 bg-transparent z-10 relative">
        <div className="container mx-auto px-4 flex flex-wrap justify-left gap-4 md:gap-8">
          <Link
            to="/privacy-policy"
            className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/cancellation"
            className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
          >
            Cancellation
          </Link>
          <Link
            to="/shipping-delivery"
            className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
          >
            Shipping & Delivery
          </Link>
          <Link
            to="/contact-us"
            className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
          >
            Contact Us
          </Link>
        </div>
      </footer>

      {/* Spinning Ball - on top of everything */}
      <div className="absolute inset-0 overflow-hidden z-[999] pointer-events-none">
        <motion.img
          src="img/ball.png"
          alt="Spinning Ball"
          className="absolute bottom-[-300px] right-[-400px] w-[900px] md:w-[1200px] h-auto md:h-[1200px] object-cover animate-spin-ball drop-shadow-[0_0_50px_rgba(0,0,0,0.3)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default ComingSoon;
