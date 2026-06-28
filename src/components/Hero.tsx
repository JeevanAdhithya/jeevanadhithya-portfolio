import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, MessageCircle, Zap, Sparkles, ArrowUpRight, Trophy, Code2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import gsap from 'gsap';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import ThreeSphere from './ThreeSphere';

// Vercel/Production Fix: Use proper ES imports so Vite bundles the assets correctly
import heroImage from '../assets/media__1773835969101.jpg';

const Hero = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  if (!mounted) return null;

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <ThreeSphere theme={theme || 'light'} />
      </div>

      {/* Floating Blobs (Premium Look) */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse parallax-item" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse parallax-item" />
      
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-[1] pointer-events-none opacity-30"
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 120,
            particles: {
              color: { value: theme === 'dark' ? "#ffffff" : "#4f46e5" },
              links: { color: theme === 'dark' ? "#ffffff" : "#4f46e5", distance: 150, enable: true, opacity: 0.05, width: 1 },
              move: { enable: true, speed: 0.6 },
              number: { value: 30, density: { enable: true, area: 800 } },
              opacity: { value: 0.1 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2 } },
            },
          } as any}
        />
      )}

      <div className="container mx-auto px-6 relative z-10 max-w-7xl pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Left */}
          {/* NOTE: Text column is order-1 so it appears on the left */}


          <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:pr-6 relative text-left order-1 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md relative overflow-hidden"
            >
              <Zap className="w-3 h-3 text-blue-500 fill-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">
                Crafting Elite Web & AI Architectures
              </span>
              <motion.div 
                className="absolute left-0 bottom-0 h-px bg-blue-500/30"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </motion.div>

            <div className="space-y-1">
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                >
                  Jeevan
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none gradient-text"
                >
                  Adhithya M
                </motion.h1>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`text-base sm:text-lg max-w-xl leading-relaxed font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Engineering <span className={theme === 'dark' ? 'text-white underline decoration-blue-500 decoration-2' : 'text-blue-600 font-bold underline decoration-blue-500 decoration-2'}>scalable web architectures</span> and intelligent <span className="text-purple-500 font-black">AI integrations</span>. A Full-Stack Engineer focused on building robust, production-grade solutions.
            </motion.p>

            {/* Micro Stats */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="flex items-center space-x-6 sm:space-x-12 py-2"
            >
              {[
                { val: '3+ Yrs', label: 'Learning & Dev' },
                { val: '20+', label: 'Websites Developed' },
                { val: '5+', label: 'Mobile Applications' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col group cursor-default">
                  <span className={`text-xl sm:text-2xl font-black transition-transform group-hover:-translate-y-0.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{stat.val}</span>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500 group-hover:text-blue-500 transition-colors">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection('#projects')}
                className={`h-12 px-6 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl lg:w-auto w-full group overflow-hidden relative ${
                  theme === 'dark' ? 'bg-white text-slate-950 hover:bg-white/90' : 'bg-slate-950 text-white hover:bg-slate-800'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  Explore Case Studies
                  <Code2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </span>
                <motion.div className="absolute inset-0 bg-blue-50/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button
                variant="outline"
                asChild
                className={`h-12 px-6 rounded-xl font-black text-xs uppercase tracking-widest border-2 transition-all lg:w-auto w-full group relative overflow-hidden bg-transparent ${
                  theme === 'dark' 
                    ? 'border-white/20 hover:bg-white/5 text-white hover:border-white' 
                    : 'border-slate-200 hover:bg-slate-50 text-slate-900 hover:border-slate-400'
                }`}
              >
                <a href="/resume">
                  <span className="relative z-10 flex items-center">
                    View Resume
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </span>
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className={`h-12 px-6 rounded-xl font-black text-xs uppercase tracking-widest border-2 transition-all lg:w-auto w-full group relative overflow-hidden bg-transparent ${
                  theme === 'dark' 
                    ? 'border-white/10 hover:bg-white/5 text-white/80 hover:text-white' 
                    : 'border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                }`}
              >
                <a href="/resume?print=true" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    Download Resume
                    <Download className="ml-1.5 h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex gap-8 pt-2"
            >
              {[
                { icon: Github, href: "https://github.com/JeevanAdhithya" },
                { icon: Linkedin, href: "https://linkedin.com/in/jeevanadhithya" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`transition-all hover:scale-110 ${theme === 'dark' ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-blue-600'}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Hero Image Right (9:16 Vertical Card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end order-2 lg:order-2"
          >
            <div className={`relative w-full max-w-[420px] aspect-[3/4] rounded-[3.5rem] p-4 backdrop-blur-2xl shadow-2xl transition-all duration-700 group ${
              theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-slate-200'
            }`}>
              <div className="w-full h-full rounded-[2.8rem] overflow-hidden shadow-2xl relative">
                <img
                  src={heroImage}
                  alt="Jeevan Adhithya M"
                  className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-xs shadow-lg border-2 border-white dark:border-slate-900">
                  JA
                </div>
                <p className="text-xs font-black text-slate-900 dark:text-white">Jeevan Adhithya M</p>
              </motion.div>

              <div className="absolute -inset-10 bg-blue-600/5 blur-3xl -z-10 rounded-full animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;