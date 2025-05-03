// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowLeft } from 'lucide-react';

// const Cancellation = () => {
//   return (
//     <>
//       <motion.div
//         className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden font-bangers text-white"
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
//         }}
//         transition={{
//           duration: 10,
//           ease: "easeInOut",
//           repeat: Infinity
//         }}
//         style={{
//           backgroundColor: "#2D2A3A",
//           backgroundImage: "linear-gradient(to bottom right, #2D2A3A, #1A1721, #2D2A3A)",
//           backgroundSize: "400% 400%",
//         }}
//       >
//         {/* Header - Updated to match PrivacyPolicy.jsx */}
//         <header className="fixed w-full py-3 z-30 transition-all duration-500 bg-[#1A1721]/80 backdrop-blur-sm">
//           <div className="container mx-auto px-4 flex justify-between items-center">
//             <Link to="/" className="flex items-center text-2xl">
//               <img
//                 src="/img/fnr_logo.png"
//                 alt="Flick N Roll Pickleball"
//                 className="h-10 md:h-14 w-auto"
//               />
//             </Link>
            
//             {/* Back to Home Button */}
//             <Link
//               to="/"
//               className="flex items-center gap-2 text-gray-300 hover:text-[#FFA500] transition-colors"
//             >
//               <ArrowLeft size={20} />
//               <span className="hidden md:inline">Back to Home</span>
//             </Link>
//           </div>
//         </header>

//         {/* Content - Updated padding for fixed header */}
//         <div className="container mx-auto px-4 py-24 flex-grow z-10">
//           <div className="bg-[#1A1721]/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10 max-w-4xl mx-auto text-white">
//             <h1 className="text-3xl md:text-4xl text-[#FFA500] mb-6">Cancellation Policy</h1>
            
//             <div className="space-y-6 font-sans text-gray-300">
//               <p className="italic">Last Updated: April 30, 2025</p>
              
//               <h2 className="text-xl md:text-2xl text-[#FFA500] mt-6 mb-2">Court Booking Cancellations</h2>
//               <p>We understand that plans change. Here's our policy regarding court booking cancellations:</p>
              
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Cancellations made 24+ hours in advance: Full refund</li>
//                 <li>Cancellations made 12-24 hours in advance: 75% refund</li>
//                 <li>Cancellations made 6-12 hours in advance: 50% refund</li>
//                 <li>Cancellations made less than 6 hours in advance: No refund</li>
//               </ul>
              
//               <h2 className="text-xl md:text-2xl text-[#FFA500] mt-6 mb-2">Membership Cancellations</h2>
//               <p>Monthly memberships can be canceled at any time, but refunds are not provided for the current billing period. Your membership will remain active until the end of the current billing cycle.</p>
//               <p>Annual memberships may be canceled with a partial refund according to the following schedule:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Cancellation within first 30 days: 75% refund</li>
//                 <li>Cancellation within 31-90 days: 50% refund</li>
//                 <li>Cancellation after 90 days: No refund</li>
//               </ul>
              
//               <h2 className="text-xl md:text-2xl text-[#FFA500] mt-6 mb-2">Event Cancellations</h2>
//               <p>Refund policies for special events, tournaments, and clinics are specified on the respective event registration pages. Generally, event cancellations follow the same timeline as court bookings.</p>
              
//               <h2 className="text-xl md:text-2xl text-[#FFA500] mt-6 mb-2">Weather-Related Cancellations</h2>
//               <p>If Flick N Roll must cancel your booking due to inclement weather or facility issues, you will be offered a full refund or the option to reschedule at no additional cost.</p>
              
//               <h2 className="text-xl md:text-2xl text-[#FFA500] mt-6 mb-2">How to Request a Cancellation</h2>
//               <p>To cancel a booking, log into your account on our website or contact our customer service team at bookings@flicknroll.com or (555) 123-4567.</p>
//             </div>
//           </div>
//         </div>

//         {/* Spinning Ball */}
//         <div className="absolute inset-0 overflow-hidden z-[5] pointer-events-none">
//           <motion.img
//             src="/img/ball.png"
//             alt="Spinning Ball"
//             className="absolute bottom-[-300px] right-[-400px] w-[600px] md:w-[800px] h-auto opacity-25 object-cover drop-shadow-[0_0_50px_rgba(0,0,0,0.3)]"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 30, ease: "linear", repeat: Infinity }}
//           />
//         </div>
//       </motion.div>
      
//       {/* Footer - Updated to match PrivacyPolicy.jsx */}
//       <footer className="py-12 bg-[#1A1721]">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between mb-8">
//             <div className="mb-6 md:mb-0">
//               <Link to="/" className="inline-block">
//                 <img
//                   src="/img/fnr_logo.png"
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
//                 <h4 className="font-bold text-white text-lg mb-4">Quick Links</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     <a
//                       href="/#home"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/#about"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/#amenities"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       Amenities
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/#pricing"
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
//                 <h4 className="font-bold text-lg mb-4 text-white">Policies</h4>
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
//                       className="text-[#FFA500] hover:text-[#FFA500]/80 transition-colors"
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
//                 <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     <a
//                       href="tel:+919099208880"
//                       className="text-gray-400 hover:text-[#FFA500] transition-colors"
//                     >
//                       +91 90992 08880
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
//                     d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Cancellation;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { fadeInUp } from "../utils/animations";

const Cancellation = () => {
  return (
    <>
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
        {/* Header */}
        <header className="fixed w-full py-3 z-30 transition-all duration-500 bg-[#1A1721]/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="flex items-center text-2xl group relative">
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

            {/* Back to Home Button */}
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-300 hover:text-[#FFA500] transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="hidden md:inline relative">
                Back to Home
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA500]/50"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-24 flex-grow z-10">
          <motion.div 
            className="bg-[#1A1721]/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10 max-w-4xl mx-auto text-white"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl text-[#FFA500] mb-6 relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cancellation Policy
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-[#FFA500]/30"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h1>

            <div className="space-y-6 font-sans text-gray-300">
              <motion.p 
                className="italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Last Updated: April 30, 2025
              </motion.p>

              {[
                {
                  title: "Court Booking Cancellations",
                  content: "We understand that plans change. Here's our policy regarding court booking cancellations:",
                  list: [
                    "Cancellations made 24+ hours in advance: Full refund",
                    "Cancellations made 12-24 hours in advance: 75% refund",
                    "Cancellations made 6-12 hours in advance: 50% refund",
                    "Cancellations made less than 6 hours in advance: No refund"
                  ]
                },
                {
                  title: "Membership Cancellations",
                  content: "Monthly memberships can be canceled at any time, but refunds are not provided for the current billing period. Your membership will remain active until the end of the current billing cycle. Annual memberships may be canceled with a partial refund according to the following schedule:",
                  list: [
                    "Cancellation within first 30 days: 75% refund",
                    "Cancellation within 31-90 days: 50% refund",
                    "Cancellation after 90 days: No refund"
                  ]
                },
                {
                  title: "Event Cancellations",
                  content: "Refund policies for special events, tournaments, and clinics are specified on the respective event registration pages. Generally, event cancellations follow the same timeline as court bookings."
                },
                {
                  title: "Weather-Related Cancellations",
                  content: "If Flick N Roll must cancel your booking due to inclement weather or facility issues, you will be offered a full refund or the option to reschedule at no additional cost."
                },
                {
                  title: "How to Request a Cancellation",
                  content: <span>To cancel a booking, log into your account on our website or contact our customer service team at <a href="mailto:bookings@flicknroll.com" className="text-[#FFA500] hover:underline">bookings@flicknroll.com</a> or <a href="tel:+919099208880" className="text-[#FFA500] hover:underline">+91 90992 08880</a>.</span>
                },
              ].map((section, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <h2 className="text-xl md:text-2xl text-[#FFA500] mt-6 mb-2 group flex items-center">
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                      {section.title}
                    </span>
                  </h2>
                  <p>{section.content}</p>
                  
                  {section.list && (
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      {section.list.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * itemIndex }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Spinning Ball */}
        <div className="absolute inset-0 overflow-hidden z-[5] pointer-events-none">
          <motion.img
            src="/img/ball.png"
            alt="Spinning Ball"
            className="absolute bottom-[-300px] right-[-400px] w-[600px] md:w-[800px] h-auto opacity-25 object-cover drop-shadow-[0_0_50px_rgba(0,0,0,0.3)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      {/* Footer */}
      <footer className="py-12 bg-[#1A1721] relative overflow-hidden">
        {/* Background animation */}
        <motion.div 
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#FFA500]/5 opacity-40"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-6 md:mb-0 md:max-w-xs">
              <Link to="/" className="inline-block group">
                <motion.img
                  src="/img/fnr_logo.png"
                  alt="Flick N Roll Pickleball"
                  className="h-12 w-auto mb-4 transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
              <p className="text-gray-400 mt-4">
                Flick N Roll offers premium pickleball facilities for players of
                all skill levels in Gandhinagar.
              </p>
              
              <div className="mt-4 flex items-center space-x-2">
                <motion.a
                  href="https://www.instagram.com/flicknroll/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#2D2A3A] flex items-center justify-center text-gray-400 hover:text-[#FFA500] hover:bg-[#2D2A3A]/80 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <svg
                    className="h-5 w-5"
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
                </motion.a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Home", href: "/#home" },
                    { label: "About Us", href: "/#about" },
                    { label: "Amenities", href: "/#amenities" },
                    { label: "Pricing", href: "/#pricing" },
                    { label: "Contact Us", href: "/contact-us" },
                  ].map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 3 }}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#FFA500] transition-colors inline-block relative group"
                      >
                        {link.label}
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA500]/50"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Policies</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Terms & Conditions", href: "/terms-and-conditions" },
                    { label: "Cancellation", href: "/cancellation", active: true },
                    { label: "Shipping & Delivery", href: "/shipping-delivery" },
                  ].map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 3 }}>
                      <Link
                        to={link.href}
                        className={`${link.active ? "text-[#FFA500]" : "text-gray-400 hover:text-[#FFA500]"} transition-colors inline-block relative group`}
                      >
                        {link.label}
                        {!link.active && (
                          <motion.span 
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA500]/50"
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
                <ul className="space-y-2">
                  {[
                    { label: "+91 90992 08880", href: "tel:+919099208880" },
                    { label: "info@flicknroll.com", href: "mailto:info@flicknroll.com" },
                  ].map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 3 }}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#FFA500] transition-colors inline-block relative group"
                      >
                        {link.label}
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA500]/50"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Flick N Roll Pickleball. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="https://www.instagram.com/flicknroll/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-500 hover:text-[#FFA500] transition-colors"
              >
                <svg
                  className="h-5 w-5"
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Cancellation;