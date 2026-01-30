import React from 'react';
import { Play, Gamepad2, BrainCircuit } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const projects = [
  { 
    title: "NoirTube", 
    icon: Play,
    category: "Media Platform",
    description: "A comprehensive YouTube clone enhanced with premium utilities and exclusive features. Combining familiar architecture with superior functionality for an optimized streaming experience."
  },
  { 
    title: "ECO", 
    icon: Gamepad2,
    category: "Kinetic Rhythm",
    description: "A high-velocity rhythm action game driven by a synthetic audio engine. Engage the 'Pure Kinetic' phase and synchronize with the stream in a minimalist void."
  },
  { 
    title: "VANTAGE", 
    icon: BrainCircuit,
    category: "Artificial Intelligence",
    description: "A next-generation large language model interface designed for developers and data scientists to visualize complex datasets."
  },
];

const UseCases: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <ScrollReveal width="100%">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                Selected <span className="text-gray-600">Works</span>
              </h2>
              <div className="h-1 w-24 bg-white mt-2"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 max-w-sm text-right md:text-left text-lg">
              A showcase of proprietary applications developed in-house at NF Studio.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div 
                className="group relative p-8 md:p-10 border border-gray-800 bg-black/50 backdrop-blur-sm h-full flex flex-col justify-between transition-all duration-500 hover:border-white hover:bg-gray-900/30 hover:shadow-glow"
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <item.icon size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase border border-gray-800 px-3 py-1 rounded-full group-hover:border-white group-hover:text-white transition-colors">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-gray-100 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-7 mb-10 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  View Project <div className="h-px w-12 bg-white"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;