
import React from 'react';
import { SERVICES } from '../constants';

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Comprehensive ICT Solutions</h3>
          <p className="text-lg text-slate-600">
            From localized data centers to nation-wide managed networks, we provide the backbone for Saudi Arabia's digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <i className={`fa-solid ${service.icon} text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-blue-600 font-bold group-hover:gap-3 gap-2 transition-all"
              >
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
