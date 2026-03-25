import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, ExternalLink, Download } from 'lucide-react';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Real certificates from public folder. Update the 'name' and 'issuer' as needed.
  const certificates = [
    { id: 1, name: "Professional Certificate 1", issuer: "Verified Credential", date: "2026", image: "./cert1.jpeg", link: "./cert1.jpeg" },
    { id: 2, name: "Professional Certificate 2", issuer: "Verified Credential", date: "2026", image: "./cert2.jpeg", link: "./cert2.jpeg" },
    { id: 3, name: "Professional Certificate 3", issuer: "Verified Credential", date: "2026", image: "./cert3.jpeg", link: "./cert3.jpeg" },
    { id: 4, name: "Professional Certificate 4", issuer: "Verified Credential", date: "2026", image: "./cert4.jpeg", link: "./cert4.jpeg" },
    { id: 5, name: "Professional Certificate 5", issuer: "Verified Credential", date: "2026", image: "./cert5.jpeg", link: "./cert5.jpeg" },
    { id: 6, name: "Professional Certificate 6", issuer: "Verified Credential", date: "2026", image: "./cert6.jpeg", link: "./cert6.jpeg" },
    { id: 7, name: "Professional Certificate 7", issuer: "Verified Credential", date: "2026", image: "./cert7.jpeg", link: "./cert7.jpeg" },
    { id: 8, name: "Professional Certificate 8", issuer: "Verified Credential", date: "2026", image: "./cert8.jpeg", link: "./cert8.jpeg" },
    { id: 9, name: "Professional Certificate 9", issuer: "Verified Credential", date: "2026", image: "./cert9.jpeg", link: "./cert9.jpeg" },
    { id: 10, name: "Professional Certificate 10", issuer: "Verified Credential", date: "2026", image: "./cert10.jpeg", link: "./cert10.jpeg" },
    { id: 11, name: "Professional Certificate 11", issuer: "Verified Credential", date: "2026", image: "./cert11.jpeg", link: "./cert11.jpeg" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50) {
      nextSlide();
    } else if (swipe > 50) {
      prevSlide();
    }
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-md">
            <Award size={16} /> Verified Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Certifications</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg pt-2 leading-relaxed">
            A showcase of my continuous learning and professional milestones. Swipe or use the arrows to navigate.
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] w-full flex items-center justify-center perspective-[1200px]">

          <AnimatePresence mode="popLayout">
            {certificates.map((cert, index) => {
              const diff = index - currentIndex;
              const isCenter = diff === 0;
              const isRight1 = diff === 1 || (currentIndex === certificates.length - 1 && index === 0);
              const isLeft1 = diff === -1 || (currentIndex === 0 && index === certificates.length - 1);

              let x = 0;
              let scale = 1;
              let zIndex = 0;
              let opacity = 0;
              let rotateY = 0;

              if (isCenter) {
                x = 0;
                scale = 1;
                zIndex = 30;
                opacity = 1;
                rotateY = 0;
              } else if (isRight1) {
                x = '35%';
                scale = 0.85;
                zIndex = 20;
                opacity = 0.5;
                rotateY = -15;
              } else if (isLeft1) {
                x = '-35%';
                scale = 0.85;
                zIndex = 20;
                opacity = 0.5;
                rotateY = 15;
              } else {
                x = diff > 0 ? '50%' : '-50%';
                scale = 0.7;
                zIndex = 10;
                opacity = 0;
                rotateY = diff > 0 ? -25 : 25;
              }

              return (
                <motion.div
                  key={cert.id}
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  initial={false}
                  animate={{
                    x,
                    scale,
                    zIndex,
                    opacity,
                    rotateY
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className={`absolute w-[90%] sm:w-[75%] max-w-4xl aspect-video rounded-xl md:rounded-2xl border bg-[#050510] overflow-hidden cursor-grab active:cursor-grabbing backdrop-blur-sm flex flex-col transition-all duration-[800ms] ${isCenter ? 'border-cyan-500/50 shadow-[0_0_50px_-15px_rgba(6,182,212,0.5)]' : 'border-white/10 shadow-2xl'}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${isCenter ? 'from-cyan-900/40 via-black/40' : 'from-black/90 via-black/40'} to-transparent z-10 pointer-events-none transition-colors duration-700`} />

                  {/* The Image - Using object-contain so it never crops */}
                  <div className="flex-grow w-full relative p-4 flex items-center justify-center pointer-events-none">
                    <motion.img
                      animate={isCenter ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      src={cert.image}
                      alt={cert.name}
                      className={`max-w-full max-h-[85%] object-contain rounded-md shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-700 ${isCenter ? 'drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]' : ''}`}
                      draggable="false"
                    />
                  </div>

                  {/* Card Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 20 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/20 backdrop-blur-md rounded-full text-xs font-semibold text-cyan-300 mb-3 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                        {cert.date}
                      </div>
                      <h3 className="text-xl sm:text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
                        {cert.name}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <p className="text-zinc-300 font-medium text-sm sm:text-base drop-shadow-md">{cert.issuer}</p>

                        {isCenter && (
                          <div className="flex flex-col sm:flex-row items-center gap-3">
                            <div
                              className="flex items-center w-full justify-center gap-2 px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-pointer group pointer-events-auto backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                              onClick={() => window.open(cert.link, '_blank')}
                            >
                              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase relative z-10">Verify</span>
                              <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                            
                            <a
                              href={cert.image}
                              download={`Harsh_Raj_${cert.name.replace(/\s+/g, '_')}.jpg`}
                              className="flex items-center w-full justify-center gap-2 px-6 py-2.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white transition-all duration-300 cursor-pointer group pointer-events-auto backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.15)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)]"
                            >
                              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase relative z-10">Download</span>
                              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2 hidden sm:flex">
            {certificates.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-cyan-500' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
