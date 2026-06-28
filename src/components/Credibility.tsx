import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Star, Trophy, Activity, GitCommit, ShieldCheck, Laptop, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { AnimatedCounter } from './AnimatedCounter';

const Credibility = () => {
  const education = [
    {
      role: "Current Full Stack Development Program",
      company: "Advanced Software Engineering Curriculum",
      period: "2026 - Present",
      desc: "Advanced software engineering study focusing on React/Next.js systems, Node.js API orchestration, and cloud infrastructure.",
      icon: GraduationCap,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      role: "Diploma in Computer Engineering (96.5% Marks)",
      company: "Nachimuthu Polytechnic College, Pollachi",
      period: "2023 - 2026",
      desc: "Specialized in computer engineering core concepts, network architectures, and programming foundations. Graduated at the top of the batch with an elite 96.5% score.",
      icon: BookOpen,
      color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
    },
    {
      role: "10th Standard Matriculation (89.9% Marks)",
      company: "Shrimahathma Vidhy Manthir Matriculation School",
      period: "Passed out 2023",
      desc: "Completed secondary education with high marks, establishing a strong mathematical and scientific foundation.",
      icon: Award,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    }
  ];

  const experience = [
    {
      role: "Full-Stack Web & AI Developer",
      company: "Self-Learning & Open-Source Projects",
      period: "2023 - Present",
      desc: "Building production-grade web systems, REST APIs, and database models. Designing smart LLM prompt interfaces and automated browser integrations.",
      icon: Trophy,
      color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    },
    {
      role: "Open-Source Contributor",
      company: "GitHub Community",
      period: "2024 - Present",
      desc: "Contributing to developer tooling, fixing API integration bugs, and structuring repository templates for web products.",
      icon: Star,
      color: "bg-amber-500/10 text-amber-500 border-amber-500/20"
    }
  ];

  const certifications = [
    {
      title: "Meta Front-End Developer Specialization",
      issuer: "Coursera / Meta",
      date: "2024",
      skills: ["React", "UI/UX Design", "JavaScript ES6", "Version Control"]
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2024",
      skills: ["EC2", "S3", "IAM", "Cloud Architecture"]
    },
    {
      title: "DeepLearning.AI Prompt Engineering",
      issuer: "DeepLearning.AI",
      date: "2023",
      skills: ["LLM Integration", "Prompt Design", "AI workflows"]
    }
  ];

  const stats = [
    { label: "Websites Developed", value: "20+", icon: Laptop, color: "text-blue-500" },
    { label: "Mobile Apps Developed", value: "5+", icon: Smartphone, color: "text-purple-500" },
    { label: "Total Code Commits", value: "1,500+", icon: GitCommit, color: "text-blue-500" },
    { label: "Project Deployments", value: "15+", icon: ShieldCheck, color: "text-emerald-500" }
  ];

  return (
    <section id="credibility" className="py-20 bg-slate-50 dark:bg-transparent relative overflow-hidden font-['Poppins'] transition-colors duration-500">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 left-1/10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-1/10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 shadow-sm">
              <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span className="text-[10px] font-black text-blue-700 dark:text-blue-300 tracking-widest uppercase">Credibility & Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Milestones & <span className="text-blue-600 dark:text-blue-500">Achievements.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              A record of academic background, certified expertise, and quantitative proof of code quality.
            </p>
          </motion.div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4 cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center ${stat.color} shadow-inner`}>
                <stat.icon className="w-5.5 h-5.5" />
              </div>
              <div>
                <p className="text-xl font-black text-slate-900 dark:text-white leading-none mb-1">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-[9px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-500 leading-none">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline (Balanced 2-Column Grid Layout) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Column: Education */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="w-5.5 h-5.5 text-blue-500" />
              <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">Education</h3>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3.5 pl-6 space-y-6">
              {education.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative"
                >
                  {/* Circle dot on line */}
                  <div className={`absolute -left-[35px] w-7 h-7 rounded-full border bg-white dark:bg-slate-950 flex items-center justify-center shadow-md ${item.color}`}>
                    <item.icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-500 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20 px-2.5 py-0.5 rounded-full">{item.period}</span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white mt-2.5 mb-0.5 leading-snug">{item.role}</h4>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">{item.company}</p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Experience */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Activity className="w-5.5 h-5.5 text-purple-500" />
              <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">Experience</h3>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3.5 pl-6 space-y-6">
              {experience.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative"
                >
                  {/* Circle dot on line */}
                  <div className={`absolute -left-[35px] w-7 h-7 rounded-full border bg-white dark:bg-slate-950 flex items-center justify-center shadow-md ${item.color}`}>
                    <item.icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <span className="text-[9px] font-black uppercase tracking-widest text-purple-500 dark:text-purple-400 bg-purple-50/80 dark:bg-purple-900/20 px-2.5 py-0.5 rounded-full">{item.period}</span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white mt-2.5 mb-0.5 leading-snug">{item.role}</h4>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">{item.company}</p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Certifications (Balanced 3-Column Grid Layout) */}
        <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-900">
          <div className="flex items-center space-x-3 mb-2">
            <Trophy className="w-5.5 h-5.5 text-amber-500" />
            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <Card 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-snug">{cert.title}</h4>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded flex-shrink-0">
                      {cert.date}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Credibility;
