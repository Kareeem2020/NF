import React from 'react';
import { Cpu, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

const FeatureSplit: React.FC = () => {
  return (
    <section id="vantage" className="py-40 bg-dark-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-white via-transparent to-transparent opacity-20"></div>
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-white opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: VANTAGE Details */}
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 rounded-full mb-8 backdrop-blur-md">
                 <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"></span>
                 <span className="text-xs font-mono uppercase text-white tracking-wider">Project Spotlight</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                VANTAGE <span className="text-gray-600 font-light">AI</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                VANTAGE is not just a chatbot. It is a highly specialized artificial intelligence designed for rapid data synthesis and creative problem solving. Built to bridge the gap between raw data and actionable insight.
              </p>
            </ScrollReveal>
            
            <div className="space-y-8">
              <ScrollReveal delay={0.3}>
                <div className="flex items-start group">
                  <div className="mt-1 mr-6 flex-shrink-0 w-12 h-12 bg-black border border-white/20 flex items-center justify-center rounded transition-colors group-hover:border-white">
                    <Cpu size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Neural Processing</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Advanced algorithms designed for high-fidelity context retention across long sessions.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex items-start group">
                  <div className="mt-1 mr-6 flex-shrink-0 w-12 h-12 bg-black border border-white/20 flex items-center justify-center rounded transition-colors group-hover:border-white">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Natural Language</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Human-like interaction with adaptive tone modulation based on user sentiment.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={0.5}>
              <button className="mt-16 group relative px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]">
                <span className="relative z-10 flex items-center gap-3">
                  Try Vantage Beta 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </ScrollReveal>
          </div>

          {/* Right Column: VANTAGE UI Mockup */}
          <div className="order-1 lg:order-2 perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: 10, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative bg-black border border-white/10 p-2 rounded-xl shadow-2xl"
            >
              {/* Screen Content */}
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 min-h-[500px] flex flex-col relative">
                
                {/* Chat Header */}
                <div className="bg-black/90 backdrop-blur p-5 border-b border-gray-800 flex justify-between items-center z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-glow">
                      <Sparkles size={18} className="text-black" fill="black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm tracking-wide">VANTAGE</h3>
                      <p className="text-emerald-500 text-[10px] uppercase tracking-widest font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Online
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-700"></div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-8 space-y-8 font-mono text-sm relative">
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                  {/* User Msg */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-gray-800 text-gray-100 px-6 py-4 rounded-2xl rounded-tr-sm max-w-[85%] leading-relaxed border border-gray-700">
                      Analyze the current efficiency of the ECO game engine.
                    </div>
                  </motion.div>

                  {/* Bot Msg */}
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.5 }}
                     className="flex justify-start"
                  >
                    <div className="bg-white text-black px-6 py-4 rounded-2xl rounded-tl-sm max-w-[85%] shadow-[0_0_20px_rgba(255,255,255,0.15)] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-black"></div>
                      <p className="font-bold mb-3 text-[10px] uppercase tracking-widest text-gray-500">VANTAGE Analysis:</p>
                      <p className="leading-relaxed">Running diagnostics. ECO rendering pipeline is operating at <span className="font-bold">98% efficiency</span>. Framerates are stable across mobile devices.</p>
                    </div>
                  </motion.div>
                  
                  {/* User Msg */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 }}
                    className="flex justify-end"
                  >
                     <div className="bg-gray-800 text-gray-100 px-6 py-4 rounded-2xl rounded-tr-sm max-w-[85%] leading-relaxed border border-gray-700">
                      Excellent. Generate the next update log.
                    </div>
                  </motion.div>
                </div>

                {/* Input Area */}
                <div className="p-5 bg-black border-t border-gray-800 z-10">
                  <div className="h-12 bg-gray-900 border border-gray-800 rounded flex items-center px-4">
                     <div className="w-1.5 h-5 bg-gray-700 animate-pulse"></div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;