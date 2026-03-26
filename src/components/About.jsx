import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, BrainCircuit, Code, Award, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'C / C++ / C# / Java', level: 'Core Languages', icon: <Code size={20} className="text-violet-400" /> },
    { name: 'React.js, Next.js & Tailwind', level: 'Frontend Advanced', icon: <Code size={20} className="text-cyan-400" /> },
    { name: 'Python, PHP & Node.js', level: 'Backend & Scripting', icon: <Terminal size={20} className="text-emerald-400" /> },
    { name: 'TypeScript & JavaScript', level: 'Web Programming', icon: <Terminal size={20} className="text-blue-400" /> },
    { name: 'AI & Prompt Engineering', level: 'Specialization', icon: <BrainCircuit size={20} className="text-orange-400" /> },
    { name: 'Vercel, Netlify & GitHub', level: 'Deployment & CI/CD', icon: <Database size={20} className="text-fuchsia-400" /> },
  ];

  const education = [
    { degree: 'B.Tech in Computer Science', univ: 'Vivekananda Global University', year: 'Aug 2024 - Present', desc: 'Expanding knowledge of algorithms, distributed systems, and real-world software engineering.' }
  ];

  const experiences = [
    {
      role: 'AI Project Trainee',
      company: 'CSRBOX (in collaboration with IBM SkillsBuild)',
      period: '2023 - Present',
      description: 'Gaining hands-on experience in enterprise-grade AI fundamentals and agent workflows. Building robust real-world AI projects through advanced prompt engineering, bridging the gap between theoretical AI and scalable application solutions.'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-violet-400">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-zinc-200 flex items-center gap-3">
              <div className="p-2 bg-violet-500/10 rounded-lg"><Briefcase size={22} className="text-violet-400" /></div>
              Professional Experience
            </h3>
            <div className="space-y-6 mb-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card p-6 border-t-2 border-t-violet-500 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white relative inline-block">
                          {exp.role}
                        </h4>
                        <p className="text-violet-400 font-medium text-sm mt-1">{exp.company}</p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-zinc-800/80 text-violet-300 rounded-full border border-violet-500/20 whitespace-nowrap shadow-inner">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 text-zinc-200 flex items-center gap-3">
              <div className="p-2 bg-fuchsia-500/10 rounded-lg"><GraduationCap size={22} className="text-fuchsia-400" /></div>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="glass-card p-6 border-l-2 border-l-fuchsia-500 hover:bg-zinc-800/40 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-zinc-200">{item.degree}</h4>
                  <p className="text-fuchsia-400 font-medium text-sm my-1">{item.univ}</p>
                  <p className="text-zinc-500 text-xs mb-3">{item.year}</p>
                  {item.desc && <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-zinc-200 flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg"><Terminal size={22} className="text-emerald-400" /></div>
              Core Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {skills.map((skill, idx) => (
                <div key={idx} className="glass p-4 rounded-xl flex items-center gap-4 hover:border-emerald-500/30 hover:bg-zinc-800/60 transition-all cursor-default group">
                  <div className="p-3 bg-zinc-800/80 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <span className="block font-semibold text-zinc-200 text-sm">{skill.name}</span>
                    <span className="text-xs text-zinc-500">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 text-zinc-200 flex items-center gap-3">
              <div className="p-2 bg-orange-500/10 rounded-lg"><Award size={22} className="text-orange-400" /></div>
              Certifications
            </h3>
            <div className="glass-card p-8">
              <ul className="space-y-4">
                {[
                  "Leadership Skills",
                  "Programming for Everybody (Getting Started with Python)",
                  "Canva Masterclass For Social Media And Content Creation",
                  "Databases and SQL for Data Science with Python"
                ].map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <ChevronRight size={16} className="text-orange-500 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
