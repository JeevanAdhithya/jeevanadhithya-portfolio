import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Smartphone, 
  Globe, 
  Server,
  Layers,
  Palette,
  Terminal,
  Cpu,
  Workflow,
  Cloud,
  Zap,
  Sparkles
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind / CSS3", level: 95 },
      { name: "Framer Motion", level: 80 }
    ],
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Backend Systems",
    icon: Server,
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "PostgreSQL / Prisma", level: 80 },
      { name: "Python / FastAPI", level: 75 },
      { name: "Docker / AWS", level: 70 }
    ],
    color: "from-indigo-600 to-violet-500"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 80 },
      { name: "Flutter", level: 65 },
      { name: "PWA Systems", level: 85 }
    ],
    color: "from-pink-600 to-rose-500"
  },
  {
    title: "AI & Innovation",
    icon: Cpu,
    skills: [
      { name: "Gemini / OpenAI API", level: 85 },
      { name: "RAG Implementations", level: 75 },
      { name: "Prompt Engineering", level: 90 }
    ],
    color: "from-amber-500 to-orange-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-transparent relative overflow-hidden font-['Poppins'] transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-[10px] font-black text-blue-700 dark:text-blue-300 tracking-widest uppercase">Technical Stack</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 flex justify-center items-center">
              <Code2 className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 text-purple-600 dark:text-purple-500 flex-shrink-0" />
              <span>Expertise & <span className="text-blue-600 dark:text-blue-500">Mastery.</span></span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              I leverage a diverse set of modern tools and frameworks to build <span className="text-slate-900 dark:text-white font-bold">scalable</span>, <span className="text-slate-900 dark:text-white font-bold">performant</span> applications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, rotateZ: 1 }}
              className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group ring-1 ring-slate-100 dark:ring-slate-800 cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{category.title}</h3>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide group-hover:translate-x-1 transition-transform">{skill.name}</span>
                      <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-md">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 + sIdx * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                      >
                         <motion.div 
                           animate={{ x: ['-100%', '200%'] }}
                           transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" 
                         />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech icons animation at bottom */}
        <motion.div 
          className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-widest italic">Web Systems</span>
          </div>
          <div className="flex items-center space-x-2">
            <Smartphone className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-widest italic">Mobile Apps</span>
          </div>
          <div className="flex items-center space-x-2">
            <Cpu className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-widest italic">AI Powered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;