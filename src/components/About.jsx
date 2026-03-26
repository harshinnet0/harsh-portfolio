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
    { degree: 'B.Tech in Computer Science', univ: 'Vivekananda Global University, Jaipur', year: 'Aug 2024 - Present', desc: 'Expanding knowledge of algorithms, distributed systems, and real-world software engineering.' }
  ];

  const experiences = [
    {
      role: 'AI Project Trainee',
      company: 'CSRBOX (in collaboration with IBM SkillsBuild)',
      period: '2023 - Present',
      description: 'Gaining hands-on experience in enterprise-grade AI fundamentals and agent workflows. Building real-world AI projects using prompt engineering and scalable solutions.'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">

        {/* ✅ SEO INTRO (VERY IMPORTANT) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-violet-400">Harsh Raj</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            I am <strong>Harsh Raj</strong>, a B.Tech Computer Science student at 
            <strong> Vivekananda Global University (VGU), Jaipur</strong>. 
            I specialize in Artificial Intelligence, web development, and building modern scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <h3 className="text-2xl font-bold mb-6 text-zinc-200 flex items-center gap-3">
              <Briefcase size={22} className="text-violet-400" />
              Professional Experience
            </h3>

            <div className="space-y-6 mb-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card p-6 border-t-2 border-t-violet-500">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-violet-400 text-sm">{exp.company}</p>
                  <p className="text-zinc-500 text-xs mb-2">{exp.period}</p>
                  <p className="text-zinc-400 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 text-zinc-200 flex items-center gap-3">
              <GraduationCap size={22} className="text-fuchsia-400" />
              Education
            </h3>

            {education.map((item, idx) => (
              <div key={idx} className="glass-card p-6 border-l-2 border-fuchsia-500">
                <h4 className="text-lg font-bold">{item.degree}</h4>
                <p className="text-fuchsia-400 text-sm">{item.univ}</p>
                <p className="text-zinc-500 text-xs">{item.year}</p>
                <p className="text-zinc-400 text-sm mt-2">{item.desc}</p>
              </div>
            ))}

          </motion.div>

          {/* RIGHT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <h3 className="text-2xl font-bold mb-6 text-zinc-200">Core Skills</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {skills.map((skill, idx) => (
                <div key={idx} className="glass p-4 rounded-xl flex items-center gap-4">
                  {skill.icon}
                  <div>
                    <span className="block text-sm font-semibold">{skill.name}</span>
                    <span className="text-xs text-zinc-500">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 text-zinc-200">Certifications</h3>

            <ul className="space-y-3">
              {[
                "Leadership Skills",
                "Programming for Everybody (Python)",
                "Canva Masterclass",
                "Databases and SQL"
              ].map((cert, idx) => (
                <li key={idx} className="text-zinc-300 text-sm flex items-center gap-2">
                  <ChevronRight size={16} /> {cert}
                </li>
              ))}
            </ul>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;