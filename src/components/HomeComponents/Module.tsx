const Module = () => {
  return (
    <section className="relative bg-[#FFF8E7] w-full py-14 md:py-20 overflow-visible">
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="modules-circle-bg.png"
          alt="modules section decorative background"
          className="w-full max-w-7xl opacity-90 object-contain z-0"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <h2 className="text-[#930000] text-[36px] md:text-[44px] lg:text-[48px] leading-[1] font-black text-center">
          Introducing New Modules
        </h2>

        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              <a
                href="#modules"
                className="inline-flex items-center justify-center px-6 md:px-7 lg:px-8 py-3 md:py-3.5 lg:py-4 text-[#FFF8E7] font-semibold rounded-[40px] transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: "#930000",
                  border: "2px solid #D99413",
                }}
              >
                Explore Modules
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Module;
