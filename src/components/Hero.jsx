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

            {/* ✅ MAIN SEO HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-[1.15]"
            >
              Harsh Raj <br className="hidden sm:block" />
              <span className="text-gradient font-extrabold">
                AI Developer & Web Engineer
              </span>
            </motion.h1>

            {/* ✅ SUB HEADING (VERY IMPORTANT FOR SEO) */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl md:text-2xl font-medium text-zinc-300 mb-4"
            >
              B.Tech CSE Student at Vivekananda Global University (VGU), Jaipur
            </motion.h2>

            {/* ✅ DESCRIPTION (SEO OPTIMIZED) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Hi, I'm <strong className="text-zinc-100 font-medium">Harsh Raj</strong>, an AI Project Trainee and passionate developer specializing in Agentic AI, React, and modern web technologies. I build scalable, intelligent, and user-focused digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 transition-colors rounded-xl font-medium shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2 group">
                View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 transition-all rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] text-white hover:scale-105">
                Hire Me !
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
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto lg:mx-0">

              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse"></div>

              <div className="relative w-full h-full p-2 bg-zinc-900 rounded-full border border-zinc-700 transform hover:scale-[1.02] transition-transform duration-500 z-10 shadow-2xl overflow-hidden group">
                <img
                  src="./profile.jpg"
                  alt="Harsh Raj - VGU Jaipur AI Developer"
                  className="w-full h-full object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-700 shadow-inner"
                />
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 md:-top-6 md:-right-6 glass-card p-4 rounded-full z-20 shadow-xl border border-violet-500/30"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-violet-500/20 text-violet-400 font-extrabold text-xl md:text-2xl font-serif">
                  H
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