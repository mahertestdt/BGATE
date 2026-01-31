
import React from 'react';
import { PARTNERS } from '../constants';

const PartnerMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest">Powering Innovation with World-Class Partners</p>
      </div>
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        <div className="flex gap-12 shrink-0 items-center justify-around min-w-full">
          {PARTNERS.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-slate-400 font-bold text-xl group-hover:text-slate-600">{partner.name}</span>
            </div>
          ))}
        </div>
        {/* Duplicated for smooth loop */}
        <div className="flex gap-12 shrink-0 items-center justify-around min-w-full">
          {PARTNERS.map((partner, idx) => (
            <div key={`${idx}-dup`} className="flex items-center gap-3 group">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-slate-400 font-bold text-xl group-hover:text-slate-600">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnerMarquee;
