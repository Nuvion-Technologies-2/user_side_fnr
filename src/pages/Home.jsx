// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   CalendarDays,
//   Clock,
//   Users,
//   Phone,
//   Mail,
//   MapPin,
//   ArrowRight,
//   Check,
//   Sparkles,
// } from "lucide-react";

// const Home = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isBookingOpen, setIsBookingOpen] = useState(false);
//   const [isSuccessOpen, setIsSuccessOpen] = useState(false);
//   const [bookingDetails, setBookingDetails] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     plan: "Pay-Per-Play",
//     hours: 1,
//     date: "",
//     time: "",
//     courts: 1,
//     players: 2,
//     startDate: "",
//     expiryDate: "",
//   });

//   // Scroll spy effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "about", "amenities", "pricing"];
//       const sectionElements = sections.map((id) => document.getElementById(id));

//       const scrollPosition = window.scrollY + 100;

//       for (let i = sectionElements.length - 1; i >= 0; i--) {
//         const section = sectionElements[i];
//         if (section && section.offsetTop <= scrollPosition) {
//           setActiveSection(sections[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Watson Assistant script
//   useEffect(() => {
//     // Check if the script is already loaded to prevent duplicates
//     if (document.getElementById("watson-assistant-script")) {
//       return;
//     }

//     window.watsonAssistantChatOptions = {
//       integrationID: "dbc5efd6-7930-44f3-a666-5c922e7af412",
//       region: "au-syd",
//       serviceInstanceID: "5ce544a6-f5fe-4683-b19b-6e4bf839a15a",
//       onLoad: async (instance) => {
//         await instance.render();
//       },
//     };

//     const script = document.createElement("script");
//     script.id = "watson-assistant-script";
//     script.src =
//       "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
//       (window.watsonAssistantChatOptions.clientVersion || "latest") +
//       "/WatsonAssistantChatEntry.js";
//     document.head.appendChild(script);

//     // Cleanup to remove the script when the component unmounts
//     return () => {
//       if (document.getElementById("watson-assistant-script")) {
//         document.head.removeChild(script);
//       }
//     };
//   }, []); // Empty dependency array ensures this runs only once

//   const handleBookingInputChange = (e) => {
//     const { name, value } = e.target;
//     setBookingDetails((prev) => {
//       const updatedDetails = { ...prev, [name]: value };
//       // Auto-calculate expiry date for memberships
//       if (
//         name === "startDate" &&
//         (prev.plan === "Monthly Membership" ||
//           prev.plan === "Annual Membership")
//       ) {
//         const start = new Date(value);
//         if (prev.plan === "Monthly Membership") {
//           start.setMonth(start.getMonth() + 1);
//         } else if (prev.plan === "Annual Membership") {
//           start.setFullYear(start.getFullYear() + 1);
//         }
//         updatedDetails.expiryDate = start.toISOString().split("T")[0];
//       }
//       return updatedDetails;
//     });
//   };

//   // Calculate total amount
//   const calculateTotalAmount = () => {
//     const { plan, hours, courts } = bookingDetails;
//     let basePrice = 0;
//     if (plan === "Pay-Per-Play") {
//       basePrice = 299 * hours * courts;
//     } else if (plan === "Monthly Membership") {
//       basePrice = 3999;
//     } else if (plan === "Annual Membership") {
//       basePrice = 35999;
//     }
//     const tax = basePrice * 0.18; // 18% GST
//     return basePrice + tax;
//   };

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     setIsBookingOpen(false);
//     setIsSuccessOpen(true);
//     setTimeout(() => {
//       setIsSuccessOpen(false);
//       setBookingDetails({
//         name: "",
//         email: "",
//         phone: "",
//         plan: "Pay-Per-Play",
//         hours: 1,
//         date: "",
//         time: "",
//         courts: 1,
//         players: 2,
//         startDate: "",
//         expiryDate: "",
//       });
//     }, 3000);
//   };

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <div className="relative min-h-screen font-bangers text-white">
//       {/* Header */}
//       <header className="fixed w-full py-3 z-30 transition-all duration-500 bg-[#1A1721]/80 backdrop-blur-sm">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <Link to="/" className="flex items-center text-2xl">
//             <img
//               src="/img/fnr_logo.png" // Updated path to ensure correct resolution
//               alt="Flick N Roll Pickleball"
//               className="h-10 md:h-14 w-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a
//               href="#home"
//               className={`font-medium transition-colors ${
//                 activeSection === "home"
//                   ? "text-[#FFA500]"
//                   : "text-white hover:text-[#FFA500]"
//               }`}
//             >
//               Home
//             </a>
//             <a
//               href="#about"
//               className={`font-medium transition-colors ${
//                 activeSection === "about"
//                   ? "text-[#FFA500]"
//                   : "text-white hover:text-[#FFA500]"
//               }`}
//             >
//               About Us
//             </a>
//             <a
//               href="#amenities"
//               className={`font-medium transition-colors ${
//                 activeSection === "amenities"
//                   ? "text-[#FFA500]"
//                   : "text-white hover:text-[#FFA500]"
//               }`}
//             >
//               Amenities
//             </a>
//             <a
//               href="#pricing"
//               className={`font-medium transition-colors ${
//                 activeSection === "pricing"
//                   ? "text-[#FFA500]"
//                   : "text-white hover:text-[#FFA500]"
//               }`}
//             >
//               Pricing
//             </a>
//             <a
//               href="/contact-us"
//               className={`font-medium transition-colors ${
//                 activeSection === "contactus"
//                   ? "text-[#FFA500]"
//                   : "text-white hover:text-[#FFA500]"
//               }`}
//             >
//               Contact Us
//             </a>
//             <button
//               onClick={() => setIsBookingOpen(true)}
//               className="bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-2 px-6 rounded-md transition-colors"
//             >
//               Book Now
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-[#1A1721] border-t border-gray-800"
//             >
//               <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//                 <a
//                   href="#home"
//                   className={`font-medium transition-colors ${
//                     activeSection === "home" ? "text-[#FFA500]" : "text-white"
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Home
//                 </a>
//                 <a
//                   board
//                   href="#about"
//                   className={`font-medium transition-colors ${
//                     activeSection === "about" ? "text-[#FFA500]" : "text-white"
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   About Us
//                 </a>
//                 <a
//                   href="#amenities"
//                   className={`font-medium transition-colors ${
//                     activeSection === "amenities"
//                       ? "text-[#FFA500]"
//                       : "text-white"
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Amenities
//                 </a>
//                 <a
//                   href="#pricing"
//                   className={`font-medium transition-colors ${
//                     activeSection === "pricing"
//                       ? "text-[#FFA500]"
//                       : "text-white"
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Pricing
//                 </a>
//                 <button
//                   onClick={() => {
//                     setIsBookingOpen(true);
//                     setIsMenuOpen(false);
//                   }}
//                   className="bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-2 px-6 rounded-md transition-colors w-full"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
//         style={{
//           backgroundImage:
//             "linear-gradient(to bottom right, #2D2A3A, #1A1721, #2D2A3A)",
//           backgroundColor: "#2D2A3A",
//         }}
//       >
//         <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
//           <motion.div
//             className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               <span className="text-[#FFA500]">Elevate</span> Your <br />
//               Pickleball Game
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 md:max-w-md">
//               Experience premium courts and facilities designed for players of
//               all levels. Join the fastest growing sport in the country.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//               <button
//                 onClick={() => setIsBookingOpen(true)}
//                 className="bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors text-lg"
//               >
//                 Book a Court
//               </button>
//               <a
//                 href="#about"
//                 className="border border-white hover:border-[#FFA500] hover:text-[#FFA500] py-3 px-8 rounded-md transition-colors text-lg flex items-center gap-2"
//               >
//                 Learn More <ChevronDown size={18} />
//               </a>
//             </div>
//           </motion.div>

//           <motion.div
//             className="md:w-1/2 mr-10 relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <img
//               src="/img/court.jpg" // Updated path
//               alt="Pickleball Court"
//               className="rounded-lg shadow-2xl w-full"
//             />
//             <motion.div
//               className="absolute -bottom-8 -right-8 bg-[#1A1721]/70 backdrop-blur-sm p-4 rounded-lg border-l-4 border-[#FFA500] hidden md:block"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               <p className="font-medium">Open 24/7</p>
//               <p className="text-gray-300 text-sm">Book your preferred time</p>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden z-0">
//           <motion.div
//             className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FFA500]/10"
//             animate={{
//               scale: [1, 1.2, 1],
//               x: [0, 30, 0],
//               y: [0, -30, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 10,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.div
//             className="absolute bottom-40 right-20 w-56 h-56 rounded-full bg-[#FFA500]/5"
//             animate={{
//               scale: [1, 1.1, 1],
//               x: [0, -20, 0],
//               y: [0, 20, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 15,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.img
//             src="/img/ball.png" // Updated path
//             alt="Spinning Ball"
//             className="absolute top-20 right-10 w-[200px] h-auto opacity-20"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 15, ease: "linear", repeat: Infinity }}
//           />
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="py-20 bg-[#1A1721]">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl md:text-5xl font-bold mb-4">
//               About <span className="text-[#FFA500]">Flick N Roll</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               We're passionate about pickleball and committed to providing the
//               best facilities for players of all levels.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-1 gap-12 items-center">
//             <motion.div
//               className="order-2 md:order-1"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">
//                 Our Story
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 Founded in 2024, Flick N Roll was born from a passion for
//                 pickleball and a vision to create a premier destination for
//                 players in Gandhinagar. Our state-of-the-art facility boasts
//                 professional-grade courts designed to enhance your playing
//                 experience.
//               </p>
//               <p className="text-gray-300 mb-6">
//                 Whether you're a seasoned pro or just starting out, our courts
//                 provide the perfect environment to improve your skills, compete
//                 with friends, or just have fun.
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//                 <div className="bg-[#2D2A3A]/50 p-4 rounded-lg">
//                   <h4 className="font-bold text-[#FFA500] text-lg mb-2">
//                     6 Professional Courts
//                   </h4>
//                   <p className="text-gray-400 text-sm">
//                     Regulation-sized courts with pro-grade surfaces
//                   </p>
//                 </div>
//                 <div className="bg-[#2D2A3A]/50 p-4 rounded-lg">
//                   <h4 className="font-bold text-[#FFA500] text-lg mb-2">
//                     Open 24/7
//                   </h4>
//                   <p className="text-gray-400 text-sm">
//                     Play whenever works best for your schedule
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//                   <div className="bg-[#2D2A3A]/50 p-4 rounded-lg">
//                     <h4 className="font-bold text-[#FFA500] text-lg mb-2">
//                       1000+
//                     </h4>
//                     <p className="text-gray-400 text-sm">Happy Players</p>
//                   </div>
//                   <div className="bg-[#2D2A3A]/50 p-4 rounded-lg">
//                     <h4 className="font-bold text-[#FFA500] text-lg mb-2">
//                       500+
//                     </h4>
//                     <p className="text-gray-400 text-sm">Weekly Games</p>
//                   </div>
//                   <div className="bg-[#2D2A3A]/50 p-4 rounded-lg">
//                     <h4 className="font-bold text-[#FFA500] text-lg mb-2">
//                       24/7
//                     </h4>
//                     <p className="text-gray-400 text-sm">Availability</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Amenities Section */}
//       <section
//         id="amenities"
//         className="py-20"
//         style={{
//           backgroundImage: "linear-gradient(to top left, #2D2A3A, #1A1721)",
//           backgroundColor: "#2D2A3A",
//         }}
//       >
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl md:text-5xl font-bold mb-4">
//               Premium <span className="text-[#FFA500]">Amenities</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               We offer more than just courts. Enjoy a complete pickleball
//               experience with our first-class amenities.
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid md:grid-cols-3 gap-8"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {/* Amenity Card 1 */}
//             <motion.div
//               className="bg-[#1A1721] rounded-lg overflow-hidden shadow-lg"
//               variants={fadeInUp}
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src="/img/court1.jpg" // Updated path
//                   alt="Professional Courts"
//                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-[#FFA500]">
//                   Professional Courts
//                 </h3>
//                 <p className="text-gray-300">
//                   Six regulation-sized courts with professional-grade surfaces,
//                   perfect lighting, and proper line markings.
//                 </p>
//                 <ul className="mt-4 space-y-2">
//                   <li className="flex items-center text-sm text-gray-400">
//                     <Check size={16} className="text-[#FFA500] mr-2" /> Non-slip
//                     surfaces
//                   </li>
//                   <li className="flex items-center text-sm text-gray-400">
//                     <Check size={16} className="text-[#FFA500] mr-2" />
//                     Professional lighting
//                   </li>
//                   <li className="flex items-center text-sm text-gray-400">
//                     <Check size={16} className="text-[#FFA500] mr-2" />
//                     Weather-protected
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>

//             {/* Amenity Card 2 */}
//             <motion.div
//               className="bg-[#1A1721] rounded-lg overflow-hidden shadow-lg"
//               variants={fadeInUp}
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src="/img/tools.jpg" // Updated path
//                   alt="Equipment Rentals"
//                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-[#FFA500]">
//                   Equipment Rentals
//                 </h3>
//                 <p className="text-gray-300">
//                   Forgot your paddle? No problem. We offer high-quality
//                   equipment rentals for all players.
//                 </p>
//                 <ul className="mt-4 space-y-2">
//                   <li className="flex items-center text-sm text-gray-400">
//                     <Check size={16} className="text-[#FFA500] mr-2" /> Premium
//                     paddles
//                   </li>
//                   <li className="flex items-center text-sm text-gray-400">
//                     <Check size={16} className="text-[#FFA500] mr-2" />
//                     Tournament balls
//                   </li>
//                   <li className="flex items-center text-sm text-gray-400">
//                     <Check size={16} className="text-[#FFA500] mr-2" /> Athletic
//                     wear
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>

//             {/* Amenity Card 3 */}
//             <motion.div
//               className="bg-[#1A1721] rounded-lg overflow-hidden shadow-lg"
//               variants={fadeInUp}
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src="/img/setting.jpg" // Updated path
//                   alt="Player Lounge"
//                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-[#FFA500]">
//                   Player Lounge
//                 </h3>
//                 <p className="text-gray-300">
//                   Relax between games in our comfortable lounge with
//                   refreshments and viewing areas.
//                 </p>
//                 <ul className="mt-4 space-y-2">
//                   <li className="flex items-center text-sm text-gray-400">
//                     <Check size={16} className="text-[#FFA500] mr-2" />
//                     Comfortable seating
//                   </li>
//                   <li className="flex items-center text-sm text-gray-400">
//                     <Check size={16} className="text-[#FFA500] mr-2" />
//                     Refreshment station
//                   </li>
//                   <li className="flex items-center text-sm text-gray-400">
//                     <Check size={16} className="text-[#FFA500] mr-2" /> Game
//                     viewing area
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Additional Amenities */}
//           <motion.div
//             className="mt-12 grid md:grid-cols-4 gap-4"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//           >
//             <motion.div
//               className="bg-[#2D2A3A]/50 rounded-lg p-4 text-center"
//               variants={fadeInUp}
//             >
//               <div className="w-12 h-12 bg-[#FFA500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <Users size={24} className="text-[#FFA500]" />
//               </div>
//               <h4 className="font-bold mb-1">Pro Coaching</h4>
//               <p className="text-sm text-gray-400">
//                 Professional instruction available
//               </p>
//             </motion.div>

//             <motion.div
//               className="bg-[#2D2A3A]/50 rounded-lg p-4 text-center"
//               variants={fadeInUp}
//             >
//               <div className="w-12 h-12 bg-[#FFA500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <CalendarDays size={24} className="text-[#FFA500]" />
//               </div>
//               <h4 className="font-bold mb-1">Regular Tournaments</h4>
//               <p className="text-sm text-gray-400">
//                 Compete with other enthusiasts
//               </p>
//             </motion.div>

//             <motion.div
//               className="bg-[#2D2A3A]/50 rounded-lg p-4 text-center"
//               variants={fadeInUp}
//             >
//               <div className="w-12 h-12 bg-[#FFA500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-[#FFA500]"
//                 >
//                   <circle cx="12" cy="12" r="10" />
//                   <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
//                   <path d="M2 12h20" />
//                 </svg>
//               </div>
//               <h4 className="font-bold mb-1">Pro Shop</h4>
//               <p className="text-sm text-gray-400">
//                 Latest gear and accessories
//               </p>
//             </motion.div>

//             <motion.div
//               className="bg-[#2D2A3A]/50 rounded-lg p-4 text-center"
//               variants={fadeInUp}
//             >
//               <div className="w-12 h-12 bg-[#FFA500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <Clock size={24} className="text-[#FFA500]" />
//               </div>
//               <h4 className="font-bold mb-1">24/7 Access</h4>
//               <p className="text-sm text-gray-400">Play whenever you want</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-20 bg-[#1A1721]">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h2 className="text-3xl md:text-5xl font-bold mb-4">
//               Membership & <span className="text-[#FFA500]">Pricing</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Flexible options to suit your playing style. From casual games to
//               serious training, we have a plan for you.
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid md:grid-cols-3 gap-8"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {/* Pay-Per-Play Card */}
//             <motion.div
//               className="bg-[#2D2A3A] rounded-lg overflow-hidden shadow-lg border border-gray-700"
//               variants={fadeInUp}
//             >
//               Historic
//               <div className="p-6">
//                 <div className="text-center mb-6">
//                   <h3 className="text-xl font-bold text-white">Pay-Per-Play</h3>
//                   <div className="mt-2">
//                     <span className="text-4xl font-bold">₹299</span>
//                     <span className="text-gray-400">/hour</span>
//                   </div>
//                   <p className="text-gray-400 mt-2">
//                     Perfect for occasional players
//                   </p>
//                 </div>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>Court rental for 1 hour</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>Basic equipment included</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>Lounge access</span>
//                   </li>
//                   <li className="flex items-start text-gray-500">
//                     <X
//                       size={20}
//                       className="text-gray-600 mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>No priority booking</span>
//                   </li>
//                 </ul>
//                 <button
//                   onClick={() => setIsBookingOpen(true)}
//                   className="w-full bg-transparent hover:bg-[#FFA500]/10 border border-[#FFA500] text-[#FFA500] font-bold py-2 px-4 rounded-md transition-colors"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </motion.div>

//             {/* Monthly Membership Card */}
//             <motion.div
//               className="bg-gradient-to-b from-[#2D2A3A] to-[#1A1721] rounded-lg overflow-hidden shadow-xl border border-[#FFA500]/30 transform scale-105 z-10 relative"
//               variants={fadeInUp}
//             >
//               <div className="absolute top-0 left-0 right-0 bg-[#FFA500] text-center py-1 text-gray-900 font-bold text-sm">
//                 MOST POPULAR
//               </div>
//               <div className="p-8">
//                 <div className="text-center mb-6">
//                   <h3 className="text-xl font-bold text-white">
//                     Monthly Membership
//                   </h3>
//                   <div className="mt-2">
//                     <span className="text-4xl font-bold">₹3,999</span>
//                     <span className="text-gray-400">/month</span>
//                   </div>
//                   <p className="text-gray-400 mt-2">
//                     Best value for regular players
//                   </p>
//                 </div>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>
//                       <b>10 hours</b> of court time per month
//                     </span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>Premium equipment included</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>Priority booking (up to 1 week)</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>Access to monthly tournaments</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>1 free coaching session</span>
//                   </li>
//                 </ul>
//                 <button
//                   onClick={() => setIsBookingOpen(true)}
//                   className="w-full bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-3 px-4 rounded-md transition-colors"
//                 >
//                   Sign Up Now
//                 </button>
//               </div>
//             </motion.div>

//             {/* Annual Membership Card */}
//             <motion.div
//               className="bg-[#2D2A3A] rounded-lg overflow-hidden shadow-lg border border-gray-700"
//               variants={fadeInUp}
//             >
//               <div className="p-6">
//                 <div className="text-center mb-6">
//                   <h3 className="text-xl font-bold text-white">
//                     Annual Membership
//                   </h3>
//                   <div className="mt-2">
//                     <span className="text-4xl font-bold">₹35,999</span>
//                     <span className="text-gray-400">/year</span>
//                   </div>
//                   <p className="text-gray-400 mt-2">
//                     25% savings on monthly rate
//                   </p>
//                 </div>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>
//                       <b>15 hours</b> of court time per month
//                     </span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>All equipment included</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>Priority booking (up to 2 weeks)</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>Free entry to all tournaments</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check
//                       size={20}
//                       className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                     />
//                     <span>4 free coaching sessions</span>
//                   </li>
//                 </ul>
//                 <button
//                   onClick={() => setIsBookingOpen(true)}
//                   className="w-full bg-transparent hover:bg-[#FFA500]/10 border border-[#FFA500] text-[#FFA500] font-bold py-2 px-4 rounded-md transition-colors"
//                 >
//                   Sign Up Now
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Additional Pricing Info */}
//           <motion.div
//             className="mt-12 bg-[#2D2A3A]/30 rounded-lg p-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div>
//                 <h4 className="text-xl font-bold mb-2">
//                   Need a custom solution?
//                 </h4>
//                 <p className="text-gray-400">
//                   Group bookings, corporate events, and private tournaments
//                   available
//                 </p>
//               </div>
//               <button
//                 onClick={() => setIsBookingOpen(true)}
//                 className="mt-4 md:mt-0 flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white text-white font-medium py-2 px-4 rounded-md transition-colors"
//               >
//                 Contact Us <ArrowRight size={18} />
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact & Map Section */}
//       <section className="py-20 bg-gradient-to-b from-[#2D2A3A] to-[#1A1721]">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row gap-8">
//             <motion.div
//               className="md:w-1/3"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl font-bold mb-6">
//                 Find <span className="text-[#FFA500]">Us</span>
//               </h2>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <MapPin
//                     size={20}
//                     className="text-[#FFA500] mr-3 mt-1 flex-shrink-0"
//                   />
//                   <div>
//                     <p className="font-medium">FLICK 'N ROLL</p>
//                     <p className="text-gray-400">
//                       Chh, 3, Nr. Parinam Circle, Gandhinagar, Gujarat 382009
//                     </p>
//                   </div>
//                 </li>
//                 <li className="flex items-center">
//                   <Phone
//                     size={20}
//                     className="text-[#FFA500] mr-3 flex-shrink-0"
//                   />
//                   <p>+91 9537531054</p>
//                 </li>
//                 <li className="flex items-center">
//                   <Mail
//                     size={20}
//                     className="text-[#FFA500] mr-3 flex-shrink-0"
//                   />
//                   <p>info@flicknroll.com</p>
//                 </li>
//                 <li className="pt-4">
//                   <p className="font-medium text-[#FFA500]">Hours</p>
//                   <p className="text-gray-400">Open 24/7</p>
//                 </li>
//               </ul>

//               <div className="mt-8">
//                 <a
//                   href="https://www.instagram.com/flicknroll/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-gray-300 hover:text-[#FFA500] transition-colors mr-4"
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </motion.div>

//             <motion.div
//               className="md:w-2/3"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <div className="h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg border border-gray-700">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9586364980028!2d72.65421789999999!3d23.208178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b595bf5c823%3A0x365c81833ae6de33!2z8J2XmfCdl5_wnZec8J2XlvCdl54gJ_Cdl6Eg8J2XpfCdl6LwnZef8J2XnyB8IPCdl5XwnZey8J2YgPCdmIEg8J2Xo_Cdl7bwnZew8J2XuPCdl7nwnZey8J2Xr_Cdl67wnZe58J2XuSDwnZec8J2XuyDwnZea8J2XrvCdl7vwnZex8J2XtfCdl7bwnZe78J2XrvCdl7TwnZeu8J2Xvw!5e0!3m2!1sen!2sin!4v1746098926197!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="FLICK 'N ROLL Location"
//                   className="filter grayscale hover:grayscale-0 transition-all duration-300"
//                 ></iframe>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 bg-[#1A1721]">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between mb-8">
//             <div className="mb-6 md:mb-0">
//               <Link to="/" className="inline-block">
//                 <img
//                   src="/img/fnr_logo.png" // Updated path
//                   alt="Flick N Roll Pickleball"
//                   className="h-12 w-auto"
//                 />
//               </Link>
//               <p className="text-gray-400 mt-4 max-w-xs">
//                 Flick N Roll offers premium pickleball facilities for players of
//                 all skill levels in Gandhinagar.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//               <div>
//                 <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     <a
//                       href="#home"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#about"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#amenities"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Amenities
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#pricing"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Pricing
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/contact-us"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Contact Us
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="font-bold text-lg mb-4">Policies</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     <Link
//                       to="/privacy-policy"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Privacy Policy
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/terms-and-conditions"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Terms & Conditions
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/cancellation"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Cancellation
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/shipping-delivery"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Shipping & Delivery
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="font-bold text-lg mb-4">Contact</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     <a
//                       href="tel:+919537531054"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       +91 9537531054
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="mailto:info@flicknroll.com"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       info@flicknroll.com
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-500 text-sm">
//               © {new Date().getFullYear()} Flick N Roll Pickleball. All rights
//               reserved.
//             </p>
//             <div className="mt-4 md:mt-0">
//               <a
//                 href="https://www.instagram.com/flicknroll/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block text-gray-500 hover:text-[#FFA500] transition-colors"
//               >
//                 <svg
//                   className="h-5 w-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504. magically207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Booking Modal */}
//       <AnimatePresence>
//         {isBookingOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="bg-gradient-to-br from-[#2D2A3A] to-[#1A1721] rounded-xl w-full max-w-4xl max-h-screen p-4 shadow-xl border border-[#FFA500]/20 relative"
//             >
//               <div className="absolute top-0 left-0 w-full h-1 bg-[#FFA500]" />
//               <motion.div
//                 className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-[#FFA500]/10"
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />

//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-2xl font-bold text-[#FFA500]">
//                   Book Your Experience
//                 </h3>
//                 <button
//                   onClick={() => {
//                     setIsBookingOpen(false);
//                     setBookingDetails({
//                       name: "",
//                       email: "",
//                       phone: "",
//                       plan: "Pay-Per-Play",
//                       hours: 1,
//                       date: "",
//                       time: "",
//                       courts: 1,
//                       players: 2,
//                       startDate: "",
//                       expiryDate: "",
//                     });
//                   }}
//                   className="text-gray-400 hover:text-white"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               <form
//                 onSubmit={handleBookingSubmit}
//                 className="space-y-4 text-sm"
//               >
//                 {/* Personal Details */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-gray-300 mb-1 font-medium"
//                     >
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={bookingDetails.name}
//                       onChange={handleBookingInputChange}
//                       className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-gray-300 mb-1 font-medium"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={bookingDetails.email}
//                       onChange={handleBookingInputChange}
//                       className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="phone"
//                       className="block text-gray-300 mb-1 font-medium"
//                     >
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={bookingDetails.phone}
//                       onChange={handleBookingInputChange}
//                       className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Plan Selection */}
//                 <div>
//                   <label
//                     htmlFor="plan"
//                     className="block text-gray-300 mb-1 font-medium"
//                   >
//                     Select Plan
//                   </label>
//                   <select
//                     id="plan"
//                     name="plan"
//                     value={bookingDetails.plan}
//                     onChange={handleBookingInputChange}
//                     className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                     required
//                   >
//                     <option value="Pay-Per-Play">
//                       Pay-Per-Play (₹299/hour)
//                     </option>
//                     <option value="Monthly Membership">
//                       Monthly Membership (₹3,999/month)
//                     </option>
//                     <option value="Annual Membership">
//                       Annual Membership (₹35,999/year)
//                     </option>
//                   </select>
//                 </div>

//                 {/* Conditional Fields */}
//                 {bookingDetails.plan === "Pay-Per-Play" && (
//                   <>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//                       <div>
//                         <label
//                           htmlFor="hours"
//                           className="block text-gray-300 mb-1 font-medium"
//                         >
//                           Hours
//                         </label>
//                         <select
//                           id="hours"
//                           name="hours"
//                           value={bookingDetails.hours}
//                           onChange={handleBookingInputChange}
//                           className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                           required
//                         >
//                           {[1, 2, 3, 4].map((h) => (
//                             <option key={h} value={h}>
//                               {h} Hour{h > 1 ? "s" : ""}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="date"
//                           className="block text-gray-300 mb-1 font-medium"
//                         >
//                           Select Date
//                         </label>
//                         <input
//                           type="date"
//                           id="date"
//                           name="date"
//                           value={bookingDetails.date}
//                           onChange={handleBookingInputChange}
//                           className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="time"
//                           className="block text-gray-300 mb-1 font-medium"
//                         >
//                           Select Time
//                         </label>
//                         <input
//                           type="time"
//                           id="time"
//                           name="time"
//                           value={bookingDetails.time}
//                           onChange={handleBookingInputChange}
//                           className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//                       <div>
//                         <label
//                           htmlFor="courts"
//                           className="block text-gray-300 mb-1 font-medium"
//                         >
//                           Courts
//                         </label>
//                         <select
//                           id="courts"
//                           name="courts"
//                           value={bookingDetails.courts}
//                           onChange={handleBookingInputChange}
//                           className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                           required
//                         >
//                           {[1, 2, 3, 4].map((c) => (
//                             <option key={c} value={c}>
//                               {c} Court{c > 1 ? "s" : ""}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="players"
//                           className="block text-gray-300 mb-1 font-medium"
//                         >
//                           Players
//                         </label>
//                         <select
//                           id="players"
//                           name="players"
//                           value={bookingDetails.players}
//                           onChange={handleBookingInputChange}
//                           className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                           required
//                         >
//                           {[2, 4, 6, 8].map((p) => (
//                             <option key={p} value={p}>
//                               {p} Player{p > 1 ? "s" : ""}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="h-full flex items-center justify-center text-gray-500">
//                         Reserved
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {["Monthly Membership", "Annual Membership"].includes(
//                   bookingDetails.plan
//                 ) && (
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//                     <div>
//                       <label
//                         htmlFor="startDate"
//                         className="block text-gray-300 mb-1 font-medium"
//                       >
//                         Start Date
//                       </label>
//                       <input
//                         type="date"
//                         id="startDate"
//                         name="startDate"
//                         value={bookingDetails.startDate}
//                         onChange={handleBookingInputChange}
//                         className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="expiryDate"
//                         className="block text-gray-300 mb-1 font-medium"
//                       >
//                         Expiry Date
//                       </label>
//                       <input
//                         type="date"
//                         id="expiryDate"
//                         name="expiryDate"
//                         value={bookingDetails.expiryDate}
//                         className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white"
//                         disabled
//                       />
//                     </div>
//                     <div className="h-full flex items-center justify-center text-gray-500">
//                       Reserved
//                     </div>
//                   </div>
//                 )}

//                 {/* Updated Summary with price calculation */}
//                 <div className="bg-[#FFA500]/10 p-4 rounded-lg text-sm">
//                   <h4 className="text-base font-bold text-[#FFA500] mb-2">
//                     Payment Summary
//                   </h4>
//                   <div className="space-y-1 text-gray-300">
//                     <div className="flex justify-between">
//                       <span>Selected Plan:</span>
//                       <span>{bookingDetails.plan}</span>
//                     </div>
//                     {bookingDetails.plan === "Pay-Per-Play" && (
//                       <>
//                         <div className="flex justify-between">
//                           <span>Hours:</span>
//                           <span>{bookingDetails.hours}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>Courts:</span>
//                           <span>{bookingDetails.courts}</span>
//                         </div>
//                       </>
//                     )}
//                     {["Monthly Membership", "Annual Membership"].includes(
//                       bookingDetails.plan
//                     ) && (
//                       <>
//                         <div className="flex justify-between">
//                           <span>Start Date:</span>
//                           <span>
//                             {bookingDetails.startDate || "Not selected"}
//                           </span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>Expiry Date:</span>
//                           <span>
//                             {bookingDetails.expiryDate || "Not applicable"}
//                           </span>
//                         </div>
//                       </>
//                     )}

//                     {(() => {
//                       // Calculate prices based on plan
//                       const { plan, hours, courts } = bookingDetails;
//                       let basePrice = 0;
//                       if (plan === "Pay-Per-Play") {
//                         basePrice = 299 * parseInt(hours) * parseInt(courts);
//                       } else if (plan === "Monthly Membership") {
//                         basePrice = 3999;
//                       } else if (plan === "Annual Membership") {
//                         basePrice = 35999;
//                       }

//                       const amount_before_tax = basePrice - (basePrice * 0.18);
//                       const tax = basePrice * 0.18;
//                       const total = amount_before_tax + tax;

//                       return (
//                         <>
//                           <div className="flex justify-between font-medium text-white">
//                             <span>Base Price:</span>
//                             <span>₹{amount_before_tax.toLocaleString("en-IN")}</span>
//                           </div>
//                           <div className="flex justify-between font-medium text-white">
//                             <span>GST (18%):</span>
//                             <span>
//                               ₹
//                               {tax.toLocaleString("en-IN", {
//                                 maximumFractionDigits: 2,
//                               })}
//                             </span>
//                           </div>
//                           <div className="flex justify-between font-bold text-[#FFA500] border-t border-gray-700 pt-1 mt-1">
//                             <span>Total:</span>
//                             <span>
//                               ₹
//                               {total.toLocaleString("en-IN")}
//                             </span>
//                           </div>
//                         </>
//                       );
//                     })()}
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
//                 >
//                   Confirm Booking <Sparkles size={18} />
//                 </button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Success Modal */}
//       <AnimatePresence>
//         {isSuccessOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//           >
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0, rotate: 180 }}
//               transition={{ type: "spring", stiffness: 200, damping: 20 }}
//               className="bg-gradient-to-br from-[#2D2A3A] to-[#1A1721] rounded-xl w-full max-w-md p-8 shadow-2xl border border-[#FFA500]/20 text-center"
//             >
//               <motion.div
//                 className="mb-6"
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <Check size={64} className="text-[#FFA500] mx-auto" />
//               </motion.div>
//               <motion.h3
//                 className="text-2xl font-bold text-[#FFA500] mb-4"
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 Booking Confirmed!
//               </motion.h3>
//               <motion.p
//                 className="text-gray-300 mb-6"
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 We've received your booking request. You'll receive a
//                 confirmation email soon.
//               </motion.p>
//               <motion.div
//                 className="w-16 h-16 mx-auto bg-[#FFA500]/20 rounded-full flex items-center justify-center"
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <Sparkles size={32} className="text-[#FFA500]" />
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Spinning Ball - on top of everything */}
//       <div className="absolute inset-0 overflow-hidden z-[5] pointer-events-none">
//         <motion.img
//           src="/img/ball.png" // Updated path
//           alt="Spinning Ball"
//           className="absolute bottom-[-300px] right-[-400px] w-[900px] md:w-[1200px] h-auto opacity-10 object-cover drop desc drop-shadow-[0_0_50px_rgba(0,0,0,0.3)]"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, ease: "linear", repeat: Infinity }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import SuccessModal from "../components/SuccessModal";

// Hooks
import useScrollSpy from "../hooks/useScrollSpy";

const Home = () => {
  const activeSection = useScrollSpy();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Pay-Per-Play",
    hours: 1,
    date: "",
    time: "",
    courts: 1,
    players: 2,
    startDate: "",
    expiryDate: "",
  });

  // Watson Assistant script
  useEffect(() => {
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

    return () => {
      if (document.getElementById("watson-assistant-script")) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleBookingInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => {
      const updatedDetails = { ...prev, [name]: value };
      
      if (
        name === "startDate" &&
        (prev.plan === "Monthly Membership" ||
          prev.plan === "Annual Membership")
      ) {
        const start = new Date(value);
        if (prev.plan === "Monthly Membership") {
          start.setMonth(start.getMonth() + 1);
        } else if (prev.plan === "Annual Membership") {
          start.setFullYear(start.getFullYear() + 1);
        }
        updatedDetails.expiryDate = start.toISOString().split("T")[0];
      }
      return updatedDetails;
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsBookingOpen(false);
    setIsSuccessOpen(true);
    setTimeout(() => {
      setIsSuccessOpen(false);
      setBookingDetails({
        name: "",
        email: "",
        phone: "",
        plan: "Pay-Per-Play",
        hours: 1,
        date: "",
        time: "",
        courts: 1,
        players: 2,
        startDate: "",
        expiryDate: "",
      });
    }, 3000);
  };

  return (
    <div className="relative min-h-screen font-bangers text-white">
      <Header 
        activeSection={activeSection} 
        setIsBookingOpen={setIsBookingOpen} 
      />
      
      <main>
        <Hero setIsBookingOpen={setIsBookingOpen} />
        <About />
        <Amenities />
        <Pricing setIsBookingOpen={setIsBookingOpen} />
        <Contact />
      </main>
      
      <Footer />
      
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal
            isOpen={isBookingOpen}
            setIsOpen={setIsBookingOpen}
            bookingDetails={bookingDetails}
            handleInputChange={handleBookingInputChange}
            handleSubmit={handleBookingSubmit}
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isSuccessOpen && (
          <SuccessModal isOpen={isSuccessOpen} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;