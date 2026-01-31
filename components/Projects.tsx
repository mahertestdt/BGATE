
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Proven Excellence</h2>
          <h3 className="text-4xl font-extrabold">Landmark Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all">
              <div className="md:w-1/3 h-48 md:h-auto bg-slate-800">
                <img 
                  src={`https://picsum.photos/seed/project-${idx}/400/400`} 
                  alt={project.client} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <i className="fa-solid fa-location-dot"></i> {project.location}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-2">{project.client}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-500/20">
              <i className="fa-solid fa-helmet-safety"></i>
            </div>
            <div>
              <h5 className="text-xl font-bold">Safety First Philosophy</h5>
              <p className="text-slate-400 text-sm">Head-to-toe HSE standards in every project.</p>
            </div>
          </div>
          <a href="#contact" className="whitespace-nowrap bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all text-center">
            Inquire About Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
