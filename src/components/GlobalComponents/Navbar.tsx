import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { title: 'Home', link: '/' },
    { title: "Coder's Cup", link: '/coders-cup' },
    { title: 'Modules', link: '/modules' },
    { title: 'Sponsors', link: '/sponsors' },
  ];

  return (
    <nav className="sticky top-0 z-[1000] w-full bg-transparent">
      <div className="absolute flex items-center justify-center w-full mx-auto pt-4 md:pt-6 px-4 md:px-8">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-center gap-4">
          <a
            href="/register"
            className="px-6 md:px-8 py-2.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#930000', border: '3px solid #D99413' }}
          >
            Register
          </a>

          <div
            className="flex items-center gap-1 px-4 md:px-6 py-2 rounded-full"
            style={{ backgroundColor: '#930000', border: '3px solid #D99413' }}
          >
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(item.title);
                }}
                className={`px-3 md:px-5 py-1.5 text-white hover:text-[#D99413] transition-colors duration-200 ${
                  activeNav === item.title ? 'font-bold' : 'font-semibold'
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <a
            href="/chatbot"
            className="px-6 md:px-8 py-2.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#930000', border: '3px solid #D99413' }}
          >
            Probot
          </a>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <a
            href="/register"
            className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300"
            style={{ backgroundColor: '#930000', border: '2px solid #D99413' }}
          >
            Register
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#930000]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <a
            href="/chatbot"
            className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300"
            style={{ backgroundColor: '#930000', border: '2px solid #D99413' }}
          >
            Probot
          </a>
        </div>

        {mobileMenuOpen && (
          <div
            className="lg:hidden mt-4 py-4 px-4 rounded-2xl"
            style={{ border: '3px solid #D99413' }}
          >
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(item.title);
                  setMobileMenuOpen(false);
                }}
                className={`block py-3 px-4 text-gray-800 hover:text-[#930000] transition-colors duration-200 border-b border-[#D99413] last:border-b-0 ${
                  activeNav === item.title ? 'font-bold' : 'font-semibold'
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
