
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Divisions from './components/Divisions';
import Projects from './components/Projects';
import PartnerMarquee from './components/PartnerMarquee';
import Footer from './components/Footer';
import AIAdvisor from './components/AIAdvisor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <PartnerMarquee />
      
      {/* Historical Context Section */}
      <section id="about" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" 
                alt="Engineering Excellence" 
                className="rounded-[3rem] shadow-2xl relative z-10 border border-slate-200"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl z-20 hidden md:block border border-white/10">
                <div className="text-4xl font-bold text-emerald-500">20+</div>
                <div className="text-xs uppercase tracking-widest font-bold mt-1 opacity-60">Years of Experience</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Heritage</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Ali Bin Ghashash <br /> Al-Umari Group.
                </h3>
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Established in 2005 with a core focus on HVAC and Refrigeration, we've evolved into a 
                  comprehensive industrial conglomerate. Our dual-entity structure allows us to handle both 
                  large-scale material supply and complex engineering services.
                </p>
                <p>
                  We operate as the strategic bridge (B-Gate) for global giants like SAUTER and SIEMENS, 
                  bringing world-class Building Management Systems (BMS) and Fire Safety to the 
                  Kingdom's most critical infrastructure.
                </p>
              </div>

              <div className="flex items-center gap-8 py-6 border-y border-slate-100">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Team Member" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                    +50
                  </div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Certified Experts</div>
                  <div className="text-sm text-slate-500">On-ground in Dammam & Jubail</div>
                </div>
              </div>
              
              <a href="#divisions" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                Explore Our Expertise
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divisions />
      <Projects />

      {/* Division CTA */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-6xl font-extrabold mb-8">Let's Build the Bridge Together.</h3>
              <p className="text-xl text-slate-400 mb-12">
                Whether it's a UL/FM fire system in Jubail or a BMS solution in Dammam, 
                our engineering teams are ready for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="#contact" className="bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-900/40">
                  Request Technical Study
                </a>
                <a href="#contact" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-lg transition-all">
                  Contact Local Office
                </a>
              </div>
            </div>
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>

      <Footer />
      <AIAdvisor />
    </div>
  );
};

export default App;
