
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              B-GATE <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Ali Bin Ghashash Al-Umari Est. Providing the bridge between global industrial tech and the Kingdom's vision since 2005.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#contact" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Headquarters</h5>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-emerald-500"></i>
                <span>P.O. Box 35449, Dammam 31488,<br />Kingdom of Saudi Arabia</span>
              </p>
              <p className="flex items-center gap-3 text-slate-300">
                <i className="fa-solid fa-phone text-emerald-500"></i>
                <span>+966 13 833 4699</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-emerald-500"></i>
                <span>mail@bgate-sa.com</span>
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Fire Safety Division</h5>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-blue-500"></i>
                <span>Madina Munawarah St,<br />Jubail 35526, KSA</span>
              </p>
              <p className="flex items-center gap-3 text-slate-300">
                <i className="fa-solid fa-phone text-blue-500"></i>
                <span>+966 13 363 5156</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="fa-solid fa-shield-halved text-blue-500"></i>
                <span>Internal FSD Portal</span>
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider">
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">Our Heritage</a></li>
              <li><a href="#divisions" className="hover:text-emerald-500 transition-colors">Core Divisions</a></li>
              <li><a href="#projects" className="hover:text-emerald-500 transition-colors">Landmark Projects</a></li>
              <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Safety Portal</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold">© 2024 B-Gate Group. Empowering Saudi Industry Since 2005.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Privacy & Terms</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Vendor Registration</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Vision 2030</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
