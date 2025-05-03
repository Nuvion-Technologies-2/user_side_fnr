import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const SuccessModal = ({ isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 10 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20 
        }}
        className="bg-gradient-to-br from-[#2D2A3A] to-[#1A1721] rounded-xl w-full max-w-md p-8 shadow-2xl border border-[#FFA500]/20 text-center"
      >
        <motion.div
          className="w-20 h-20 mx-auto bg-[#FFA500]/20 rounded-full flex items-center justify-center mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          animate={{ 
            boxShadow: ["0 0 0 0 rgba(255,165,0,0.2)", "0 0 0 20px rgba(255,165,0,0)", "0 0 0 0 rgba(255,165,0,0)"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <Check size={48} className="text-[#FFA500]" />
        </motion.div>
        <motion.h3
          className="text-2xl font-bold text-[#FFA500] mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Booking Confirmed!
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We've received your booking request. You'll receive a
          confirmation email soon.
        </motion.p>
        <motion.div
          className="w-16 h-16 mx-auto bg-[#FFA500]/10 rounded-full flex items-center justify-center"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={32} className="text-[#FFA500]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SuccessModal;