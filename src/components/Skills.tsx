import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Smartphone, 
  Globe, 
  Server,
  Cpu,
  Cloud,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
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
      { name: "Python / FastAPI", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets", level: 75 }
    ],
    color: "from-indigo-600 to-violet-500"
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL / Prisma", level: 80 },
      { name: "Supabase / Firebase", level: 85 },
      { name: "Redis Caching", level: 70 }
    ],
    color: "from-emerald-600 to-teal-500"
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    skills: [
      { name: "Gemini / OpenAI API", level: 90 },
      { name: "RAG Pipelines", level: 80 },
      { name: "Vector Databases", level: 75 },
      { name: "Prompt Engineering", level: 90 }
    ],
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Tools & DevOps",
    icon: Cloud,
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS Cloud", level: 70 },
      { name: "Vercel / Netlify", level: 90 }
    ],
    color: "from-pink-600 to-rose-500"
  }
];

interface SkillCardProps {
  category: typeof skillCategories[0];
  idx: number;
  isMobile?: boolean;
}

const SkillCard = ({ category, idx, isMobile = false }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: isMobile ? 0.05 * idx : 0.08 * idx }}
      whileHover={isMobile ? {} : { y: -6 }}
      className={`bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300 group ring-1 ring-slate-100 dark:ring-slate-800 cursor-default will-change-transform h-full flex flex-col justify-between ${
        isMobile ? 'aspect-[16/10] sm:aspect-auto' : ''
      }`}
    >
      <div>
        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 sm:mb-6 shadow-md group-hover:scale-105 transition-transform duration-300`}>
          <category.icon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white" />
        </div>

        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-4 sm:mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {category.title}
        </h3>

        <div className="space-y-3 sm:space-y-4">
          {category.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-350 uppercase tracking-wide">
                  {skill.name}
                </span>
                <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20 px-1.5 py-0.5 rounded">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-200/60 dark:bg-slate-800 rounded-full overflow-hidden p-px">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-transparent relative overflow-hidden font-['Poppins'] transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-4">
              <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span className="text-[10px] font-black text-blue-700 dark:text-blue-300 tracking-widest uppercase">Technical Stack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 flex justify-center items-center">
              <Code2 className="w-8 h-8 md:w-10 md:h-10 mr-3 text-purple-600 dark:text-purple-500 flex-shrink-0" />
              <span>Expertise & <span className="text-blue-600 dark:text-blue-500">Mastery.</span></span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-medium">
              I leverage a diverse set of modern tools and frameworks to build <span className="text-slate-900 dark:text-white font-bold">scalable</span>, <span className="text-slate-900 dark:text-white font-bold">performant</span> applications.
            </p>
          </motion.div>
        </div>

        {/* Responsive Layout Selection */}
        
        {/* Mobile/Tablet: Standard Flex Grid (aspect 16:10 for mobile cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.title} category={category} idx={idx} isMobile={true} />
          ))}
        </div>

        {/* Desktop: Custom centered balanced layout (3 top, 2 bottom centered, exactly equal sizes) */}
        <div className="hidden lg:flex flex-col gap-8">
          {/* Row 1 (3 items) */}
          <div className="grid grid-cols-3 gap-8">
            {skillCategories.slice(0, 3).map((category, idx) => (
              <SkillCard key={category.title} category={category} idx={idx} />
            ))}
          </div>
          {/* Row 2 (2 items, centered) */}
          <div className="flex justify-center gap-8">
            {skillCategories.slice(3, 5).map((category, idx) => (
              <div key={category.title} className="w-[calc(33.333%-1.333rem)]">
                <SkillCard category={category} idx={idx + 3} />
              </div>
            ))}
          </div>
        </div>

        {/* Floating tech icons animation at bottom */}
        <motion.div 
          className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-wrap justify-center gap-10 opacity-30 grayscale"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <Globe className="w-4.5 h-4.5" />
            <span className="text-[9px] font-black uppercase tracking-widest italic">Web Systems</span>
          </div>
          <div className="flex items-center space-x-2">
            <Smartphone className="w-4.5 h-4.5" />
            <span className="text-[9px] font-black uppercase tracking-widest italic">Mobile Apps</span>
          </div>
          <div className="flex items-center space-x-2">
            <Cpu className="w-4.5 h-4.5" />
            <span className="text-[9px] font-black uppercase tracking-widest italic">AI Powered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;