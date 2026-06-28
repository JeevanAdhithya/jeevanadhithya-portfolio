import { motion, Variants } from 'framer-motion';
import { Award, Target, Compass, Sparkles, Cpu, User, Laptop, Smartphone, Hourglass, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

const About = () => {
  const stats = [
    { icon: Laptop,     label: 'Websites Developed',   value: '20+', color: 'text-blue-600 dark:text-blue-400',     bg: 'bg-blue-50 dark:bg-blue-900/10',     border: 'border-blue-100 dark:border-blue-900/30' },
    { icon: Smartphone, label: 'Mobile Apps Developed', value: '5+',  color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/10', border: 'border-purple-100 dark:border-purple-900/30' },
    { icon: Cpu,        label: 'AI Integrations',       value: '10+', color: 'text-cyan-600 dark:text-cyan-400',     bg: 'bg-cyan-50 dark:bg-cyan-900/10',     border: 'border-cyan-100 dark:border-cyan-900/30' },
    { icon: Hourglass,  label: 'Years Experience',      value: '3+',  color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/10', border: 'border-emerald-100 dark:border-emerald-900/30' },
  ];

  const highlights = [
    'Production-ready MERN Stack applications',
    'AI/RAG pipelines with Gemini & OpenAI APIs',
    'Real-time systems with WebSockets & Supabase',
    'Mobile apps with React Native & Expo',
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-transparent relative overflow-hidden font-['Poppins'] transition-colors duration-500">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 shadow-sm">
            <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-[10px] font-black text-blue-700 dark:text-blue-300 tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight max-w-5xl mx-auto">
            Bridging <span className="text-blue-600 dark:text-blue-500">AI Integration</span> &amp; Full-Stack.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >

          {/* ── RIGHT: Text Content (Bio, stats, etc) ── */}
          <motion.div variants={itemVariants} className="space-y-7 order-2">

            {/* Bio */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium max-w-xl">
              I am{' '}
              <span className="text-slate-900 dark:text-white font-black">Jeevan Adhithya M</span>, a Full-Stack Engineer and AI Developer based in Coimbatore. I specialize in developing production-ready web platforms with robust backends, real-time sync, and intelligent AI models (RAG pipelines, Gemini API) to build high-performance digital products.
            </p>

            {/* Highlights checklist */}
            <ul className="space-y-2.5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Recruiter Quick Facts */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Recruiter Quick Facts</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300">
                  <p className="text-[9px] uppercase tracking-wider font-black text-blue-500 mb-1.5">💼 Open For Roles</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">Full-Stack Internships, Placements &amp; Freelance</p>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-purple-200 dark:hover:border-purple-900 transition-all duration-300">
                  <p className="text-[9px] uppercase tracking-wider font-black text-purple-500 mb-1.5">🎯 Core Expertise</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">MERN Stack, Python, FastAPI, AI RAG Pipelines</p>
                </div>
              </div>
            </div>

            {/* Stat Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bg} ${stat.border} p-4 rounded-2xl border shadow-sm cursor-default transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
                >
                  <div className={`${stat.color} mb-2`}>
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-white mb-0.5 tracking-tight">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[8px] text-slate-500 dark:text-slate-500 font-black uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Dark Code Card Visual ── */}
          <motion.div variants={itemVariants} className="relative group flex justify-center lg:justify-start order-1">
            <div className="relative w-full max-w-[480px]">

              {/* Main dark card */}
              <div className="relative w-full aspect-square rounded-[2.5rem] bg-white dark:bg-slate-900 p-5 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-700 group-hover:rotate-1">
                <div className="w-full h-full bg-slate-950 rounded-[2rem] relative overflow-hidden shadow-2xl ring-4 ring-slate-100 dark:ring-slate-800">

                  {/* Top bar */}
                  <div className="absolute top-0 left-0 w-full p-5 font-mono text-xs text-white/40">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-[10px] text-slate-600 font-mono">profile.ts</span>
                    </div>
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                      className="space-y-2"
                    >
                      <p><span className="text-blue-400 font-bold">interface</span> <span className="text-white font-bold">Professional</span> {'{'}</p>
                      <p className="pl-4"><span className="text-slate-500">name</span>: <span className="text-emerald-400">"Jeevan Adhithya M"</span>;</p>
                      <p className="pl-4"><span className="text-slate-500">role</span>: <span className="text-emerald-400">"Full-Stack &amp; AI Engineer"</span>;</p>
                      <p className="pl-4"><span className="text-slate-500">mission</span>: <span className="text-emerald-400">"Building AI Futures"</span>;</p>
                      <p className="pl-4"><span className="text-slate-500">focus</span>: <span className="text-emerald-400">"Web Architecture"</span>;</p>
                      <p className="pl-4"><span className="text-slate-500">location</span>: <span className="text-amber-400">"Coimbatore, India"</span>;</p>
                      <p className="pl-4"><span className="text-slate-500">openToWork</span>: <span className="text-cyan-400">true</span>;</p>
                      <p><span className="text-blue-400 font-bold">{'}'}</span></p>
                      <br />
                      <p><span className="text-purple-400 font-bold">const</span> <span className="text-white">stack</span> = {'['}</p>
                      <p className="pl-4"><span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-400">"Python"</span>,</p>
                      <p className="pl-4"><span className="text-emerald-400">"Gemini AI"</span>, <span className="text-emerald-400">"Supabase"</span>, <span className="text-emerald-400">"FastAPI"</span></p>
                      <p>{']'}</p>
                    </motion.div>
                  </div>

                  {/* Center glow */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.14, 0.08] }}
                      transition={{ repeat: Infinity, duration: 6 }}
                    >
                      <Sparkles className="w-40 h-40 text-blue-500" />
                    </motion.div>
                  </div>

                  {/* Bottom tags */}
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                    {['AI Dev', 'Full-Stack', 'UI Expert', 'Open to Work'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-[9px] text-white font-black uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Floating accent icon */}
                <div className="absolute -right-4 top-1/3 p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-2xl border border-slate-100 dark:border-slate-800 transform translate-x-1/2 rotate-12 hidden md:flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
              </div>

              {/* Floating experience pill */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl px-5 py-3.5 hidden md:flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Experience</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">3+ Years Building</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;