
import React, { useState, useEffect } from 'react';
import { NAVIGATION } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-black flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">B-GATE</span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transform transition active:scale-95">
              Portal Login
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 p-2"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect absolute w-full top-full left-0 p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-slate-700 font-medium px-4 py-2 hover:bg-slate-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">
              Portal Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
