import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Coder’s Cup", href: "/coders-cup" },
    { name: "Modules", href: "/modules" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  const THEME = {
    primary: "#930000",
    dark: "#7E0000",
    neutral: "#131313",
    accent: "#D99413",
  };

  return (
    <nav className="w-full px-4 pt-4 pb-0 font-urbanist sticky top-0 z-50">
      <div
        className={`mx-auto transition-all duration-500 ease-in-out ${
          isScrolled ? "max-w-6xl" : "max-w-7xl"
        }`}
      >
        {/* ===== Desktop Navbar ===== */}
        <div
          className={`hidden lg:flex items-center justify-center sm:bg-transparent rounded-full px-4 sm:px-6 transition-all duration-500 ease-in-out`}
        >
          {/* Register Button */}
          <a
            href="/register"
            className="px-5 py-2 sm:px-7 sm:py-3 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: THEME.primary,
              border: `2px solid ${THEME.accent}`,
            }}
          >
            Register
          </a>

          {/* Center Nav Links */}
          <div
            className="flex items-center mx-4 sm:mx-6 px-4 sm:px-8 py-2 sm:py-3 rounded-full"
            style={{
              backgroundColor: THEME.primary,
              border: `2px solid ${THEME.accent}`,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 sm:px-5 text-white font-medium hover:text-[#FFF8E7] transition-all duration-200 text-sm sm:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Probot Button */}
          <a
            href="/probot"
            className="px-5 py-2 sm:px-7 sm:py-3 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: THEME.primary,
              border: `2px solid ${THEME.accent}`,
            }}
          >
            PoBot
          </a>
        </div>

        {/* ===== Mobile Navbar ===== */}
        <div
          className={`md:hidden rounded-full px-4 py-2 transition-all duration-500 ease-in-out relative`}
          style={{ backgroundColor: THEME.neutral }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/logo.png" alt="logo" className="w-6 h-6" />
              </div>
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded-full hover:bg-[#7E0000]/40 transition text-white"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ===== Mobile Menu Modal ===== */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[60] flex items-start justify-center p-4">
            {/* Backdrop */}
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Menu Card */}
            <div className="relative w-full max-w-sm">
              <div
                className="rounded-3xl shadow-2xl border p-4"
                style={{
                  backgroundColor: THEME.neutral,
                  borderColor: THEME.primary,
                }}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between rounded-full px-3 py-2 border"
                  style={{
                    backgroundColor: THEME.neutral,
                    borderColor: THEME.primary,
                  }}
                >
                  <div className="w-7 h-7 flex items-center justify-center">
                    <img src="/logo.png" alt="logo" className="w-5 h-5" />
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1.5 rounded-full hover:opacity-80 text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Menu List */}
                <nav
                  className="mt-3 rounded-2xl overflow-hidden border"
                  style={{ borderColor: THEME.primary }}
                >
                  <a
                    href="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-white border-b border-[#930000]"
                  >
                    Register
                  </a>
                  {navItems.map((item, i) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-white ${
                        i !== navItems.length - 1 ? "border-b border-[#930000]" : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="/probot"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-white border-t border-[#930000]"
                  >
                    PoBot
                  </a>
                </nav>

                {/* CTA */}
                <a
                  href="/contact-us"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 block w-full text-center rounded-full font-semibold py-3 shadow-md hover:shadow-lg transition"
                  style={{
                    color: "#FFF",
                    backgroundColor: THEME.primary,
                    border: `2px solid ${THEME.dark}`,
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
