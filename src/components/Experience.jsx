import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CircleCheck } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-zinc-900/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-fuchsia-400">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full filter blur-3xl -tranzinc-y-1/2 tranzinc-x-1/2"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
              <div className="hidden md:flex p-4 rounded-2xl bg-zinc-800 border border-zinc-700 items-center justify-center shadow-inner">
                <Briefcase size={32} className="text-fuchsia-400" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">AI Project Trainee</h3>
                    <p className="text-xl text-violet-300 font-medium">CSRBOX <span className="text-zinc-500 text-base font-normal">(in collaboration with IBM SkillsBuild)</span></p>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 bg-zinc-800/80 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    <Calendar size={16} />
                    July 2025 - Present (Online)
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-zinc-300 leading-relaxed font-medium">
                    Program: "Agentic AI: From Learner to Builder - Become an AI Agent Architect"
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "Learned AI fundamentals, agent workflows, and practical prompt engineering.",
                    "Built hands-on AI project using real-world use cases.",
                    "Strengthened problem-solving, communication, and teamwork skills.",
                    "Gained experience in structured project development and technical learning.",
                    "Understood how AI systems are designed, trained, and applied in real scenarios."
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
                      className="flex items-start gap-3 text-zinc-400"
                    >
                      <CircleCheck size={20} className="text-fuchsia-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
