import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 54,
    minutes: 24,
    seconds: 56,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(targetDate.getHours() + 54);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#FFF8E7] min-h-screen flex flex-col items-center justify-center overflow-visible">
      {/* Background images */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="circles-hero.png"
          alt="circles background"
          className="absolute w-full max-w-7xl opacity-90 object-contain pointer-events-none select-none"
        />
        <img
          src="hero-bg.png"
          alt="trophy background"
          className="absolute w-full max-w-3xl md:max-w-4xl lg:max-w-5xl object-contain pointer-events-none select-none"
        />
      </div>

      {/* Foreground content (now slightly lower) */}
      <div className="relative z-10 text-center flex flex-col items-center translate-y-6 md:translate-y-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#930000] mb-8 md:mb-10">
          程式設計師盃杯子的
        </h1>

        <div className="flex items-end justify-center gap-2 md:gap-6 lg:gap-8 text-[#930000]">
          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase mb-1 tracking-wide">days</span>
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
          </div>
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">:</span>

          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase mb-1 tracking-wide">hours</span>
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
          </div>
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">:</span>

          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase mb-1 tracking-wide">minutes</span>
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
          </div>
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">:</span>

          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase mb-1 tracking-wide">seconds</span>
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 mt-8 md:mt-12 animate-bounce">
          <ChevronDown className="text-[#930000] w-6 h-6 md:w-8 md:h-8" />
          <ChevronDown className="text-[#D99413] w-6 h-6 md:w-8 md:h-8 -mt-4" />
          <ChevronDown className="text-[#D99413] w-6 h-6 md:w-8 md:h-8 -mt-4" />
          <ChevronDown className="text-[#D99413] w-6 h-6 md:w-8 md:h-8 -mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
