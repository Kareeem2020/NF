import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-40 bg-black relative overflow-hidden border-t border-gray-900">
      
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <ScrollReveal width="100%">
          <h2 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter">
            HAVE AN <span className="text-stroke-white text-transparent">IDEA?</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} width="100%">
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            NF Studio is always looking for new challenges. Let's build the next generation of digital tools together.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4} width="100%">
           <motion.a 
            href="mailto:samar4sama@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-16 py-8 bg-white text-black font-black text-xl uppercase tracking-widest shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-shadow duration-500"
          >
            Initiate Contact
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;