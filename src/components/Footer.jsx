import React from 'react';
import { Code, Globe, Mail, Heart, Sparkles, MoveRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: Code, url: 'https://github.com/harshinnet0' },
    { name: 'LinkedIn', icon: Globe, url: 'https://www.linkedin.com/in/harsh-raj-33ba66261' },
    { name: 'Email', icon: Mail, url: 'mailto:info.harsh.innet@gmail.com' }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
  ];

  const recentTech = ['React.js', 'Next.js', 'Tailwind', 'Python', 'AI / GenAI'];

  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-8 overflow-hidden z-20">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[100px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 inline-block mb-4">
                &lt;Harsh.Raj /&gt;
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Bridging design aesthetics and high-performance engineering to deliver premium enterprise digital experiences. Always learning, always building.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-sm font-semibold mb-6 flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-400" /> Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-zinc-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group w-fit text-sm"
                  >
                    <span className="w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="col-span-1">
            <h3 className="text-white text-sm font-semibold mb-6">Current Stack</h3>
            <div className="flex flex-wrap gap-2">
              {recentTech.map((tech, i) => (
                <span 
                  key={i} 
                  className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white/5 text-zinc-400 rounded border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-all group"
              >
                View full portfolio <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="col-span-1">
            <h3 className="text-white text-sm font-semibold mb-6">Let's Connect</h3>
            <p className="text-zinc-400 text-sm mb-6">Open for new opportunities and exciting collaborations.</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 shadow-md shadow-black/20"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <a 
              href="mailto:info.harsh.innet@gmail.com"
              className="inline-flex items-center justify-center gap-2 w-full text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all group mt-6 rounded-lg px-4 py-3"
            >
              Start a conversation <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            &copy; {currentYear} Harsh Raj. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
            <span>Crafted with</span>
            <Heart size={14} className="text-cyan-500 animate-pulse fill-cyan-500/30" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
