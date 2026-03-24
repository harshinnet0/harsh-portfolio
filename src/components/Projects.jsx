import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Server, ShieldCheck, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cognitive AI Enterprise Automator',
      desc: 'A highly-scalable enterprise platform leveraging Agentic AI to automate complex workflows. Processes vast unstructured datasets to generate context-aware insights, architected for multi-tenant enterprise deployment and high concurrency.',
      tech: ['React / Next.js', 'Python', 'LLMs', 'Vector Databases'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      icon: <ShieldCheck size={20} className="text-violet-400" />
    },
    {
      title: 'Global Data Pipeline & Real-Time Dashboard',
      desc: 'Architected a distributed data ingestion and visualization pipeline for global metrics. Utilizes advanced caching mechanisms to achieve sub-second latency on the frontend, featuring premium interactive motion-driven data representation.',
      tech: ['TypeScript', 'WebSockets', 'MongoDB', 'Redis'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      icon: <Activity size={20} className="text-fuchsia-400" />
    },
    {
      title: 'Aura - Cloud Collaborative Environment',
      desc: 'A collaborative, browser-based workspace offering real-time multi-user synchronization and AI-powered assistance. Engineered securely to support enterprise teams with role-based access control and seamless containerized environment integration.',
      tech: ['React', 'Node.js', 'Docker', 'WebRTC'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      icon: <Server size={20} className="text-emerald-400" />
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-semibold mb-6">
            <Code size={16} /> Enterprise Grade
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-500">Projects</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg mt-4">Showcasing high-impact real-world solutions architected for scale, performance, and exceptional user experience.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="glass-card group overflow-hidden flex flex-col h-full hover:border-fuchsia-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.15)] relative"
            >
              <div className="absolute top-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2.5 bg-zinc-900/80 backdrop-blur rounded-full border border-zinc-700">
                  {project.icon}
                </div>
              </div>

              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative z-20 -mt-12">
                <div className="bg-zinc-900/95 backdrop-blur-xl rounded-xl p-5 border border-zinc-700/50 shadow-xl flex flex-col flex-grow group-hover:bg-zinc-800/90 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[11px] font-bold px-3 py-1.5 bg-zinc-950 text-zinc-300 rounded-lg border border-zinc-800 flex items-center gap-1.5 shadow-inner">
                        <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-5 border-t border-zinc-800 mt-auto">
                    <a href={project.github} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium hover:bg-zinc-800 px-3 py-1.5 rounded-lg">
                      <Code size={16} /> <span>Source Code</span>
                    </a>
                    <a href={project.demo} className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors flex items-center gap-2 text-sm font-medium hover:bg-fuchsia-500/10 px-3 py-1.5 rounded-lg">
                      <ExternalLink size={16} /> <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
