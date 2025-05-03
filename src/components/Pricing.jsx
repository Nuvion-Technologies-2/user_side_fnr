// import React from "react";
// import { motion } from "framer-motion";
// import { Check, X, ArrowRight, Sparkles } from "lucide-react";

// const Pricing = ({ setIsBookingOpen }) => {
//   // Animation variants
//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   // Plan data
//   const plans = [
//     {
//       name: "Pay-Per-Play",
//       price: "₹299",
//       period: "/hour",
//       tagline: "Perfect for occasional players",
//       popular: false,
//       features: [
//         { included: true, text: "Court rental for 1 hour" },
//         { included: true, text: "Basic equipment included" },
//         { included: true, text: "Lounge access" },
//         { included: false, text: "No priority booking" },
//       ],
//       buttonText: "Book Now",
//       buttonStyle: "outline",
//     },
//     {
//       name: "Monthly Membership",
//       price: "₹3,999",
//       period: "/month",
//       tagline: "Best value for regular players",
//       popular: true,
//       features: [
//         { included: true, text: <><b>10 hours</b> of court time per month</> },
//         { included: true, text: "Premium equipment included" },
//         { included: true, text: "Priority booking (up to 1 week)" },
//         { included: true, text: "Access to monthly tournaments" },
//         { included: true, text: "1 free coaching session" },
//       ],
//       buttonText: "Sign Up Now",
//       buttonStyle: "filled",
//     },
//     {
//       name: "Annual Membership",
//       price: "₹35,999",
//       period: "/year",
//       tagline: "25% savings on monthly rate",
//       popular: false,
//       features: [
//         { included: true, text: <><b>15 hours</b> of court time per month</> },
//         { included: true, text: "All equipment included" },
//         { included: true, text: "Priority booking (up to 2 weeks)" },
//         { included: true, text: "Free entry to all tournaments" },
//         { included: true, text: "4 free coaching sessions" },
//       ],
//       buttonText: "Sign Up Now",
//       buttonStyle: "outline",
//     },
//   ];

//   return (
//     <section id="pricing" className="py-20 bg-[#1A1721]">
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="text-center mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">
//             Membership & <span className="text-[#FFA500] relative">
//               Pricing
//               <motion.span 
//                 className="absolute -bottom-1 left-0 h-1 bg-[#FFA500]/30"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "100%" }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//               />
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Flexible options to suit your playing style. From casual games to
//             serious training, we have a plan for you.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               className={`
//                 ${plan.popular 
//                   ? "bg-gradient-to-b from-[#2D2A3A] to-[#1A1721] border-[#FFA500]/30 transform scale-105 z-10 relative shadow-xl" 
//                   : "bg-[#2D2A3A] border-gray-700 shadow-lg"}
//                 rounded-lg overflow-hidden border transition-all duration-300
//                 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-[#FFA500]/40
//               `}
//               variants={fadeInUp}
//               whileHover={{ y: -10 }}
//             >
//               {plan.popular && (
//                 <div className="absolute top-0 left-0 right-0 bg-[#FFA500] text-center py-1 text-gray-900 font-bold text-sm">
//                   <Sparkles size={14} className="inline-block mr-1" />
//                   MOST POPULAR
//                 </div>
//               )}
//               <div className={`p-6 ${plan.popular ? "p-8" : ""}`}>
//                 <div className="text-center mb-6">
//                   <h3 className="text-xl font-bold text-white">{plan.name}</h3>
//                   <div className="mt-2">
//                     <span className="text-4xl font-bold">{plan.price}</span>
//                     <span className="text-gray-400">{plan.period}</span>
//                   </div>
//                   <p className="text-gray-400 mt-2">{plan.tagline}</p>
//                 </div>
//                 <ul className="space-y-3 mb-6">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-start">
//                       {feature.included ? (
//                         <Check
//                           size={20}
//                           className="text-[#FFA500] mr-2 mt-1 flex-shrink-0"
//                         />
//                       ) : (
//                         <X
//                           size={20}
//                           className="text-gray-600 mr-2 mt-1 flex-shrink-0"
//                         />
//                       )}
//                       <span className={`${!feature.included ? "text-gray-500" : ""}`}>
//                         {feature.text}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//                 <motion.button
//                   onClick={() => setIsBookingOpen(true)}
//                   className={`
//                     w-full font-bold py-3 px-4 rounded-md transition-all duration-300 
//                     ${plan.buttonStyle === "filled"
//                       ? "bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900"
//                       : "bg-transparent hover:bg-[#FFA500]/10 border border-[#FFA500] text-[#FFA500]"
//                     }
//                     relative overflow-hidden group
//                   `}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="relative z-10">{plan.buttonText}</span>
//                   {plan.buttonStyle === "filled" && (
//                     <motion.div 
//                       className="absolute inset-0 bg-white/20"
//                       initial={{ x: "-100%" }}
//                       whileHover={{ x: "100%" }}
//                       transition={{ duration: 0.6 }}
//                     />
//                   )}
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Additional Pricing Info */}
//         <motion.div
//           className="mt-12 bg-gradient-to-r from-[#2D2A3A]/30 to-[#1A1721]/60 rounded-lg p-6 border border-gray-800"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           whileHover={{ 
//             boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//             borderColor: "rgba(255,165,0,0.2)"
//           }}
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div>
//               <h4 className="text-xl font-bold mb-2">
//                 Need a custom solution?
//               </h4>
//               <p className="text-gray-400">
//                 Group bookings, corporate events, and private tournaments
//                 available
//               </p>
//             </div>
//             <motion.button
//               onClick={() => setIsBookingOpen(true)}
//               className="mt-4 md:mt-0 flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white 
//                         text-white font-medium py-2 px-4 rounded-md transition-all duration-300 relative overflow-hidden group"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <span className="relative z-10">Contact Us</span>
//               <ArrowRight 
//                 size={18} 
//                 className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
//               />
//               <motion.div 
//                 className="absolute inset-0 bg-white/10"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: "100%" }}
//                 transition={{ duration: 0.4 }}
//               />
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = ({ setIsBookingOpen }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Notification email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="pricing" className="py-20 bg-[#1A1721]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Membership & <span className="text-[#FFA500] relative">
              Pricing
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
            Flexible options to suit your playing style. From casual games to
            serious training, we have a plan for you.
          </p>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.div
            className="bg-gradient-to-b from-[#2D2A3A] to-[#1A1721] border border-[#FFA500]/20 rounded-lg p-8 shadow-xl relative overflow-hidden"
            whileHover={{ boxShadow: "0 15px 40px rgba(0,0,0,0.3)", borderColor: "rgba(255,165,0,0.4)" }}
          >
            {/* Background Elements */}
            <motion.div 
              className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-[#FFA500]/5 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div 
              className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#FFA500]/5 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <div className="text-center relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-[#FFA500]/10 rounded-full mb-6">
                <AlertCircle size={30} className="text-[#FFA500]" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Game Plans Incoming
              </h3>
              
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                We're currently finalizing our membership options to provide you with the best pickleball experience. Our team is working hard to create flexible plans that will cater to all skill levels and playing frequencies.
              </p>
              
              {/* Display Success Message or Form */}
              {isSubmitted ? (
                <motion.div 
                  className="bg-[#1A1721]/70 border border-[#FFA500]/20 text-gray-200 p-4 rounded-lg inline-flex items-center gap-2 mb-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle size={20} className="text-[#FFA500]" />
                  <span>Thank you! We'll notify you when pricing is available.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mb-6">
                  <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
                    <div className="relative flex-grow">
                      <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 bg-[#1A1721]/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-[#FFA500] text-white transition-all duration-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Notify Me</span>
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </div>
                </form>
              )}
              
              {/* <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
                <motion.button
                  onClick={() => setIsBookingOpen(true)}
                  className="flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white 
                              text-white font-medium py-2 px-5 rounded-md transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Book a Tour</span>
                  <ArrowRight 
                    size={18} 
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                  />
                  <motion.div 
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
                
                <motion.button
                  onClick={() => setIsBookingOpen(true)}
                  className="flex items-center gap-2 bg-[#2D2A3A] hover:bg-[#2D2A3A]/80 text-white
                              font-medium py-2 px-5 rounded-md transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Contact Sales</span>
                  <ArrowRight 
                    size={18} 
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </motion.button>
              </div> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Pricing Info */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-[#2D2A3A]/30 to-[#1A1721]/60 rounded-lg p-6 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            borderColor: "rgba(255,165,0,0.2)"
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">
                Need more information?
              </h4>
              <p className="text-gray-400">
                Let us know if you have questions about our upcoming membership options
              </p>
            </div>
            <Link to="/contact-us">
            <motion.button
              
              className="mt-4 md:mt-0 flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white 
                        text-white font-medium py-2 px-4 rounded-md transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight 
                size={18} 
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
              />
              <motion.div 
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;