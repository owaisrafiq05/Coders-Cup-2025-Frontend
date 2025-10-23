import { HashLink } from "react-router-hash-link";

const Module = () => {
  return (
    <section className="relative bg-[#FEFEEA] w-full overflow-visible">
      {/* Background image */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="modules-circle-bg.png"
          alt="modules section decorative background"
          className="w-full max-w-7xl opacity-90 object-contain z-0"
        />
      </div> */}
      <div className="absolute hidden sm:flex items-center justify-center opacity-30 w-screen h-full overflow-hidden">
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

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 py-14 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-[#930000] uppercase leading-[1] text-center">
          Introducing New Modules
        </h2>

        <div className="mt-8 md:mt-10 bg-[#FEFEEA] sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src="module-pic.png"
              alt="preview of modules"
              className="w-[88%] max-w-[520px] h-auto lg:h-[520px] rounded-[30px] shadow-md object-cover"
            />
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <p className="text-[#131313] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-medium leading-[1] max-w-[46ch] text-center lg:text-left">
              Each module is led by a legendary mentor who captures the essence
              of the challenge — Shifu’s mastery guides the Hackathon, the
              Furious Five’s unity powers the Debugging trials, Mr. Ping’s
              creativity fuels the Data Dash, and General Kai’s strategy
              commands the Tech Heist.
              <br />
              <br />
              Your mission: Choose your path, rise to the challenge, and lead
              your house to victory!
            </p>

            <div className="mt-6 md:mt-8">
              <HashLink
                className="inline-flex items-center justify-center rounded-full bg-[#930000] text-[#FEFEEA]
                           font-semibold sm:text-lg px-10 sm:px-15 py-2.5 sm:py-3 hover:shadow-lg transition-shadow duration-200"

                smooth to="#modules">
                Explore Modules
              </HashLink>
              {/* <a
                href="#modules"
                // className="inline-flex items-center justify-center px-6 md:px-7 lg:px-8 py-3 md:py-3.5 lg:py-4 text-[#FEFEEA] font-semibold rounded-[40px] transition-all duration-200 hover:scale-[1.02]"
                className="inline-flex items-center justify-center rounded-full bg-[#930000] text-[#FEFEEA]
                           font-semibold sm:text-lg px-10 sm:px-15 py-2.5 sm:py-3 hover:shadow-lg transition-shadow duration-200"
              >
                Explore Modules
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Module;
