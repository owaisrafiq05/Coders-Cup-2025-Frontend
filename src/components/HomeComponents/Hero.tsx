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
    <section className="relative md:py-[5%] h-[70vh] md:h-screen bg-[#FFF8E7] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] ">
        <div className="relative mb-8 md:mb-12 w-full flex flex-col items-center">
          {/* circles-hero behind */}
          <img
            src="circles-hero.png"
            alt="2025 Trophy"
            className="absolute w-full max-w-2xl md:max-w-4xl lg:max-w-7xl object-contain mb-4 md:mb-6 z-0"
          />

          {/* hero-bg on top */}
          <img
            src="hero-bg.png"
            alt="2025 Trophy"
            className="absolute w-full max-w-2xl md:max-w-4xl lg:max-w-5xl object-contain mb-4 md:mb-6 z-10"
          />

          <h1 className="pt-12 md:pt-32 text-3xl md:text-5xl lg:text-6xl font-bold text-[#930000] text-center px-4">
            程式設計師盃杯子的
          </h1>
        </div>

        <div className="mt-16 flex flex-col items-center space-y-4 md:space-y-6">
          <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6">
            <div className="flex flex-col items-center">
              <span className="text-xs md:text-sm text-[#930000] font-semibold mb-1">
                days
              </span>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#930000]">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
            </div>

            <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#930000] pb-6">
              :
            </span>

            <div className="flex flex-col items-center">
              <span className="text-xs md:text-sm text-[#930000] font-semibold mb-1">
                hours
              </span>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#930000]">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
            </div>

            <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#930000] pb-6">
              :
            </span>

            <div className="flex flex-col items-center">
              <span className="text-xs md:text-sm text-[#930000] font-semibold mb-1">
                minutes
              </span>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#930000]">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
            </div>

            <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#930000] pb-6">
              :
            </span>

            <div className="flex flex-col items-center">
              <span className="text-xs md:text-sm text-[#930000] font-semibold mb-1">
                seconds
              </span>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#930000]">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2 mt-8 md:mt-12 animate-bounce">
            <ChevronDown className="text-[#D99413] w-6 h-6 md:w-8 md:h-8" />
            <ChevronDown className="text-[#D99413] w-6 h-6 md:w-8 md:h-8 -mt-4" />
            <ChevronDown className="text-[#D99413] w-6 h-6 md:w-8 md:h-8 -mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
