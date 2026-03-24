import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Advanced Aurora Orbs */}
      <div className="absolute inset-0 filter blur-[100px] opacity-60">
        <motion.div
          animate={{
            transform: [
              'translate(0%, 0%) scale(1)',
              'translate(20%, 10%) scale(1.2)',
              'translate(-10%, 20%) scale(0.9)',
              'translate(0%, 0%) scale(1)',
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 mix-blend-screen"
        />
        <motion.div
          animate={{
            transform: [
              'translate(0%, 0%) scale(1)',
              'translate(-20%, -10%) scale(1.1)',
              'translate(10%, -20%) scale(0.9)',
              'translate(0%, 0%) scale(1)',
            ],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-orange-500/80 to-fuchsia-600 mix-blend-screen"
        />
        <motion.div
          animate={{
            transform: [
              'translate(0%, 0%) rotate(0deg)',
              'translate(10%, -10%) rotate(180deg)',
              'translate(-10%, 10%) rotate(360deg)',
              'translate(0%, 0%) rotate(0deg)',
            ],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-violet-800 to-transparent mix-blend-screen opacity-70"
        />
      </div>

      {/* Interactive Cyber-Glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-fuchsia-600/10 blur-[120px] mix-blend-screen z-0"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 1.5 }}
      />

      {/* Shooting Stars / Comets */}
      <div className="absolute inset-0 transform -rotate-45">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`comet-${i}`}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: ['1000%', '-1000%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Static Starfield */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              opacity: [Math.random() * 0.5 + 0.1, Math.random() * 0.8 + 0.4, Math.random() * 0.5 + 0.1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
