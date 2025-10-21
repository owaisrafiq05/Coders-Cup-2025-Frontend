import ScrollIndicator from "../GlobalComponents/ScrollIndicator";

const CodersCupHero = () => {
  return (
    <section className="w-full bg-[#FEFEFE] font-outfit">
      <div className="mx-auto lg:max-w-7xl flex flex-col justify-center items-center gap-14">
        <img
          src="coderscup-hero.png"
          alt="ACM brings you the Coders Cup — unleash your inner dragon!"
          className="w-full object-contain max-h-[180px] max-w-[122px]"
        />
        <p className="font-black text-[40px] lg:text-[52px] text-[#930000] leading-[39px] text-center align-middle max-w-[1047px]">
          CODER’S CUP: Competitive Programming
        </p>

        <p className="md:mx-20 max-w-[1200px] font-medium text-26px lg:text-[28px] leading-[1] text-center align-middle text-gray-900">
          The Coder’s Cup: The classNameic is an{" "}
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
