import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { value: "1000+", label: "Happy Players" },
    { value: "500+", label: "Weekly Games" },
    { value: "24/7", label: "Availability" },
  ];

  const features = [
    { title: "6 Professional Courts", description: "Regulation-sized courts with pro-grade surfaces" },
    { title: "Open 24/7", description: "Play whenever works best for your schedule" },
  ];

  return (
    <section id="about" className="py-20 bg-[#1A1721]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-[#FFA500] relative">
              Flick N Roll
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-[#FFA500]/30"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're passionate about pickleball and committed to providing the
            best facilities for players of all levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
              Our Story
            </h3>
            <p className="text-gray-300 mb-6">
              Founded in 2024, Flick N Roll was born from a passion for
              pickleball and a vision to create a premier destination for
              players in Gandhinagar. Our state-of-the-art facility boasts
              professional-grade courts designed to enhance your playing
              experience.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you're a seasoned pro or just starting out, our courts
              provide the perfect environment to improve your skills, compete
              with friends, or just have fun.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#2D2A3A]/50 p-6 rounded-lg border-l-2 border-[#FFA500]/50 
                            hover:border-[#FFA500] hover:bg-[#2D2A3A]/70 transition-all duration-300"
                  whileHover={{ y: -5, x: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h4 className="font-bold text-[#FFA500] text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gradient-to-br from-[#2D2A3A]/70 to-[#1A1721]/70 p-6 rounded-lg
                              border border-gray-800 hover:border-[#FFA500]/30 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="font-bold text-[#FFA500] text-2xl mb-1 relative">
                      {stat.value}
                      <motion.div 
                        className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-[#FFA500]/10"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 1
                        }}
                      />
                    </h4>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;