import {
  Phone,
  AtSign,
  MapPin,
  Facebook,
  Instagram
} from "lucide-react";

// Custom LinkedIn icon component since Lucide's is deprecated
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Footer = () => {
  return (
    <section className="bg-[#000000] text-[#FEFEEA] w-full overflow-visible">
      {/* Main part */}
      <div className="w-full border-b border-[#ffffff]">
        <div className="w-full max-w-7xl lg:mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div className="flex justify-center sm:justify-start lg:justify-center">
              <img
                src="coders-cup-trophy.png"
                alt="Coder's Cup trophy"
                className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[250px] h-auto max-h-[280px] sm:max-h-[330px] object-contain select-none"
              />
            </div>

            {/* Description paragraph */}
            <div className="lg:max-w-[360px] col-span-2">
              <p className="text-sm sm:text-[16px] md:text-[22px] lg:text-[24px] font-medium leading-relaxed sm:leading-[1] opacity-95">
                Coder’s Cup is our FAST NUCES’ annual coding competition,
                designed to bring together the brightest problem-solvers,
                developers, and tech enthusiasts under one banner.
              </p>
              <p className="mt-3 sm:mt-4 text-base sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-relaxed sm:leading-[1] opacity-95">
                Each year, participants push their limits through coding
                challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h3 className="text-base sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold tracking-wider">
                Quick Links
              </h3>
              <nav className="mt-3 sm:mt-4 flex flex-col gap-2 sm:gap-3">
                <a
                  href="/"
                  className="text-sm sm:text-[18px] md:text-[19px] lg:text-[20px] font-normal tracking-wider hover:text-[#FFF] transition-colors"
                >
                  Home
                </a>
                <a
                  href="/coders-cup"
                  className="text-[18px] md:text-[19px] lg:text-[20px] font-normal tracking-wider hover:text-[#FFF] transition-colors"
                >
                  Coder’s Cup
                </a>
                <a
                  href="/#modules"
                  className="text-[18px] md:text-[19px] lg:text-[20px] font-normal tracking-wider hover:text-[#FFF] transition-colors"
                >
                  Module’s
                </a>
                {/* <a
                  href="/sponsors"
                  className="text-[18px] md:text-[19px] lg:text-[20px] font-normal tracking-wider hover:text-[#FFF] transition-colors"
                >
                  Sponsors
                </a> */}
              </nav>
            </div>

            {/* Contacts */}
            <div>
              <div className="text-left">
                <h3 className="text-base sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold tracking-wider">
                  Contacts
                </h3>
                <ul className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                  <li className="flex justify-start gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <a
                      href="tel:+923330201433"
                      className="text-sm sm:text-base hover:text-[#FFF] transition-colors"
                    >
                      +92 333 0201433
                    </a>
                  </li>
                  <li className="flex justify-start gap-2 sm:gap-3">
                    <AtSign className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <a
                      href="mailto:khi.acm@nu.edu.pk"
                      className="text-sm sm:text-base hover:text-[#FFF] transition-colors break-all"
                    >
                      khi.acm@nu.edu.pk
                    </a>
                  </li>
                  <li className="flex justify-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">FAST-NUCES KARACHI</span>
                  </li>
                </ul>
              </div>
              <div className="text-left pt-4 sm:pt-6">
                <h3 className="text-base sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold tracking-wider">
                  About the Developers
                </h3>
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-4">
                  <li className="flex justify-start gap-3 ">
                    <a href="https://www.linkedin.com/in/owais-rafiq-639494253/" target="_blank" className="hover:text-[#FFF] transition-colors hover:underline flex items-center gap-2"><LinkedInIcon className="w-5 h-5" /> <p>Owais Rafiq</p></a>
                  </li>
                  <li className="flex justify-start gap-3 ">
                    <a href="https://www.linkedin.com/in/arham-alvi-62068b1bb/" target="_blank" className="hover:text-[#FFF] transition-colors hover:underline flex items-center gap-2"><LinkedInIcon className="w-5 h-5" /> <p>Arham Alvi</p></a>
                  </li>
                   <li className="flex justify-start gap-3 ">
                    <a href="https://www.linkedin.com/in/shareeq-rashid-a4b7a4285/" target="_blank" className="hover:text-[#FFF] transition-colors hover:underline flex items-center gap-2"><LinkedInIcon className="w-5 h-5" /> <p>Shareeq Rashid</p></a>
                  </li>
                  <li className="flex justify-start gap-3">
                    <a href="https://www.linkedin.com/in/mariumnoor29" target="_blank" className="hover:text-[#FFF] transition-colors hover:underline flex items-center gap-2"><LinkedInIcon className="w-5 h-5" /> <p>Marium Noor</p></a>
                  </li>
                 
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-xs sm:text-[12px] md:text-[16px] lg:text-[20px] opacity-90 text-center md:text-left max-w-xs sm:max-w-none">
          © 2025 Design By Hasan Sami, Asjad Bin Rehan, Sameed Jamal. All Rights
          Reserved.
        </p>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.facebook.com/acmnuceskhi"
            aria-label="Facebook"
            className="w-8 h-8 sm:w-9 sm:h-9 bg-white text-black rounded-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.instagram.com/acmnuceskhi/"
            aria-label="Instagram"
            className="w-8 h-8 sm:w-9 sm:h-9 bg-white text-black rounded-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/acmnuceskhi/"
            aria-label="LinkedIn"
            className="w-8 h-8 sm:w-9 sm:h-9 bg-white text-black rounded-[6px] flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
