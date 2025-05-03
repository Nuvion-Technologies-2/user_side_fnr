import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = ({ activeSection, setIsBookingOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { label: "Home", href: "#home", section: "home" },
    { label: "About Us", href: "#about", section: "about" },
    { label: "Amenities", href: "#amenities", section: "amenities" },
    { label: "Pricing", href: "#pricing", section: "pricing" },
    // { label: "Contact Us", href: "/contact-us", section: "contactus" },
    { label: "Contact Us", href: "#contactus", section: "contactus" },
  ];

  return (
    <header className="fixed w-full py-3 z-30 transition-all duration-500 bg-[#1A1721]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl relative group">
          <img
            src="/img/fnr_logo.png"
            alt="Flick N Roll Pickleball"
            className="h-10 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <motion.div 
            className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FFA500]"
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatDelay: 5 
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.section}
              href={item.href}
              className={`font-medium transition-colors relative group ${
                activeSection === item.section
                  ? "text-[#FFA500]"
                  : "text-white hover:text-[#FFA500]"
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                activeSection === item.section 
                  ? "w-full bg-[#FFA500]" 
                  : "group-hover:w-full bg-[#FFA500]/50"
              }`} />
            </a>
          ))}
          <a
            href="#contactus"
            className="bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-2 px-6 rounded-md transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">Book Now</span>
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#1A1721] border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    activeSection === item.section ? "text-[#FFA500]" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contactus"
                className="bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-2 px-6 rounded-md transition-colors w-full"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;