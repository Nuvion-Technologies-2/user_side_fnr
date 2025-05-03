import React from "react";
import { motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const BookingModal = ({ 
  isOpen, 
  setIsOpen, 
  bookingDetails, 
  handleInputChange, 
  handleSubmit 
}) => {
  // Calculate total amount
  const calculateTotalAmount = () => {
    const { plan, hours, courts } = bookingDetails;
    let basePrice = 0;
    if (plan === "Pay-Per-Play") {
      basePrice = 299 * parseInt(hours) * parseInt(courts);
    } else if (plan === "Monthly Membership") {
      basePrice = 3999;
    } else if (plan === "Annual Membership") {
      basePrice = 35999;
    }
    const amount_before_tax = basePrice - (basePrice * 0.18);
    const tax = basePrice * 0.18;
    const total = amount_before_tax + tax;
    
    return { amount_before_tax, tax, total };
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.19, 1.0, 0.22, 1.0]
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { 
        duration: 0.3,
        ease: [0.19, 1.0, 0.22, 1.0]
      } 
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        variants={contentVariants}
        className="bg-gradient-to-br from-[#2D2A3A] to-[#1A1721] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 shadow-xl border border-[#FFA500]/20 relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFA500]/50 via-[#FFA500] to-[#FFA500]/50" />
        <motion.div
          className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-[#FFA500]/10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="flex justify-between items-center mb-6">
          <motion.h3 
            className="text-2xl font-bold text-[#FFA500] flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Book Your Experience
          </motion.h3>
          <motion.button
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <X size={24} />
          </motion.button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          {/* Personal Details */}
          <div>
            <h4 className="text-base font-medium text-white mb-3 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#FFA500]/20 flex items-center justify-center text-[#FFA500] mr-2 text-xs">1</span>
              Personal Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-1 font-medium text-sm"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={bookingDetails.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white
                            focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-transparent
                            transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-1 font-medium text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={bookingDetails.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white
                            focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-transparent
                            transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-300 mb-1 font-medium text-sm"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={bookingDetails.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white
                            focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-transparent
                            transition-all duration-300"
                  required
                />
              </div>
            </div>
          </div>

          {/* Plan Selection */}
          <div>
            <h4 className="text-base font-medium text-white mb-3 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#FFA500]/20 flex items-center justify-center text-[#FFA500] mr-2 text-xs">2</span>
              Select Plan
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Pay-Per-Play", "Monthly Membership", "Annual Membership"].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`
                    border ${bookingDetails.plan === plan ? 'border-[#FFA500]' : 'border-gray-700'} 
                    rounded-lg p-4 cursor-pointer transition-all duration-300
                    ${bookingDetails.plan === plan ? 'bg-[#FFA500]/10' : 'bg-[#2D2A3A]/30'}
                  `}
                  whileHover={{ y: -5 }}
                  onClick={() => handleInputChange({ target: { name: 'plan', value: plan } })}
                >
                  <div className="flex items-start">
                    <input
                      type="radio"
                      id={`plan-${index}`}
                      name="plan"
                      value={plan}
                      checked={bookingDetails.plan === plan}
                      onChange={handleInputChange}
                      className="mt-1 text-[#FFA500] focus:ring-[#FFA500] border-gray-700 bg-transparent"
                    />
                    <label htmlFor={`plan-${index}`} className="ml-2 block">
                      <span className="block font-medium text-white mb-1">{plan}</span>
                      <span className="block text-xs text-gray-400">
                        {plan === "Pay-Per-Play" && "₹299/hour"}
                        {plan === "Monthly Membership" && "₹3,999/month"}
                        {plan === "Annual Membership" && "₹35,999/year"}
                      </span>
                    </label>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conditional Fields */}
          {bookingDetails.plan === "Pay-Per-Play" && (
            <div>
              <h4 className="text-base font-medium text-white mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#FFA500]/20 flex items-center justify-center text-[#FFA500] mr-2 text-xs">3</span>
                Booking Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="hours"
                    className="block text-gray-300 mb-1 font-medium text-sm"
                  >
                    Hours
                  </label>
                  <select
                    id="hours"
                    name="hours"
                    value={bookingDetails.hours}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white
                              focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-transparent
                              transition-all duration-300"
                    required
                  >
                    {[1, 2, 3, 4].map((h) => (
                      <option key={h} value={h}>
                        {h} Hour{h > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-gray-300 mb-1 font-medium text-sm"
                  >
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={bookingDetails.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white
                              focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-transparent
                              transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-gray-300 mb-1 font-medium text-sm"
                  >
                    Select Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={bookingDetails.time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white
                              focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-transparent
                              transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="courts"
                    className="block text-gray-300 mb-1 font-medium text-sm"
                  >
                    Courts
                  </label>
                  <select
                    id="courts"
                    name="courts"
                    value={bookingDetails.courts}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white
                              focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-transparent
                              transition-all duration-300"
                    required
                  >
                    {[1, 2, 3, 4].map((c) => (
                      <option key={c} value={c}>
                        {c} Court{c > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="players"
                    className="block text-gray-300 mb-1 font-medium text-sm"
                  >
                    Players
                  </label>
                  <select
                    id="players"
                    name="players"
                    value={bookingDetails.players}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white
                              focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-transparent
                              transition-all duration-300"
                    required
                  >
                    {[2, 4, 6, 8].map((p) => (
                      <option key={p} value={p}>
                        {p} Player{p > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {["Monthly Membership", "Annual Membership"].includes(
            bookingDetails.plan
          ) && (
            <div>
              <h4 className="text-base font-medium text-white mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#FFA500]/20 flex items-center justify-center text-[#FFA500] mr-2 text-xs">3</span>
                Membership Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-gray-300 mb-1 font-medium text-sm"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={bookingDetails.startDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg text-white
                              focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-transparent
                              transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="block text-gray-300 mb-1 font-medium text-sm"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    value={bookingDetails.expiryDate}
                    className="w-full px-3 py-2 bg-[#2D2A3A]/30 border border-gray-700 rounded-lg text-gray-400"
                    disabled
                  />
                </div>
              </div>
            </div>
          )}

          {/* Payment Summary */}
          <div>
            <h4 className="text-base font-medium text-white mb-3 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#FFA500]/20 flex items-center justify-center text-[#FFA500] mr-2 text-xs">
                {bookingDetails.plan === "Pay-Per-Play" ? "4" : "4"}
              </span>
              Payment Summary
            </h4>
            <div className="bg-gradient-to-br from-[#2D2A3A]/30 to-[#1A1721]/30 p-5 rounded-lg border border-gray-800">
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Selected Plan:</span>
                  <span>{bookingDetails.plan}</span>
                </div>
                {bookingDetails.plan === "Pay-Per-Play" && (
                  <>
                    <div className="flex justify-between">
                      <span>Hours:</span>
                      <span>{bookingDetails.hours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Courts:</span>
                      <span>{bookingDetails.courts}</span>
                    </div>
                  </>
                )}
                {["Monthly Membership", "Annual Membership"].includes(
                  bookingDetails.plan
                ) && (
                  <>
                    <div className="flex justify-between">
                      <span>Start Date:</span>
                      <span>
                        {bookingDetails.startDate || "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expiry Date:</span>
                      <span>
                        {bookingDetails.expiryDate || "Not applicable"}
                      </span>
                    </div>
                  </>
                )}

                {(() => {
                  const { amount_before_tax, tax, total } = calculateTotalAmount();
                  
                  return (
                    <>
                      <div className="flex justify-between font-medium text-white">
                        <span>Base Price:</span>
                        <span>₹{amount_before_tax.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between font-medium text-white">
                        <span>GST (18%):</span>
                        <span>
                          ₹
                          {tax.toLocaleString("en-IN", {
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold text-[#FFA500] border-t border-gray-700 pt-2 mt-2">
                        <span>Total:</span>
                        <span>
                          ₹
                          {total.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 
                      text-sm flex items-center justify-center gap-2 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Confirm Booking</span>
            <Sparkles size={18} className="relative z-10" />
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BookingModal;