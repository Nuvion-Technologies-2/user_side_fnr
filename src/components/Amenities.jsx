import React from "react";
import { motion } from "framer-motion";
import { Check, Users, CalendarDays, Clock } from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      title: "Professional Courts",
      image: "/img/court1.jpg",
      description: "Six regulation-sized courts with professional-grade surfaces, perfect lighting, and proper line markings.",
      features: [
        "Non-slip surfaces",
        "Professional lighting",
        "Weather-protected"
      ]
    },
    {
      title: "Equipment Rentals",
      image: "/img/tools.jpg",
      description: "Forgot your paddle? No problem. We offer high-quality equipment rentals for all players.",
      features: [
        "Premium paddles",
        "Tournament balls",
        "Athletic wear"
      ]
    },
    {
      title: "Player Lounge",
      image: "/img/setting.jpg",
      description: "Relax between games in our comfortable lounge with refreshments and viewing areas.",
      features: [
        "Comfortable seating",
        "Refreshment station",
        "Game viewing area"
      ]
    }
  ];

  const additionalFeatures = [
    { icon: <Users size={24} />, title: "Pro Coaching", description: "Professional instruction available" },
    { icon: <CalendarDays size={24} />, title: "Regular Tournaments", description: "Compete with other enthusiasts" },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>, 
      title: "Pro Shop", 
      description: "Latest gear and accessories" 
    },
    { icon: <Clock size={24} />, title: "24/7 Access", description: "Play whenever you want" },
  ];

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="amenities"
      className="py-20"
      style={{
        backgroundImage: "linear-gradient(to top left, #2D2A3A, #1A1721)",
        backgroundColor: "#2D2A3A",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Premium <span className="text-[#FFA500] relative">
              Amenities
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
            We offer more than just courts. Enjoy a complete pickleball
            experience with our first-class amenities.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1A1721] to-[#2D2A3A]/30 rounded-lg overflow-hidden
                         shadow-lg border border-gray-800 hover:border-[#FFA500]/30 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1721] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#FFA500] group-hover:text-[#FFA500] transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {amenity.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {amenity.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-sm text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <span className="text-[#FFA500] mr-2 flex-shrink-0">
                        <Check size={16} />
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Amenities */}
        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#2D2A3A]/50 to-[#1A1721]/50 rounded-lg p-6 text-center
                       border border-gray-800 hover:border-[#FFA500]/30 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="w-14 h-14 bg-[#FFA500]/20 rounded-full flex items-center justify-center mx-auto mb-4
                          hover:bg-[#FFA500]/30 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-[#FFA500]">{feature.icon}</span>
              </motion.div>
              <h4 className="font-bold mb-1 text-white">{feature.title}</h4>
              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;