import ScrollIndicator from "../GlobalComponents/ScrollIndicator";

const CodersCupHero = () => {
  return (
    <section className="w-full bg-[#FEFEFE] font-outfit px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="modules-circle-bg.png"
          alt="timeline section decorative background"
          className="w-full max-w-7xl opacity-90 object-contain z-0"
        />
      </div>
      <div className="mx-auto max-w-7xl flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        <img
          src="coderscup-hero.png"
          alt="ACM brings you the Coders Cup — unleash your inner dragon!"
          className="w-full object-contain max-h-[120px] sm:max-h-[140px] md:max-h-[160px] lg:max-h-[180px] max-w-[80px] sm:max-w-[90px] md:max-w-[110px] lg:max-w-[122px]"
        />
        <p className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] text-[#930000] leading-tight text-center max-w-full px-2">
          CODER’S CUP:<br/>Competitive Programming
        </p>

        <p className="max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[1200px] font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-[28px] leading-relaxed text-center text-gray-900 px-2 sm:px-4 md:px-6 lg:px-8">
          The Coder’s Cup: The classic is an{" "}
          <span className="text-[#930000]">
            exclusive programming competition for FASTians
          </span>
          , designed to test participants’ logic, creativity, and coding
          mastery. The event follows a batch-wise competitive format where each
          participant tackles a series of{" "}
          <span className="text-[#930000]">3–5 algorithmic challenges</span>{" "}
          within a limited time. The{" "}
          <span className="text-[#930000]">
            top four teams from every batch
          </span>{" "}
          qualify for the next stage, after which the{" "}
          <span className="text-[#930000]">
            House Captains bid on individual participants
          </span>{" "}
          to form their final teams. These teams then advance to the Grand
          Finale, where they compete for ultimate glory.
        </p>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default CodersCupHero;
