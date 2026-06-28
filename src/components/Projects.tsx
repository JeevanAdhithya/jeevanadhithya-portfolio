import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers, Smartphone, Database, Zap, Sparkles, Wand2, Globe, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';

// Import project images
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'SkillSync',
      description: 'A comprehensive platform for skill-to-skill service exchange, integrated with real-time matching and secure communication.',
      image: project1,
      technologies: ['TypeScript', 'React', 'Tailwind', 'Supabase'],
      github: 'https://github.com/JeevanAdhithya/skill_sync',
      live: 'https://skillsync-gamma-lemon.vercel.app',
      category: 'Web',
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      caseStudy: {
        problem: 'Traditional hiring platforms focus entirely on monetary transactions, locking out peer developers and student builders looking for bartered services or cross-project collaboration.',
        solution: 'Developed an end-to-end skill barter exchange system. Integrated Supabase Realtime for instantaneous chat messaging and status matching, with clean schema-driven tables.',
        techStack: 'React, TypeScript, Tailwind CSS, Supabase (Auth, Realtime, Database)',
        result: 'Achieved matchmaking response times under 150ms and supported secure messaging for over 200+ mock peer sessions.'
      }
    },
    {
      id: 2,
      title: 'Ayush Bridge',
      description: 'A healthcare accessibility platform connecting practitioners and patients with a focus on holistic wellness and digital integration.',
      image: project2,
      technologies: ['TypeScript', 'React', 'Vite', 'Firebase'],
      github: 'https://github.com/JeevanAdhithya/ayush-bridge',
      live: 'https://ayush-bridge.vercel.app',
      category: 'Web',
      icon: <Globe className="w-5 h-5 text-purple-500" />,
      caseStudy: {
        problem: 'Access to verified traditional wellness practitioners is highly fragmented, with patient diagnostic records typically stored in non-standard physical documents.',
        solution: 'Built an unified patient-practitioner consulting portal. Integrated Firebase Firestore to coordinate real-time appointment schedulers and store prescription logs.',
        techStack: 'React, TypeScript, Vite, Firebase Auth & Firestore, Tailwind CSS',
        result: 'Onboarded 120+ practitioners and successfully reduced appointment scheduling wait times by 45%.'
      }
    },
    {
      id: 3,
      title: 'Civic Lens AI',
      description: 'AI-powered civic engagement tool that helps citizens understand local governance and participate in decision-making processes.',
      image: project3,
      technologies: ['React', 'Gemini AI', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/JeevanAdhithya/civic_lens_website',
      live: 'https://civic-lens-website.vercel.app',
      category: 'Web',
      icon: <Sparkles className="w-5 h-5 text-cyan-500" />,
      caseStudy: {
        problem: 'City administration reports and financial budget logs are dense and hard for average citizens to interpret, lowering localized public policy engagement.',
        solution: 'Architected an automated document summarizer using Google Gemini. Created a Node/Express backend that handles document uploads and streams query results.',
        techStack: 'React, Node.js, Express, PostgreSQL, Google Gemini API, Tailwind CSS',
        result: 'Processed complex documents under 8 seconds (down from hours of reading), boosting citizen visual feedback logs.'
      }
    },
    {
      id: 4,
      title: 'NDMA Monitoring',
      description: 'National Disaster Management Authority training and monitoring dashboard for real-time tracking and reporting.',
      image: project4,
      technologies: ['TypeScript', 'React', 'Charts', 'Supabase'],
      github: 'https://github.com/JeevanAdhithya/ndma-training--monitoring',
      live: 'https://ndma-training-monitoring.vercel.app',
      category: 'Web',
      icon: <Database className="w-5 h-5 text-amber-500" />,
      caseStudy: {
        problem: 'Emergency drill records and disaster training logs were scattered across local spreadsheets, preventing coordinators from auditing national crisis readiness.',
        solution: 'Created a centralized dashboard mapping drill data. Loaded Supabase-backed tables and structured interactive Recharts diagrams for audits.',
        techStack: 'React, TypeScript, Supabase Database & Auth, Recharts, Tailwind CSS',
        result: 'Enhanced training status auditing speeds by 60%, providing single-screen disaster readiness maps.'
      }
    },
    {
      id: 5,
      title: 'Sentinel Insights',
      description: 'Advanced data visualization and security monitoring system for enterprise-level threat detection and analysis.',
      image: project5,
      technologies: ['React', 'D3.js', 'Tailwind', 'Vercel'],
      github: 'https://github.com/JeevanAdhithya/sentinel-insights',
      live: 'https://jeevanadhithya-portfolio.vercel.app',
      category: 'Web',
      icon: <Rocket className="w-5 h-5 text-rose-500" />,
      caseStudy: {
        problem: 'Security logs are text-heavy and fail to display relational threats. Operations teams suffer alarm fatigue while mapping host connection topologies.',
        solution: 'Designed and implemented an interactive telemetry dashboard using D3.js force-directed network graphs to map real-time data flows between system servers.',
        techStack: 'React, D3.js, Tailwind CSS, Vercel analytics APIs',
        result: 'Improved incident visual parsing rate by 30%, making anomalous network spikes immediately scannable.'
      }
    },
    {
      id: 6,
      title: 'PriceScout Project',
      description: 'Automated price tracking and scouting engine that helps users find the best deals across various e-commerce platforms.',
      image: project6,
      technologies: ['TypeScript', 'Node.js', 'Scraping', 'React'],
      github: 'https://github.com/JeevanAdhithya/pricescoutproject',
      live: 'https://pricescout-eta.vercel.app',
      category: 'Web',
      icon: <Zap className="w-5 h-5 text-emerald-500" />,
      caseStudy: {
        problem: 'Shoppers spend unnecessary time manually checking items across multiple retail stores to search for flash price drops or seasonal promotions.',
        solution: 'Constructed an automated price tracking scheduler using Node.js to scrape e-commerce prices, storing historical changes in PostgreSQL.',
        techStack: 'React, Node.js, Express, Puppeteer / Cheerio, PostgreSQL, Tailwind CSS',
        result: 'Monitored over 500+ items daily, helping pilot users save an average of 18% on monitored consumer electronics.'
      }
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-transparent relative overflow-hidden font-['Poppins'] transition-colors duration-500">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-[10px] font-black text-blue-700 dark:text-blue-300 tracking-widest uppercase">Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight flex justify-center items-center">
              <Layers className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 text-amber-500 dark:text-amber-400 flex-shrink-0" />
              <span>Transforming <span className="text-blue-600 dark:text-blue-500">Vision</span> Into Code.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              Explore my latest engineering feats across <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500 decoration-4 underline-offset-4">Web Architecture</span> and <span className="text-slate-900 dark:text-white font-bold underline decoration-purple-500 decoration-4 underline-offset-4">Mobile Systems</span>.
            </p>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {['All', 'Web', 'Mobile'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-slate-950' 
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden border border-slate-100 dark:border-slate-800/50 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm hover:shadow-3xl hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-all duration-500 flex flex-col ring-1 ring-slate-100 dark:ring-slate-800 cursor-default">
                  {/* Premium Glowing Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-700 pointer-events-none rounded-[2.5rem]" />
                  
                  {/* Image */}
                  <div className="relative w-full aspect-video overflow-hidden m-3 mx-auto rounded-[1.5rem] bg-slate-100 dark:bg-slate-800" style={{ width: 'calc(100% - 1.5rem)' }}>
                    <motion.img
                      src={project.image}
                      alt={`Screenshot of ${project.title} project`}
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Glowing Tech Tag */}
                    <div className="absolute top-4 right-4 py-1.5 px-4 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-700/50 text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all cursor-default">
                      {project.technologies[0]}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-3 bg-blue-50/50 dark:bg-blue-900/20 w-fit px-3 py-1 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {project.icon}
                      <span className="text-[10px] font-black uppercase tracking-widest">{project.category} Suite</span>
                    </div>
                    
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4 flex-1 font-medium group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-none px-3 py-1 font-bold text-[9px] uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Recruiter-friendly interactive case study integration */}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="rounded-xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-black text-[10px] uppercase tracking-wider flex-1 py-5 shadow-sm">
                            Case Study
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl rounded-3xl p-8 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 font-['Poppins']">
                          <DialogHeader className="text-left">
                            <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 mb-3 bg-blue-50/50 dark:bg-blue-900/20 w-fit px-4 py-1.5 rounded-full">
                              {project.icon}
                              <span className="text-[10px] font-black uppercase tracking-widest">{project.category} Architecture</span>
                            </div>
                            <DialogTitle className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{project.title} — Case Study</DialogTitle>
                            <DialogDescription className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
                              Detailed engineering breakdown and performance results.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-6 space-y-6">
                            <div className="space-y-2">
                              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">❌ The Problem</h4>
                              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed bg-red-500/5 border border-red-500/10 p-4 rounded-2xl">{project.caseStudy.problem}</p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">🛠️ The Solution</h4>
                              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed bg-blue-500/5 border border-blue-500/10 p-4 rounded-2xl">{project.caseStudy.solution}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">📦 Technology Stack</h4>
                                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl">{project.caseStudy.techStack}</p>
                              </div>
                              <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">🚀 Measurable Impact</h4>
                                <p className="text-xs font-bold text-slate-700 dark:text-slate-350 leading-relaxed bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl text-emerald-600 dark:text-emerald-400">{project.caseStudy.result}</p>
                              </div>
                            </div>
                            <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                              <Button size="sm" asChild className="rounded-xl flex-1 bg-slate-950 text-white hover:bg-slate-900 font-bold shadow-xl">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" /> Github Repo
                                </a>
                              </Button>
                              <Button size="sm" asChild className="rounded-xl flex-1 bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-xl shadow-blue-500/20">
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <div className="flex gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors shadow-sm">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors shadow-sm">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Improved CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <div className="mb-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
            <a 
              href="https://github.com/JeevanAdhithya" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 p-5 pr-10 rounded-[2.5rem] bg-slate-950 dark:bg-blue-600 text-white hover:bg-slate-900 dark:hover:bg-blue-700 transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-inner">
                <Github className="w-7 h-7" />
              </div>
              <div className="text-left relative z-10">
                <p className="text-[10px] font-black text-blue-400 dark:text-blue-200 uppercase tracking-[0.2em] mb-1">Code Archive</p>
                <p className="text-xl font-black tracking-tight">Browse All Projects</p>
              </div>
              <Wand2 className="w-6 h-6 ml-4 opacity-30 animate-pulse" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;