const Sponsors = () => {
  return (
    <section className="rounded-[50px] bg-[#7E0000] w-full py-1 md:py-2 overflow-visible lg:max-h-[360px] mb-10">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Main box container */}

        <div className="text-[#FFF8E7] w-full py-10 flex flex-col items-center justify-center">
          <h2 className="text-[36px] md:text-[44px] lg:text-[48px] leading-[1] font-black text-center">
            SPONSORS
          </h2>

          <div className="px-6 sm:px-8 lg:px-10 py-8 lg:py-10">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {/* Toyota */}
              <div
                className="w-[127px] h-[127px] rounded-full bg-[#FFF8E7] flex items-center justify-center shadow-md"
                aria-label="Toyota logo"
              >
                <img
                  src="toyota-logo.png"
                  alt="Toyota"
                  className="max-w-[72%] max-h-[72%] object-contain"
                />
              </div>

              {/* Suzuki */}
              <div
                className="w-[127px] h-[127px] rounded-full bg-[#FFF8E7] flex items-center justify-center shadow-md"
                aria-label="Suzuki logo"
              >
                <img
                  src="suzuki-logo.png"
                  alt="Suzuki"
                  className="max-w-[72%] max-h-[72%] object-contain"
                />
              </div>

              {/* BMW */}
              <div
                className="w-[127px] h-[127px] rounded-full bg-[#FFF8E7] flex items-center justify-center shadow-md"
                aria-label="BMW logo"
              >
                <img
                  src="bmw-logo.png"
                  alt="BMW"
                  className="max-w-[72%] max-h-[72%] object-contain"
                />
              </div>

              {/* Mitsubishi */}
              <div
                className="w-[127px] h-[127px] rounded-full bg-[#FFF8E7] flex items-center justify-center shadow-md"
                aria-label="Mitsubishi logo"
              >
                <img
                  src="mitsubishi-logo.png"
                  alt="Mitsubishi"
                  className="max-w-[72%] max-h-[72%] object-contain"
                />
              </div>

              {/* Honda */}
              <div
                className="w-[127px] h-[127px] rounded-full bg-[#FFF8E7] flex items-center justify-center shadow-md"
                aria-label="Honda logo"
              >
                <img
                  src="honda-logo.png"
                  alt="Honda"
                  className="max-w-[72%] max-h-[72%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
