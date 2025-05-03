import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = ({ setIsBookingOpen }) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #2D2A3A, #1A1721, #2D2A3A)",
        backgroundColor: "#2D2A3A",
      }}
    >
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <motion.span 
              className="text-[#FFA500] inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              Elevate
            </motion.span>{" "}
            Your <br />
            Pickleball Game
          </h1>
          <p className="text-xl text-gray-300 mb-8 md:max-w-md">
            Experience premium courts and facilities designed for players of
            all levels. Join the fastest growing sport in the country.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Book a Court</span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            <motion.a
              href="#about"
              className="border border-white hover:border-[#FFA500] hover:text-[#FFA500] py-3 px-8 rounded-md transition-colors text-lg flex items-center gap-2 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More{" "}
              <ChevronDown 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-y-1" 
              />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 mr-10 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="/img/court.jpg"
            alt="Pickleball Court"
            className="rounded-lg shadow-2xl w-full hover:shadow-[0_0_30px_rgba(255,165,0,0.15)] transition-all duration-500"
          />
          <motion.div
            className="absolute -bottom-8 -right-8 bg-[#1A1721]/70 backdrop-blur-sm p-4 rounded-lg border-l-4 border-[#FFA500] hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="font-medium">Open 24/7</p>
            <p className="text-gray-300 text-sm">Book your preferred time</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FFA500]/10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-56 h-56 rounded-full bg-[#FFA500]/5"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="/img/ball.png"
          alt="Spinning Ball"
          className="absolute top-20 right-10 w-[200px] h-auto opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        />
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-[#FFA500] rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;