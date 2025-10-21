import { useEffect, useState } from "react";
import { RollingText } from "./RollingText";
import ScrollIndicator from "../GlobalComponents/ScrollIndicator";
// import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 54,
    minutes: 24,
    seconds: 56,
  });
  // const [titleIndex, setTitleIndex] = useState(0);
  // const titles = ["程式設計師盃杯子的", "Coders Cup"];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTitleIndex((prev) => (prev + 1) % titles.length);
  //   }, 3000); // change text every 3 seconds
  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    // Set target date to 11 Nov 2025, 00:00:00
    const targetDate = new Date("2025-11-11T00:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#FEFEEA] h-[450px] -mt-[60px] sm:min-h-screen flex flex-col items-center justify-center overflow-visible">
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
      <div className="pt-30 sm:pt-40 relative z-10 text-center flex flex-col items-center translate-y-6 md:translate-y-10">
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
        
        <div className="flex items-end justify-center gap-2 md:gap-4 text-[#930000]">
          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase mb-1 tracking-wide">
              days
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
          </div>
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
            :
          </span>

          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase mb-1 tracking-wide">
              hours
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl  font-bold leading-none">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
          </div>
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
            :
          </span>

          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase mb-1 tracking-wide">
              minutes
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
          </div>
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
            :
          </span>

          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase mb-1 tracking-wide">
              seconds
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div>
          <ScrollIndicator />
        </div>

        {/* <div className="flex flex-col items-center space-y-2 mt-8 md:mt-12 animate-bounce">
          <ChevronDown className="text-[#930000] w-6 h-4 sm:w-8 sm:h-6" />
          <ChevronDown className="text-[#D99413] w-6 h-4 sm:w-8 sm:h-6 -mt-4" />
          <ChevronDown className="text-[#D99413] w-6 h-4 sm:w-8 sm:h-6 -mt-4" />
          <ChevronDown className="text-[#D99413] w-6 h-4 sm:w-8 sm:h-6 -mt-4" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
