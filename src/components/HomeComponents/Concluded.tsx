import { RollingText } from "./RollingText";
import { motion } from "framer-motion";
import {

  Facebook,
  Instagram
} from "lucide-react";

// Custom LinkedIn icon component since Lucide's is deprecated
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WebsiteIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm6.93 6h-3.341A15.978 15.978 0 0014.1 4.082 8.027 8.027 0 0118.93 8zM12 4c.871 0 2.287 1.651 3.07 4H8.93C9.713 5.651 11.129 4 12 4zM7.9 4.082A15.978 15.978 0 007.411 8H4.07A8.027 8.027 0 017.9 4.082zM4.051 10H7.2c-.05.66-.083 1.316-.083 2s.033 1.34.083 2H4.051a7.956 7.956 0 010-4zm.019 6H7.41a15.978 15.978 0 003.49 3.918A8.027 8.027 0 014.07 16zM12 20c-.871 0-2.287-1.651-3.07-4h6.14c-.783 2.349-2.199 4-3.07 4zm4.1-.082A15.978 15.978 0 0016.589 16h3.341a8.027 8.027 0 01-3.83 3.918zM19.949 14H16.8c.05-.66.083-1.316.083-2s-.033-1.34-.083-2h3.149a7.956 7.956 0 010 4z" />
  </svg>
);



const Concluded = () => {

  return (
    <section className="relative bg-[#FEFEEA] h-screen pb-[100px] sm:min-h-screen flex flex-col items-center justify-center overflow-visible">
      {/* Background images */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* <img
          src="circles-hero.png"
          alt="circles background"
          className="absolute w-full max-w-7xl opacity-100 object-contain pointer-events-none select-none z-0"
        /> */}
        <div className="relative hidden sm:flex items-center justify-center opacity-20 w-screen h-screen overflow-hidden">
          <div className="absolute rounded-full border border-[#EA4A4A] w-[1150px] h-[1150px]"></div>

          <div className="absolute rounded-full border border-[#EA4A4A] opacity-60 w-[850px] h-[850px]"></div>

          <div className="absolute rounded-full border border-[#EA4A4A] opacity-60 w-[550px] h-[550px]"></div>
        </div>
        <img
          src="hero-bg.png"
          alt="trophy background"
          className="absolute w-full bg-[#FEFEEA] opacity-90 max-w-3xl md:max-w-4xl lg:max-w-6xl object-contain pointer-events-none select-none"
        />
      </div>

      {/* Foreground content (now slightly lower) */}
      <motion.div
        className="pt-30 sm:pt-40 relative z-10 text-center flex flex-col items-center translate-y-6 md:translate-y-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* <AnimatePresence mode="wait">
            <motion.span
              key={titles[titleIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              {titles[titleIndex].split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence> */}
        <RollingText />

        <motion.div
          className="flex items-end justify-center gap-2 md:gap-4 text-[#930000]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
              Event has Concluded
            </span>
          </div>
        </motion.div>
        <motion.div
          className="mt-4 max-w-xl text-center text-[#930000] px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <p className="text-base md:text-lg leading-relaxed font-medium">
            Thank you to all the participants for being part of this event.
          </p>

          <p className="mt-3 text-base md:text-lg leading-relaxed font-medium">
            Stay connected with us for more exciting events in the future!
          </p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <a
              href="https://devday26.com"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="Registration For Developers Day 2026 are open. Check it out (opens in new tab)"
              className="w-full max-w-md mx-auto inline-flex flex-col items-center justify-center gap-1 bg-[#930000] text-white font-bold px-6 py-4 rounded-full shadow-2xl text-lg md:text-xl tracking-wide transform hover:scale-105 transition-transform duration-200 ease-out"
            >
              <span className="block">Registration For Developers Day 2026 are open</span>
              <span className="block text-sm md:text-base underline">Check it out</span>
            </a>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            

            <a
              href="https://www.acmnuceskhi.com/"
              target="_blank"
              className="text-[#930000] font-semibold hover:underline flex items-center gap-2"
            >
              <WebsiteIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#930000]" />
              ACM NUCES Khi
            </a>

            <a
              href="https://www.instagram.com/acmnuceskhi/"
              target="_blank"
              className="text-[#930000] font-semibold hover:underline flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#930000]" />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/acmnuceskhi"
              target="_blank"
              className="text-[#930000]  font-semibold hover:underline flex items-center gap-2"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#930000]" />
              Facebook
            </a>

          <a
            href="https://www.linkedin.com/company/acmnuceskhi/"
            target="_blank"
            className="text-[#930000] font-semibold hover:underline flex items-center gap-2"
          >
            <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#930000]" />
            LinkedIn
          </a>
        </div>
      </motion.div>

    </motion.div>
    </section >
  );
};

export default Concluded;
