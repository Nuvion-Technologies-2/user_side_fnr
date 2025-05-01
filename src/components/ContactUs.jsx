import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load Watson Assistant script
  useEffect(() => {
    // Check if the script is already loaded to prevent duplicates
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

    // Cleanup to remove the script when the component unmounts
    return () => {
      if (document.getElementById("watson-assistant-script")) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
        {/* Header - Updated to match Home.jsx */}
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

        {/* Page Content - Adjusted padding for fixed header */}
        <div className="container mx-auto px-4 py-24 flex-grow z-10">
          {/* Contact Card */}
          <div className="bg-[#1A1721]/80 backdrop-blur-sm rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto text-white">
            <h1 className="text-3xl md:text-4xl text-[#FFA500] mb-6">
              Contact Us
            </h1>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#FFA500]">
                Our Location
              </h3>
              <div className="h-[250px] md:h-[300px] w-full overflow-hidden rounded-lg border border-gray-700 mb-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9586364980028!2d72.65421789999999!3d23.208178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b595bf5c823%3A0x365c81833ae6de33!2z8J2XmfCdl5_wnZec8J2XlvCdl54gJ_Cdl6Eg8J2XpfCdl6LwnZef8J2XnyB8IPCdl5XwnZey8J2YgPCdmIEg8J2Xo_Cdl7bwnZew8J2XuPCdl7nwnZey8J2Xr_Cdl67wnZe58J2XuSDwnZec8J2XuyDwnZea8J2XrvCdl7vwnZex8J2XtfCdl7bwnZe78J2XrvCdl7TwnZeu8J2Xvw!5e0!3m2!1sen!2sin!4v1746098926197!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FLICK 'N ROLL Location"
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
              <p className="text-sm text-gray-400">
                FLICK 'N ROLL, Chh, 3, Nr. Parinam Circle, Gandhinagar, Gujarat
                382009
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Contact Info */}
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#FFA500]">
                    Contact Information
                  </h3>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    info@flicknroll.com
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> +91 9537531054
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#FFA500]">
                    Business Hours
                  </h3>
                  <p>
                    <span className="font-semibold">Everyday</span>
                  </p>
                  <p>24 x 7</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#FFA500]">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/flicknroll/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#FFA500] transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-6 w-6"
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

              {/* Contact Form - Restyled to match Home.jsx aesthetic */}
              <div>
                {isSubmitted ? (
                  <div className="bg-[#FFA500]/10 border border-[#FFA500]/30 text-[#FFA500] px-6 py-4 rounded-lg mb-4">
                    <strong className="font-bold">Thank you!</strong>
                    <span className="block mt-1">
                      Your message has been sent. We'll get back to you soon.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-1 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-[#FFA500] text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-1 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-[#FFA500] text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-300 mb-1 font-medium"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-[#FFA500] text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-300 mb-1 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-3 py-2 bg-[#2D2A3A]/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 focus:border-[#FFA500] text-white"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#FFA500] hover:bg-[#FFA500]/80 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
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

      {/* Footer - Updated to match Home.jsx */}
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
                      className="text-[#FFA500] hover:text-[#FFA500]/80 transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-lg mb-4">Policies</h4>
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
                      className="text-gray-400 hover:text-[#FFA500] transition-colors"
                    >
                      Shipping & Delivery
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-lg mb-4">Contact</h4>
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

export default ContactUs;