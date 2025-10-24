import { motion } from "framer-motion";
// import React, { useState } from "react";
// import RegistrationModal from "../GlobalComponents/RegistrationModal";

const AboutSection: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="bg-[#FEFEEA] z-10">
      <div
        className="relative rounded-[24px] sm:rounded-[32px] bg-[#7E0000] text-[#FEFEEA] 
                   overflow-hidden shadow-xl md:min-h-[520px] lg:min-h-[560px] 
                   flex items-center justify-center py-8 sm:py-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12 
                        p-5 sm:p-8 lg:p-20 w-full max-w-7xl">
          {/* Left: Text */}
          <motion.div 
            className="flex flex-col justify-center text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
              ABOUT US
            </h2>

            <p className="mt-4 sm:mt-6 text-[13px] sm:text-sm md:text-base lg:text-2xl opacity-95">
              Coder's Cup is FAST Karachi annual coding competition, organized by the ACM NUCES Khi.
              It brings together the brightest problem-solvers, developers, and tech enthusiasts under one banner.
              Each year, the event challenges participants to push their creative and analytical limits through a
              series of programming and algorithmic challenges.
            </p>


            <p className="mt-3 sm:mt-4 text-[13px] sm:text-sm md:text-base lg:text-2xl opacity-95">
              The Coder’s Cup aims to inspire a culture of learning, collaboration, and
              growth.
            </p>

            <motion.div 
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <button
                onClick={() => window.open("https://acmnuceskhi.com/", "_blank")}
                className="inline-flex items-center cursor-pointer justify-center rounded-full bg-[#FEFEEA] text-[#930000]
                           font-semibold sm:text-lg px-10 sm:px-15 py-2.5 sm:py-3 hover:shadow-lg transition-shadow duration-200"
              >
                About ACM
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Dragon Scroll Image */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src="about-img.png"
              alt="ACM brings you the Coders Cup — unleash your inner dragon!"
              className="w-full object-contain
                         max-w-[200px] sm:max-w-[260px] md:max-w-[340px] lg:max-w-[420px]
                         drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            />
            <div
              className="pointer-events-none absolute -inset-x-6 -bottom-8 h-24
                         bg-gradient-to-t from-black/10 to-transparent blur-2xl opacity-30"
            />
          </motion.div>
        </div>

        {/* Subtle glow accents */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-36 sm:w-40 h-36 sm:h-40 rounded-full bg-[#FEFEEA]/5 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 w-48 sm:w-56 h-48 sm:h-56 rounded-full bg-[#D99413]/10 blur-3xl" />
      </div>

      {/* Registration Modal */}
      {/* <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </section>
  );
};

export default AboutSection;
