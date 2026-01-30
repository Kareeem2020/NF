import React from 'react';
import { Code, Box, Layers } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

const HexagonFeature: React.FC = () => {
  return (
    <section id="philosophy" className="py-40 bg-black relative border-t border-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-24">
          
          {/* Geometric Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-md aspect-square flex items-center justify-center"
          >
            {/* Outer Circle */}
            <div className="absolute inset-0 border border-gray-800 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-12 border border-gray-800/50 rounded-full animate-spin-reverse-slow"></div>
            
            {/* Center Box */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative z-10 bg-black border border-white w-40 h-40 flex items-center justify-center shadow-glow transform rotate-45 cursor-pointer group"
            >
              <div className="transform -rotate-45 group-hover:rotate-45 transition-transform duration-700">
                 <Box size={56} className="text-white" strokeWidth={0.8} />
              </div>
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
               <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full shadow-glow -translate-x-1/2 -translate-y-1.5"></div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="max-w-lg">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Layers size={24} className="text-white" strokeWidth={1.5} />
                <span className="text-white font-bold uppercase tracking-widest text-xs">Core Philosophy</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
                Simplicity in <br />
                <span className="text-gray-600">Complex Systems</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-gray-400 text-xl leading-relaxed mb-12">
                From the immersive worlds of <span className="text-white">ECO</span> to the neural pathways of <span className="text-white">VANTAGE</span>, NF Studio focuses on clean architecture and user-centric design.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-12 border-t border-gray-800 pt-10">
                <div>
                  <h4 className="text-white font-black text-4xl mb-2">3+</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Major Projects</p>
                </div>
                <div>
                  <h4 className="text-white font-black text-4xl mb-2">100%</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">In-House Dev</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HexagonFeature;