import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Vantage AI', href: '#vantage' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-true-black/90 backdrop-blur-md border-gray-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-white flex items-center justify-center shadow-glow hover:bg-white hover:text-black transition-colors duration-300">
              <span className="font-black text-sm tracking-tighter">NF</span>
            </div>
            <span className="font-bold text-xl tracking-widest text-white uppercase">
              Studio
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a href="mailto:samar4sama@gmail.com" className="ml-4 px-6 py-2 bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-300 font-bold text-xs uppercase tracking-widest shadow-glow">
              Contact Me
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-gray-800 absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 border-l-2 border-transparent hover:border-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:samar4sama@gmail.com"
              className="block w-full text-left px-3 py-3 text-base font-medium text-white bg-gray-900 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;