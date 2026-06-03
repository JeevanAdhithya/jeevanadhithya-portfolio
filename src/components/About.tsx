import { motion, Variants } from 'framer-motion';
import { Code, Coffee, Heart, Zap, Award, BookOpen, Smile, Star, Target, Compass, Sparkles, Cpu, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Award, label: 'Projects Completed', value: '15+', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/10' },
    { icon: Star, label: 'Satisfied Clients', value: '25+', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/10' },
    { icon: Cpu, label: 'AI Integrations', value: '10+', color: 'text-blue-400 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/10' },
    { icon: Smile, label: 'Experience', value: '3 yrs+', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/10' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="about" className="py-20 md:py-24 bg-slate-50 dark:bg-transparent relative overflow-hidden font-['Poppins'] transition-colors duration-500">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left Column: Visuals */}
          <motion.div variants={itemVariants} className="relative group flex justify-center lg:justify-start">
            <div className="relative w-full aspect-square rounded-[3rem] bg-white dark:bg-slate-900 p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-700 hover:rotate-1">
              <div className="w-full h-full bg-slate-950 rounded-[2rem] relative overflow-hidden shadow-2xl ring-4 ring-slate-100 dark:ring-slate-800">
                <div className="absolute top-0 left-0 w-full p-6 font-mono text-[10px] md:text-xs text-white/40">
                  <div className="flex space-x-2 mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <motion.div 
                    animate={{ y: [0, -40, 0] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="space-y-3"
                  >
                    <p className="text-blue-400 font-bold">interface <span className="text-white">Professional</span> {'{'}</p>
                    <p className="pl-4">name: <span className="text-emerald-400">"Jeevan Adhithya M"</span>;</p>
                    <p className="pl-4">mission: <span className="text-emerald-400">"Building AI Futures"</span>;</p>
                    <p className="pl-4">focus: <span className="text-emerald-400">"Web Architecture"</span>;</p>
                    <p className="text-blue-400 font-bold">{'}'}</p>
                  </motion.div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 8 }}
                    className="relative opacity-10 dark:opacity-20"
                  >
                    <Sparkles className="w-48 h-48 text-blue-500" />
                  </motion.div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  {['AI Dev', 'Full-Stack', 'UI Expert'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-[9px] text-white font-black uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="absolute -right-4 top-1/4 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-2xl border border-slate-100 dark:border-slate-800 transform translate-x-1/2 rotate-12 hidden md:block">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-10">
            <div className="space-y-4">
              <span className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase text-[9px] px-3 py-1 bg-blue-50 dark:bg-blue-900/40 rounded-full inline-flex items-center">
                <User className="w-3.5 h-3.5 mr-1" />
                Personal Profile
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white leading-[1.2] flex items-center">
                <Compass className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Crafting <span className="text-blue-500 underline decoration-blue-100 dark:decoration-blue-900/50 decoration-4 underline-offset-4">Digital</span> Mastery.</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium">
              <p>
                I'm <span className="text-slate-950 dark:text-white font-black underline decoration-blue-500/20 decoration-2 underline-offset-4">Jeevan Adhithya M</span>, a MERN Stack developer dedicated to exploring the boundaries of technology in Coimbatore.
              </p>
              <p>
                I specialize in building complex, high-performance web systems where <span className="text-slate-950 dark:text-white font-black">Design meets Data</span>. I focus on creating experiences that aren't just usable—they're <span className="text-blue-600 dark:text-blue-400 font-black italic">impactful</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${stat.bg} p-6 rounded-3xl border border-white/50 dark:border-slate-800/50 shadow-sm group cursor-default transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10`}
                >
                  <motion.div 
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    className={`${stat.color} mb-3`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </motion.div>
                  <div className="text-2xl font-black text-slate-950 dark:text-white mb-0.5 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[9px] text-slate-500 dark:text-slate-500 font-black uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;