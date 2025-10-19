import {
  Phone,
  AtSign,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-[#000000] text-[#FFF8E7] w-full overflow-visible">
      {/* Main part */}
      <div className="w-full border-b border-[#ffffff]">
        <div className="w-full max-w-7xl lg:mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            <div className="flex justify-start lg:justify-center">
              <img
                src="coders-cup-trophy.png"
                alt="Coder's Cup trophy"
                className="w-[180px] sm:w-[200px] lg:w-[250px] h-auto max-h-[330px] object-contain select-none"
              />
            </div>

            {/* Description paragraph */}
            <div className="lg:max-w-[360px]">
              <p className="text-[16px] md:text-[22px] lg:text-[24px] font-medium leading-[1] opacity-95">
                Coder’s Cup is our FAST NUCES’ annual coding competition,
                designed to bring together the brightest problem-solvers,
                developers, and tech enthusiasts under one banner.
              </p>
              <p className="mt-4 text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1] opacity-95">
                Each year, participants push their limits through coding
                challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold tracking-wider">
                Quick Links
              </h3>
              <nav className="mt-4 flex flex-col gap-3">
                <a
                  href="/"
                  className="text-[18px] md:text-[19px] lg:text-[20px] font-normal tracking-wider hover:text-[#FFF] transition-colors"
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
                  href="/modules"
                  className="text-[18px] md:text-[19px] lg:text-[20px] font-normal tracking-wider hover:text-[#FFF] transition-colors"
                >
                  Module’s
                </a>
                <a
                  href="/sponsors"
                  className="text-[18px] md:text-[19px] lg:text-[20px] font-normal tracking-wider hover:text-[#FFF] transition-colors"
                >
                  Sponsors
                </a>
              </nav>
            </div>

            {/* Contacts */}
            <div className="text-left">
              <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold tracking-wider">
                Contacts
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex justify-start gap-3">
                  <Phone className="w-5 h-5" />
                  <a
                    href="tel:+923000000000"
                    className="hover:text-[#FFF] transition-colors"
                  >
                    +92 300 0000000
                  </a>
                </li>
                <li className="flex justify-start gap-3">
                  <AtSign className="w-5 h-5" />
                  <a
                    href="mailto:acmcoderscup@gmail.com"
                    className="hover:text-[#FFF] transition-colors"
                  >
                    acmcoderscup@gmail.com
                  </a>
                </li>
                <li className="flex justify-start gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>FAST-NUCES KARACHI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[12px] sm:text-[13px] md:text-[16px] lg:text-[20px] opacity-90 text-center md:text-left">
          © 2025 Design By Hasan Sami, Asjad Bin Rehan, Sameed Jamal. All Rights
          Reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="w-9 h-9 bg-white text-black rounded-[6px] flex items-center justify-center"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 bg-white text-black rounded-[6px] flex items-center justify-center"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-9 h-9 bg-white text-black rounded-[6px] flex items-center justify-center"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="w-9 h-9 bg-white text-black rounded-[6px] flex items-center justify-center"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
