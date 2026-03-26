import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, ExternalLink, Download } from 'lucide-react';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    { id: 1, name: "Professional Certificate 1", issuer: "Verified Credential", date: "2026", image: "./cert1.jpeg", link: "./cert1.jpeg" },
    { id: 2, name: "Professional Certificate 2", issuer: "Verified Credential", date: "2026", image: "./cert2.jpeg", link: "./cert2.jpeg" },
    { id: 3, name: "Professional Certificate 3", issuer: "Verified Credential", date: "2026", image: "./cert3.jpeg", link: "./cert3.jpeg" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const handleDragEnd = (e, { offset }) => {
    if (offset.x < -50) nextSlide();
    else if (offset.x > 50) prevSlide();
  };

  return (
    <section id="certificates" className="py-16 relative overflow-hidden">

      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm mb-4">
            <Award size={16} /> Verified Credentials
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Professional Certifications
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Swipe or use arrows to navigate
          </p>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[420px] sm:min-h-[500px] flex items-center justify-center">

          <AnimatePresence>
            {certificates.map((cert, index) => {
              const diff = index - currentIndex;
              const isCenter = diff === 0;

              let x = 0;
              let scale = 1;
              let opacity = 0;

              if (isCenter) {
                x = 0;
                scale = 1;
                opacity = 1;
              } 
              else if (diff === 1 || (currentIndex === certificates.length - 1 && index === 0)) {
                x = '25%';
                scale = 0.85;
                opacity = 0.5;
              } 
              else if (diff === -1 || (currentIndex === 0 && index === certificates.length - 1)) {
                x = '-25%';
                scale = 0.85;
                opacity = 0.5;
              } 
              else {
                x = 0;
                scale = 0.7;
                opacity = 0;
              }

              return (
                <motion.div
                  key={cert.id}
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  animate={{ x, scale, opacity }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-[95%] sm:w-[80%] max-w-3xl bg-[#050510] rounded-xl border border-white/10 shadow-xl flex flex-col"
                >

                  {/* IMAGE */}
                  <div className="p-4 flex justify-center items-center">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="max-h-[160px] sm:max-h-[260px] object-contain"
                      draggable="false"
                    />
                  </div>

                  {/* CONTENT (NO ABSOLUTE → NO OVERLAP) */}
                  {isCenter && (
                    <div className="w-full p-4 sm:p-6 text-center">

                      <p className="text-xs text-cyan-400 mb-1">
                        {cert.date}
                      </p>

                      <h3 className="text-lg sm:text-xl text-white font-bold mb-1">
                        {cert.name}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4">
                        {cert.issuer}
                      </p>

                      {/* BUTTONS */}
                      <div className="flex flex-col sm:flex-row gap-3">

                        <button
                          onClick={() => window.open(cert.link, "_blank")}
                          className="w-full py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-white transition"
                        >
                          <span className="flex items-center justify-center gap-2">
                            Verify <ExternalLink size={16} />
                          </span>
                        </button>

                        <a
                          href={cert.image}
                          download
                          className="w-full py-2 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30 hover:bg-pink-500 hover:text-white transition text-center"
                        >
                          <span className="flex items-center justify-center gap-2">
                            Download <Download size={16} />
                          </span>
                        </a>

                      </div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20"
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Certificates;