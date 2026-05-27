import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Star, GitFork, ExternalLink, Library, Code2, Tag, Calendar, 
  Settings, Layout, Database, Smartphone, Globe, Cpu, Zap, Sparkles, 
  Cloud, Terminal, Palette, Workflow, Layers
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

const GithubRepos = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/JeevanAdhithya/repos?sort=updated&per_page=6');
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  const getRepoIcon = (name: string, description: string) => {
    const text = (name + " " + (description || "")).toLowerCase();
    if (text.includes("web") || text.includes("site") || text.includes("landing")) return <Globe className="w-5 h-5" />;
    if (text.includes("app") || text.includes("android") || text.includes("ios") || text.includes("mobile")) return <Smartphone className="w-5 h-5" />;
    if (text.includes("db") || text.includes("sql") || text.includes("mongo") || text.includes("database")) return <Database className="w-5 h-5" />;
    if (text.includes("ai") || text.includes("gemini") || text.includes("gpt") || text.includes("bot")) return <Cpu className="w-5 h-5" />;
    if (text.includes("api") || text.includes("server") || text.includes("backend")) return <Terminal className="w-5 h-5" />;
    if (text.includes("ui") || text.includes("design") || text.includes("css") || text.includes("style")) return <Palette className="w-5 h-5" />;
    if (text.includes("auth") || text.includes("login") || text.includes("security")) return <Zap className="w-5 h-5" />;
    if (text.includes("react") || text.includes("next") || text.includes("view")) return <Layout className="w-5 h-5" />;
    if (text.includes("tool") || text.includes("cli") || text.includes("utility")) return <Settings className="w-5 h-5" />;
    return <Workflow className="w-5 h-5" />;
  };

  return (
    <section id="github" className="py-16 md:py-24 bg-white dark:bg-transparent transition-colors duration-500 overflow-hidden font-['Poppins']">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-4">
              <Github className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span className="text-[10px] font-black uppercase text-blue-700 dark:text-blue-300 tracking-widest">Open Source</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 md:mb-6 leading-tight">
              GitHub <span className="text-blue-600 dark:text-blue-400">Repositories</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">
              A curated selection of my latest <span className="text-slate-950 dark:text-white font-black underline decoration-blue-500/30">dev work</span> and experiments.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={() => window.open('https://github.com/JeevanAdhithya', '_blank')}
              variant="outline" 
              className="rounded-full h-12 md:h-14 px-8 border-slate-200 dark:border-slate-800 dark:bg-slate-950 font-bold group shadow-sm"
            >
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Gallery
            </Button>
          </motion.div>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 rounded-[2rem] bg-slate-50 dark:bg-slate-800 animate-pulse border border-slate-100 dark:border-slate-700/50" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10 rounded-[2.5rem] -rotate-1 group-hover:rotate-1 transition-transform" />
                <Card className="p-8 h-full bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800/50 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-2xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        {getRepoIcon(repo.name, repo.description)}
                      </div>
                      <div className="flex space-x-3">
                        <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 text-xs font-bold bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg">
                          <Star className="w-3.5 h-3.5 text-amber-500" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 text-xs font-bold bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-lg">
                          <GitFork className="w-3.5 h-3.5 text-blue-500" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-slate-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {repo.name}
                    </h3>
                    
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium line-clamp-2 leading-relaxed h-[2.8rem]">
                      {repo.description || "Experimental project focusing on modern architectures and clean implementation."}
                    </p>

                    <div className="mt-auto space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                        {(() => {
                          const isMobile = ['dart', 'flutter', 'kotlin', 'swift'].includes((repo.language || '').toLowerCase()) || 
                                           (repo.name + ' ' + repo.description).toLowerCase().includes('mobile') ||
                                           (repo.name + ' ' + repo.description).toLowerCase().includes('flutter');
                          const platform = isMobile ? "Mobile" : "Web";
                          const PlatformIcon = isMobile ? Smartphone : Globe;
                          return (
                            <div className="flex items-center space-x-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700/50">
                              <PlatformIcon className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                              <span className="text-[9px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                {platform}
                              </span>
                            </div>
                          );
                        })()}
                        {repo.language && (
                          <div className="flex items-center space-x-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100/50 dark:border-blue-800/50">
                            <Zap className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                            <span className="text-[9px] font-black uppercase tracking-wider text-blue-700 dark:text-blue-300">
                              {repo.language}
                            </span>
                          </div>
                        )}
                        <span className="flex items-center text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                          <Calendar className="w-2.5 h-2.5 mr-1" />
                          {formatDate(repo.updated_at)}
                        </span>
                      </div>

                      <Button 
                        onClick={() => window.open(repo.html_url, '_blank')}
                        className="w-full h-12 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all font-black text-xs uppercase tracking-widest"
                      >
                        Source Code
                        <ExternalLink className="ml-2 w-3.5 h-3.5 opacity-60" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubRepos;
