import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers, Smartphone, Database, Zap, Sparkles, Wand2, Globe, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

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
      icon: <Layers className="w-5 h-5 text-blue-500" />
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
      icon: <Globe className="w-5 h-5 text-purple-500" />
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
      icon: <Sparkles className="w-5 h-5 text-cyan-500" />
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
      icon: <Database className="w-5 h-5 text-amber-500" />
    },
    {
      id: 5,
      title: 'Sentinel Insights',
      description: 'Advanced data visualization and security monitoring system for enterprise-level threat detection and analysis.',
      image: project5,
      technologies: ['React', 'D3.js', 'Tailwind', 'Vercel'],
      github: 'https://github.com/JeevanAdhithya/sentinel-insights',
      live: 'https://jeevanadhithya-portfolio.vercel.app', // Using portfolio as fallback for sentinel link found
      category: 'Web',
      icon: <Rocket className="w-5 h-5 text-rose-500" />
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
      icon: <Zap className="w-5 h-5 text-emerald-500" />
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
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
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden border border-slate-100 dark:border-slate-800/50 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm hover:shadow-3xl hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-all duration-500 flex flex-col ring-1 ring-slate-100 dark:ring-slate-800 cursor-default">
                  {/* Premium Glowing Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-700 pointer-events-none rounded-[2.5rem]" />
                  
                  {/* Image with Parallax-like effect */}
                  <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[1.8rem] bg-slate-100 dark:bg-slate-800">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={{ scale: 1.1, rotate: 1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                      <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        <Button size="sm" asChild className="rounded-xl flex-1 bg-white text-slate-900 hover:bg-slate-100 font-black border-none shadow-xl">
                          <a href={project.github} target="_blank"><Github className="w-4 h-4 mr-2" /> Source</a>
                        </Button>
                        <Button size="sm" asChild className="rounded-xl flex-1 bg-blue-600 text-white hover:bg-blue-700 font-black border-none shadow-xl shadow-blue-500/20">
                          <a href={project.live} target="_blank"><ExternalLink className="w-4 h-4 mr-2" /> Launch</a>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Glowing Tech Tag */}
                    <div className="absolute top-4 right-4 py-1.5 px-4 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-700/50 text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all cursor-default">
                      {project.technologies[0]}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 mb-6 bg-blue-50/50 dark:bg-blue-900/20 w-fit px-4 py-2 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {project.icon}
                      <span className="text-[10px] font-black uppercase tracking-widest">{project.category} Suite</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1 font-medium group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-slate-800">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-none px-3 py-1 font-bold text-[9px] uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                          {tech}
                        </Badge>
                      ))}
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