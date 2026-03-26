import React, { useEffect, useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const AntigravityBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 30, stiffness: 100 };
  const mouseX = useSpring(useMotionValue(0), springConfig);
  const mouseY = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate stable random stars
  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacityBase: Math.random() * 0.5 + 0.2, // Some are brighter
      duration: Math.random() * 3 + 2, // Twinkle speed
      delay: Math.random() * 5,
    }));
  }, []);

  // Generate stable random shooting stars
  const shootingStars = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: `meteor-${i}`,
      top: `${Math.random() * 50}%`, // Start higher up
      delay: Math.random() * 15 + i * 4, // Occasional frequency
      duration: Math.random() * 1.5 + 1.5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#02000A] pointer-events-none">
      
      {/* Dynamic Cosmic Gradient Background (Nebula effect) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#02000A] to-[#02000A]" />

      {/* Deep Space Glowing Nebulas (Very subtle) */}
      <div className="absolute inset-0 filter blur-[120px] opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-cyan-600/20 mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-purple-700/20 mix-blend-screen"
        />
      </div>

      {/* Twinkling Stars Field */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [star.opacityBase, star.opacityBase + 0.5, star.opacityBase], // Twinkling
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Shooting Stars (Meteors) */}
      {shootingStars.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute h-[1px] w-[100px] sm:w-[150px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{ top: meteor.top }}
          initial={{ left: '-20%', opacity: 0, rotate: -35 }}
          animate={{ left: '120%', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: meteor.duration,
            repeat: Infinity,
            delay: meteor.delay,
            ease: "easeIn"
          }}
        />
      ))}

      {/* Subtle Stardust Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-0"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      {/* Sharp Bright Mouse Tracker Glow */}
      <motion.div
        className="absolute w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] rounded-full bg-cyan-400/10 blur-[50px] mix-blend-screen z-10 hidden sm:block"
        style={{
          x: mousePosition.x - 125,
          y: mousePosition.y - 125,
        }}
      />
    </div>
  );
};

export default AntigravityBackground;