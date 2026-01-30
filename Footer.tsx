import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          
          <div className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-8 h-8 border border-white flex items-center justify-center">
                <span className="text-white font-bold text-xs">NF</span>
              </div>
              <span className="font-bold text-xl text-white tracking-widest uppercase">
                Studio
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Developing NoirTube, ECO, and VANTAGE.
              <br/>
              © 2026 NF Studio.
            </p>
          </div>

          <div className="flex gap-6">
            {[Twitter, Linkedin, Github].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="mailto:samar4sama@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p>Designed by NF Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;