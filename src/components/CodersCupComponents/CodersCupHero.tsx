import ScrollIndicator from "../GlobalComponents/ScrollIndicator";

const CodersCupHero = () => {
  return (
    <section className="relative min-h-screen font-outfit px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div className="absolute hidden sm:flex items-center justify-center opacity-20 w-screen h-full overflow-hidden">
          <div
            className="absolute rounded-full border border-[#EA4A4A] w-[1150px] h-[1150px]"
          ></div>

          <div
            className="absolute rounded-full border border-[#EA4A4A] opacity-60 w-[850px] h-[850px]"
          ></div>

          <div
            className="absolute rounded-full border border-[#EA4A4A] opacity-60 w-[550px] h-[550px]"
          ></div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl -mt-[68px] py-8 flex flex-col justify-center items-center gap-8">
        <img
          src="coderscup-hero.png"
          alt="ACM brings you the Coders Cup — unleash your inner dragon!"
          className="w-full object-contain mt-14 max-h-[120px] sm:max-h-[140px] md:max-h-[160px] lg:max-h-[180px] max-w-[80px] sm:max-w-[90px] md:max-w-[110px] lg:max-w-[122px]"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-[#930000] leading-[1] text-center">
          CODER'S CUP: <br /> Competitive Programming
        </h2>

        <p className="max-w-full sm:max-w-[90%] bg-[#FEFEEA] md:max-w-[85%] lg:max-w-[1200px] font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-[28px] text-center text-gray-900 px-2 sm:px-4 md:px-6 lg:px-8 md:py-3">
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
