import React from 'react';
import { Code, Globe, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-gradient">
            &lt;Harsh.Raj /&gt;
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Code size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-raj-33ba66261" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Globe size={20} />
            </a>
            <a href="mailto:info.harsh.innet@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Harsh Raj. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm flex items-center gap-1">
            Built with React & Tailwind <Heart size={14} className="text-orange-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
