import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#2D2A3A] to-[#1A1721]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Find <span className="text-[#FFA500]">Us</span>
            </h2>
            <ul className="space-y-6">
              <motion.li 
                className="flex items-start group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#FFA500]/10 flex items-center justify-center mr-3 
                              group-hover:bg-[#FFA500]/20 transition-colors duration-300">
                  <MapPin
                    size={20}
                    className="text-[#FFA500] flex-shrink-0"
                  />
                </div>
                <div>
                  <p className="font-medium">FLICK 'N ROLL</p>
                  <p className="text-gray-400">
                    Chh, 3, Nr. Parinam Circle, Gandhinagar, Gujarat 382009
                  </p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#FFA500]/10 flex items-center justify-center mr-3
                              group-hover:bg-[#FFA500]/20 transition-colors duration-300">
                  <Phone
                    size={20}
                    className="text-[#FFA500] flex-shrink-0"
                  />
                </div>
                <a href="tel:+919537531054" className="hover:text-[#FFA500] transition-colors">
                  +91 9537531054
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#FFA500]/10 flex items-center justify-center mr-3
                              group-hover:bg-[#FFA500]/20 transition-colors duration-300">
                  <Mail
                    size={20}
                    className="text-[#FFA500] flex-shrink-0"
                  />
                </div>
                <a href="mailto:info@flicknroll.com" className="hover:text-[#FFA500] transition-colors">
                  info@flicknroll.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#FFA500]/10 flex items-center justify-center mr-3
                              group-hover:bg-[#FFA500]/20 transition-colors duration-300">
                  <Clock
                    size={20}
                    className="text-[#FFA500] flex-shrink-0"
                  />
                </div>
                <a href="mailto:info@flicknroll.com" className="hover:text-[#FFA500] transition-colors">
                  Open 24/7
                </a>
              </motion.li>
              {/* <motion.li 
                className="pt-2 pl-3"
                whileHover={{ x: 5 }}
              >
                <p className="font-medium text-[#FFA500]">Hours</p>
                <p className="text-gray-400">Open 24/7</p>
              </motion.li> */}
            </ul>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg border border-gray-700
                          shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-500
                          hover:border-[#FFA500]/20 transform hover:scale-[1.01]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9586364980028!2d72.65421789999999!3d23.208178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b595bf5c823%3A0x365c81833ae6de33!2z8J2XmfCdl5_wnZec8J2XlvCdl54gJ_Cdl6Eg8J2XpfCdl6LwnZef8J2XnyB8IPCdl5XwnZey8J2YgPCdmIEg8J2Xo_Cdl7bwnZew8J2XuPCdl7nwnZey8J2Xr_Cdl67wnZe58J2XuSDwnZec8J2XuyDwnZea8J2XrvCdl7vwnZex8J2XtfCdl7bwnZe78J2XrvCdl7TwnZeu8J2Xvw!5e0!3m2!1sen!2sin!4v1746098926197!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FLICK 'N ROLL Location"
                className="filter grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;