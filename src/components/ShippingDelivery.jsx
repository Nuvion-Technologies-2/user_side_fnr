import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ShippingDelivery = () => {
  return (
    <>
      <motion.div
        className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden font-bangers text-white"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity
        }}
        style={{
          backgroundColor: "#2D2A3A",
          backgroundImage: "linear-gradient(to bottom right, #2D2A3A, #1A1721, #2D2A3A)",
          backgroundSize: "400% 400%",
        }}
      >
        {/* Header - Updated to match PrivacyPolicy.jsx */}
        <header className="fixed w-full py-3 z-30 transition-all duration-500 bg-[#1A1721]/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="flex items-center text-2xl">
              <img
                src="/img/fnr_logo.png"
                alt="Flick N Roll Pickleball"
                className="h-10 md:h-14 w-auto"
              />
            </Link>
            
            {/* Back to Home Button */}
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-300 hover:text-[#FFA500] transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="hidden md:inline">Back to Home</span>
            </Link>
          </div>
        </header>

        {/* Content - Updated padding for fixed header */}
        <div className="container mx-auto px-4 py-24 flex-grow z-10">
          <div className="bg-[#1A1721]/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10 max-w-4xl mx-auto text-white">
            <h1 className="text-3xl md:text-4xl text-[#FFA500] mb-6">Shipping & Delivery</h1>
            
            <div className="space-y-6 font-sans text-gray-300">
              <p className="italic">Last Updated: April 30, 2025</p>
              
              <h2 className="text-xl md:text-2xl text-[#FFA500] mt-6 mb-2">Merchandise Shipping</h2>
              <p>For all merchandise purchased from our online store, the following shipping policies apply:</p>
              
              <h3 className="text-lg md:text-xl text-[#FFA500] mt-4 mb-2">Processing Time</h3>
              <p>Orders are typically processed within 1-2 business days after payment confirmation. During peak seasons or promotional periods, processing may take up to 3 business days.</p>
              
              <h3 className="text-lg md:text-xl text-[#FFA500] mt-4 mb-2">Shipping Methods & Timeframes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard Shipping (3-5 business days): $5.99</li>
                <li>Express Shipping (2-3 business days): $12.99</li>
                <li>Next Day Delivery (order by 12pm): $19.99</li>
                <li>Free shipping on all orders over $75</li>
              </ul>
              
              <h3 className="text-lg md:text-xl text-[#FFA500] mt-4 mb-2">International Shipping</h3>
              <p>We currently ship to select international destinations. International shipping rates and timeframes vary by location. Additional customs fees or taxes may apply and are the responsibility of the recipient.</p>
              
              <h3 className="text-lg md:text-xl text-[#FFA500] mt-4 mb-2">Tracking</h3>
              <p>A tracking number will be provided via email once your order has been shipped. You can track your order's status by logging into your account on our website or by using the tracking number provided in the shipping confirmation email.</p>
              
              <h3 className="text-lg md:text-xl text-[#FFA500] mt-4 mb-2">Delivery Issues</h3>
              <p>If you encounter any issues with your delivery, please contact our customer service team at support@flicknroll.com or (555) 123-4567 within 7 days of the expected delivery date.</p>
              
              <h3 className="text-lg md:text-xl text-[#FFA500] mt-4 mb-2">Returns & Exchanges</h3>
              <p>Please see our Returns Policy for information on how to return or exchange items. We offer a 30-day return policy for most items in new, unworn condition with original packaging.</p>
            </div>
          </div>
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
      
      {/* Footer - Updated to match PrivacyPolicy.jsx */}
      <footer className="py-12 bg-[#1A1721]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="inline-block">
                <img
                  src="/img/fnr_logo.png"
                  alt="Flick N Roll Pickleball"
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-400 mt-4 max-w-xs">
                Flick N Roll offers premium pickleball facilities for players of
                all skill levels in Gandhinagar.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-white text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/#home"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#about"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#amenities"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      Amenities
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#pricing"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact-us"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Policies</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cancellation"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      Cancellation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shipping-delivery"
                      className="text-[#FFA500] hover:text-[#FFA500]/80 transition-colors"
                    >
                      Shipping & Delivery
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="tel:+919537531054"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      +91 9537531054
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@flicknroll.com"
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      info@flicknroll.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
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

export default ShippingDelivery;