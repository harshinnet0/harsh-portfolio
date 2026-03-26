import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Server, ShieldCheck, Activity, Sparkles, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cognitive AI Enterprise Automator',
      desc: 'A highly-scalable enterprise platform leveraging Agentic AI to automate complex workflows. Processes vast unstructured datasets to generate context-aware insights, architected for multi-tenant enterprise deployment and extreme concurrency.',
      tech: ['React / Next.js', 'Python', 'LLMs', 'Vector DB', 'AWS'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
      icon: <ShieldCheck size={24} className="text-cyan-400" />,
      featured: true
    },
    {
      title: 'Global Data Pipeline & Dashboard',
      desc: 'Architected a distributed data ingestion and visualization pipeline for global metrics. Utilizes advanced caching mechanisms to achieve sub-second latency on the frontend with interactive motion-driven data representation.',
      tech: ['TypeScript', 'WebSockets', 'MongoDB'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      icon: <Activity size={24} className="text-purple-400" />
    },
    {
      title: 'Aura - Cloud Collaborative Env',
      desc: 'A collaborative, browser-based workspace offering real-time multi-user synchronization and AI-powered assistance. Engineered securely to support enterprise teams with seamless containerized environment integration.',
      tech: ['React', 'Node.js', 'Docker'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      icon: <Server size={24} className="text-emerald-400" />
    }
  ];

  const renderCard = (project, idx) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        key={idx}
        className="group relative rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col h-full"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden w-full h-48 sm:h-52">
          <div className="absolute inset-0 bg-gradient-to-t from-[#02000A] via-transparent to-transparent z-10 opacity-80" />
          <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
            {project.icon}
          </div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow relative z-20 bg-gradient-to-b from-[#02000A] to-transparent">
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 flex-grow leading-relaxed">
            {project.desc}
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span 
                key={i} 
                className="text-[10px] sm:text-[11px] font-medium px-2 py-1 bg-white/5 text-zinc-300 rounded-full border border-white/10 shadow-inner"
              >
                {t}
              </span>
            ))}
          </div>
          
          {/* Action Links */}
          <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-auto">
            <a 
              href={project.github} 
              className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors group/link"
            >
              <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-white/10 transition-colors">
                <Code size={14} />
              </span>
              Code
            </a>
            <a 
              href={project.demo} 
              className="flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
            >
              Demo
              <span className="w-7 h-7 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover/link:bg-cyan-500/20 group-hover/link:translate-x-1 transition-all">
                <ExternalLink size={14} />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-md">
            <Sparkles size={16} /> Featured Work
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg pt-2 leading-relaxed">
            Showcasing high-impact real-world solutions architected for scale, performance, and exceptional user experience.
          </p>
        </motion.div>

        {/* 3-Column Grid for Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => renderCard(project, idx))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
