const Sponsors = () => {
  return (
    <section className="rounded-t-[50px] bg-[#7E0000] w-full py-1 md:py-2 overflow-visible lg:max-h-[360px]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-[#FFF8E7] w-full py-10 flex flex-col items-center justify-center">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[1] font-black text-center">
            SPONSORS
          </h2>

          <div className="px-4 sm:px-6 lg:px-10 py-8 lg:py-10">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              
              {/* Reusable logo circle */}
              {[
                { src: "toyota-logo.png", alt: "Toyota" },
                { src: "suzuki-logo.png", alt: "Suzuki" },
                { src: "bmw-logo.png", alt: "BMW" },
                { src: "mitsubishi-logo.png", alt: "Mitsubishi" },
                { src: "honda-logo.png", alt: "Honda" },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-[#FFF8E7] flex items-center justify-center shadow-md"
                  aria-label={`${logo.alt} logo`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-[65%] max-h-[65%] object-contain"
                  />
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
