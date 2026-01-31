
import React from 'react';
import { DIVISIONS } from '../constants';

const Divisions: React.FC = () => {
  return (
    <section id="divisions" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Core Competencies</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Four Pillars of B-Gate</h3>
          </div>
          <p className="text-slate-600 max-w-sm mb-2">
            Integrated engineering and supply solutions for the Kingdom's most demanding sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIVISIONS.map((division, idx) => (
            <div key={idx} className="group relative bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:bg-white hover:shadow-2xl">
              <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <i className={`fa-solid ${division.icon} text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{division.type}</h4>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {division.description}
              </p>
              <div className="pt-6 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Primary Tech</span>
                <span className="text-sm font-semibold text-blue-600">{division.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
