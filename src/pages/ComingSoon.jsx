// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const ComingSoon = () => {
//   // Load Watson Assistant script
//   useEffect(() => {
//     window.watsonAssistantChatOptions = {
//       integrationID: "dbc5efd6-7930-44f3-a666-5c922e7af412",
//       region: "au-syd",
//       serviceInstanceID: "5ce544a6-f5fe-4683-b19b-6e4bf839a15a",
//       onLoad: async (instance) => {
//         await instance.render();
//       },
//     };

//     setTimeout(() => {
//       const t = document.createElement("script");
//       t.src =
//         "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
//         (window.watsonAssistantChatOptions.clientVersion || "latest") +
//         "/WatsonAssistantChatEntry.js";
//       document.head.appendChild(t);
//     }, 0);
//   }, []);

//   return (
//     <motion.div
//       className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden font-bangers text-white"
//       animate={{
//         backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//       }}
//       transition={{
//         duration: 10,
//         ease: "easeInOut",
//         repeat: Infinity,
//       }}
//       style={{
//         backgroundColor: "#2D2A3A", // Dark purple background like the logo
//         backgroundImage:
//           "linear-gradient(to bottom right, #2D2A3A, #1A1721, #2D2A3A)",
//         backgroundSize: "400% 400%",
//       }}
//     >
//       {/* Page Content */}
//       <div className="container flex flex-col md:flex-row flex-grow relative z-10">
//         {/* Text Section */}
//         <div className="text-section flex-1 p-6 md:p-12 flex flex-col justify-end text-center md:text-left">
//           {/* Logo Image instead of text */}
//           <div className="mb-35 flex justify-center md:justify-start">
//             <img
//               src="img/fnr_logo.png"
//               alt="Flick N Roll Pickleball"
//               className="h-24 md:h-40 w-auto"
//             />
//           </div>

//           <div className="flex justify-center md:justify-end flex-col items-center md:items-start">
//             <h1 className="text-3xl md:text-5xl text-[#FFA500] mt-5 mb-5">
//               Coming Soon
//             </h1>
//             <p className="text-base md:text-lg text-gray-300 md:w-[50%] leading-relaxed">
//               Get ready to experience the best pickleball court in town. We are
//               launching soon with exciting games and events for all ages. Stay
//               tuned!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Links */}
//       <footer className="w-full py-4 px-8 bg-transparent z-10 relative">
//         <div className="container mx-auto px-4 flex flex-wrap justify-left gap-4 md:gap-8">
//           <Link
//             to="/privacy-policy"
//             className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
//           >
//             Privacy Policy
//           </Link>
//           <Link
//             to="/terms-and-conditions"
//             className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
//           >
//             Terms & Conditions
//           </Link>
//           <Link
//             to="/cancellation"
//             className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
//           >
//             Cancellation
//           </Link>
//           <Link
//             to="/shipping-delivery"
//             className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
//           >
//             Shipping & Delivery
//           </Link>
//           <Link
//             to="/contact-us"
//             className="text-gray-300 hover:text-[#FFA500] transition-colors duration-300 font-medium text-sm md:text-base"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </footer>

//       {/* Spinning Ball - on top of everything */}
//       <div className="absolute inset-0 overflow-hidden z-[999] pointer-events-none">
//         <motion.img
//           src="img/ball.png"
//           alt="Spinning Ball"
//           className="absolute bottom-[-300px] right-[-400px] w-[900px] md:w-[1200px] h-auto md:h-[1200px] object-cover animate-spin-ball drop-shadow-[0_0_50px_rgba(0,0,0,0.3)]"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 10, ease: "linear", repeat: Infinity }}
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default ComingSoon;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, zoomIn } from "../utils/animations";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load Watson Assistant script
  useEffect(() => {
    // Check if script is already loaded
    if (document.getElementById("watson-assistant-script")) {
      return;
    }

    window.watsonAssistantChatOptions = {
      integrationID: "dbc5efd6-7930-44f3-a666-5c922e7af412",
      region: "au-syd",
      serviceInstanceID: "5ce544a6-f5fe-4683-b19b-6e4bf839a15a",
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    const script = document.createElement("script");
    script.id = "watson-assistant-script";
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (document.getElementById("watson-assistant-script")) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically add the email to your mailing list
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
        backgroundColor: "#2D2A3A",
        backgroundImage:
          "linear-gradient(to bottom right, #2D2A3A, #1A1721, #2D2A3A)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Page Content */}
      <div className="container flex flex-col md:flex-row items-center justify-left flex-grow relative z-10 ml-10 px-4 py-8">
        {/* Text & Form Section */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.img
            src="/img/fnr_logo.png"
            alt="Flick N Roll Pickleball"
            className="h-24 md:h-32 w-auto mx-auto md:mx-0 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h1 
            className="text-4xl md:text-6xl text-[#FFA500] mb-6"
            variants={slideInLeft}
          >
            Coming Soon
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-xl mb-8"
            variants={slideInLeft}
            transition={{ delay: 0.2 }}
          >
            Get ready to experience the best pickleball court in town. We are
            launching soon with exciting games and events for all ages.
          </motion.p>

          <motion.div 
            className="max-w-md mx-auto md:mx-0"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {isSubmitted ? (
              <div className="bg-[#FFA500]/10 border border-[#FFA500]/30 text-[#FFA500] px-6 py-4 rounded-lg">
                <strong className="font-bold">Thank you!</strong>
                <span className="block mt-1">
                  We'll keep you updated on our launch.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for updates"
                  required
                  className="flex-grow px-4 py-3 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-[#FFA500] text-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold rounded-lg transition-colors whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            )}
          </motion.div>

          <motion.div 
            className="mt-12 flex justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://www.instagram.com/flicknroll/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FFA500] transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Info */}
      <motion.div 
        className="container mx-auto px-4 py-5 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex flex-col md:flex-row justify-left items-center gap-6 text-center md:text-left ml-5">
          <div>
            <p className="text-gray-300 text-sm">Email us at:</p>
            <a href="mailto:info@flicknroll.com" className="text-[#FFA500] hover:underline">
              info@flicknroll.com
            </a>
          </div>
          <div className="hidden md:block h-6 w-px bg-gray-700"></div>
          <div>
            <p className="text-gray-300 text-sm">Call us at:</p>
            <a href="tel:+919537531054" className="text-[#FFA500] hover:underline">
              +91 9537531054
            </a>
          </div>
          <div className="hidden md:block h-6 w-px bg-gray-700"></div>
          <div>
            <p className="text-gray-300 text-sm">Find us at:</p>
            <p className="text-white">Chh, 3, Nr. Parinam Circle, Gandhinagar</p>
          </div>
        </div>
      </motion.div>

      {/* Footer Links */}
      <footer className="w-full py-6 px-4 bg-[#1A1721]/60 backdrop-blur-sm z-10">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Flick N Roll Pickleball. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-[#FFA500] transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-gray-400 hover:text-[#FFA500] transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/cancellation"
              className="text-gray-400 hover:text-[#FFA500] transition-colors text-sm"
            >
              Cancellation
            </Link>
            <Link
              to="/shipping-delivery"
              className="text-gray-400 hover:text-[#FFA500] transition-colors text-sm"
            >
              Shipping & Delivery
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-400 hover:text-[#FFA500] transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>

      {/* Spinning Ball */}
      <div className="absolute inset-0 overflow-hidden z-[5] pointer-events-none">
        <motion.img
          src="/img/ball.png"
          alt="Spinning Ball"
          className="absolute bottom-[-300px] right-[-400px] w-[900px] md:w-[1200px] h-auto opacity-25 object-cover drop-shadow-[0_0_50px_rgba(0,0,0,0.3)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default ComingSoon;