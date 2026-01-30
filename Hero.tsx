import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-black flex flex-col items-center justify-center min-h-[95vh]">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg z-0 pointer-events-none opacity-20"></div>
      
      {/* Breathing Radial Gradient */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.08, 0.03], 
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block mb-8 px-5 py-2 border border-gray-800 rounded-full bg-gray-900/50 backdrop-blur-md"
        >
          <span className="text-gray-400 text-xs font-mono uppercase tracking-[0.2em]">Digital Experience Laboratory</span>
        </motion.div>
        
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-9xl font-black text-white leading-none mb-8 tracking-tighter flex items-center justify-center gap-4 md:gap-8"
        >
          <div className="flex overflow-hidden">
            {['N', 'F'].map((char, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex overflow-hidden text-transparent text-stroke-white opacity-90">
             {['S', 'T', 'U', 'D', 'I', 'O'].map((char, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          The creative hub behind <span className="text-white font-bold">NoirTube</span>, <span className="text-white font-bold">ECO</span>, and <span className="text-white font-bold">VANTAGE</span>. 
          Building the intersection of entertainment, gaming, and artificial intelligence.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a href="#projects" className="group relative px-10 py-5 bg-white text-black font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a href="mailto:samar4sama@gmail.com" className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all duration-300">
            Contact Me
          </a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => {
            const projects = document.getElementById('projects');
            if (projects) {
              projects.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          animate={{ 
            y: [0, 10, 0],
            boxShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 15px rgba(255,255,255,0.2)",
              "0 0 0px rgba(255,255,255,0)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="p-3 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;