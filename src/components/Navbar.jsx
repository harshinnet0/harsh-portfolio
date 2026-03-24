import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, Globe, Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gradient"
        >
          &lt;Harsh.Raj /&gt;
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <a href={link.href} className="text-zinc-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4 border-l border-zinc-700 pl-6"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Code size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-raj-33ba66261" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Globe size={20} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-zinc-800 mt-4"
        >
          <ul className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-zinc-300 hover:text-white text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
