import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-sm font-medium tracking-wide backdrop-blur-sm"
            >
              Available for new opportunities
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-[1.15]"
            >
              Architecting Intelligent <br className="hidden sm:block" />
              <span className="text-gradient font-extrabold">Web & AI Solutions.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Hi, I'm <strong className="text-zinc-100 font-medium">Harsh Raj</strong>. A B.Tech CSE Student and AI Trainee specializing in Agentic workflows, scalable architectures, and crafting premium digital experiences.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 transition-colors rounded-xl font-medium shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2 group">
                View My Work <ArrowRight size={18} className="group-hover:tranzinc-x-1 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 transition-colors rounded-xl font-medium flex items-center justify-center gap-2 backdrop-blur-sm">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glowing animated background around image */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 rounded-[2rem] blur-xl opacity-50 animate-pulse"></div>
              
              {/* Image Frame */}
              <div className="relative w-full h-full p-2 bg-zinc-900 rounded-[2rem] border border-zinc-700 transform hover:scale-[1.02] transition-transform duration-500 z-10 shadow-2xl overflow-hidden group">
                {/* 
                  Since user didn't provide their actual photo yet, we use a placeholder 
                  that looks premium. They can replace '/profile.jpg' with their own photo.
                */}
                <img 
                  src="/profile.jpg" 
                  alt="Harsh Raj" 
                  className="w-full h-full object-cover object-top rounded-[1.5rem] group-hover:scale-110 transition-transform duration-700 shadow-inner"
                />
                
                {/* Glass overlay text */}
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-card border-none bg-zinc-900/60 backdrop-blur-md rounded-xl transform tranzinc-y-full group-hover:tranzinc-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold">Harsh Raj</p>
                    <p className="text-fuchsia-300 text-sm">AI Project Trainee & Developer</p>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl z-20 shadow-xl border border-violet-500/30"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-violet-500/20 text-violet-400 font-bold text-xl">
                  AI
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-4 glass-card p-3 rounded-xl z-20 shadow-xl border border-fuchsia-500/30"
              >
                <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">
                  UI/UX & Web
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
