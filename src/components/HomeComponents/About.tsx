import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#FFF8E7]">
      <div
        className="relative rounded-[24px] sm:rounded-[32px] bg-[#7E0000] text-[#FFF8E7] 
                   overflow-hidden shadow-xl md:min-h-[520px] lg:min-h-[560px] 
                   flex items-center justify-center py-8 sm:py-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12 
                        p-5 sm:p-8 lg:p-12 w-full max-w-7xl">
          {/* Left: Text */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
              ABOUT US
            </h2>

            <p className="mt-4 sm:mt-6 leading-relaxed text-[13px] sm:text-sm md:text-base lg:text-2xl opacity-95">
              Coder’s Cup is our FAST NUCES’ annual coding competition, designed to bring
              together the brightest problem-solvers, developers, and tech enthusiasts under
              one banner. Each year, the event challenges participants to push their creative
              and analytical limits through a series of programming and algorithmic challenges.
            </p>

            <p className="mt-3 sm:mt-4 leading-relaxed text-[13px] sm:text-sm md:text-base lg:text-2xl opacity-95">
              The Coder’s Cup aims to inspire a culture of learning, collaboration, and
              friendly competition — preparing future developers for real-world problem-solving
              while keeping the excitement and spirit of coding alive.
            </p>

            <div className="mt-6 sm:mt-8">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-[#FFF8E7] text-[#930000]
                           font-semibold px-5 sm:px-6 py-2.5 sm:py-3 hover:shadow-lg transition-shadow duration-200"
                style={{ border: "2px solid #D99413" }}
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Right: Dragon Scroll Image */}
          <div className="relative flex items-center justify-center">
            <img
              src="about-img.png"
              alt="ACM brings you the Coders Cup — unleash your inner dragon!"
              className="w-full object-contain
                         max-w-[200px] sm:max-w-[260px] md:max-w-[340px] lg:max-w-[420px]
                         drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            />
            <div
              className="pointer-events-none absolute -inset-x-6 -bottom-8 h-24
                         bg-gradient-to-t from-black/10 to-transparent blur-2xl opacity-30"
            />
          </div>
        </div>

        {/* Subtle glow accents */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-36 sm:w-40 h-36 sm:h-40 rounded-full bg-[#FFF8E7]/5 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 w-48 sm:w-56 h-48 sm:h-56 rounded-full bg-[#D99413]/10 blur-3xl" />
      </div>
    </section>
  );
};

export default AboutSection;
