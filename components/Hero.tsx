
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
          alt="Industrial BG" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-8">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6">
              <i className="fa-solid fa-link mr-2"></i> The Bridge to Industrial Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Bridging Global <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Tech & Local</span> <br />
              Industrial Needs.
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl">
              From HVAC roots in 2005 to modern Building Automation and Fire Protection, 
              B-Gate is Saudi Arabia's trusted partner for Ali Bin Ghashash Al-Umari Group.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#divisions" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-bold text-lg text-center transition-all shadow-xl shadow-blue-900/20 transform hover:-translate-y-1">
              Our 4 Pillars
            </a>
            <a href="#projects" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-lg text-center transition-all backdrop-blur-sm">
              Project Portfolio
            </a>
          </div>

          <div className="grid grid-cols-3 gap-10 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white">2005</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider mt-1">Established</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">UL/FM</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider mt-1">Standard Approved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">SABIC/Aramco</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider mt-1">Core Supplier</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
