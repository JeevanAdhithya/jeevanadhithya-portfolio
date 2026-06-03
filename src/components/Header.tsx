import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, ArrowRight, Zap, Home, User, Code2, Briefcase, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code2 },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#contact', label: 'Contact', icon: Send },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out font-['Poppins'] ${
        isScrolled
          ? (theme === 'dark' ? 'glass-dark py-3 translate-y-0 shadow-2xl' : 'glass-light py-3 shadow-2xl translate-y-0')
          : 'py-6 bg-transparent translate-y-0'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg transition-all group-hover:rotate-12">
              <span className="text-white font-black text-sm">JA</span>
              <motion.div 
                className="absolute -inset-1 bg-blue-500 rounded-xl -z-10 opacity-30 blur-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className={`text-lg sm:text-xl font-black tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Jeevan <span className={`hidden xs:inline ${theme === 'dark' ? 'gradient-text' : 'gradient-text-light'}`}>Adhithya</span> <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>M</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  theme === 'dark' 
                    ? 'text-slate-400 hover:text-white hover:bg-white/5' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Premium Theme Toggle & Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg overflow-hidden relative ${
                theme === 'dark' ? 'glass-dark bg-white/5' : 'glass-light bg-blue-50 shadow-blue-500/10'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ y: 20, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-amber-400 fill-current" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-600 fill-current" />
                  )}
                </motion.div>
              </AnimatePresence>
              
               {/* Background Glow */}
               <motion.div 
                 className={`absolute inset-0 -z-10 opacity-20 blur-md ${theme === 'dark' ? 'bg-amber-400' : 'bg-blue-400'}`}
                 animate={{ scale: [1, 1.4, 1] }}
                 transition={{ duration: 3, repeat: Infinity }}
               />
            </motion.button>

            <Button
              onClick={() => scrollToSection('#contact')}
              className={`hidden md:flex h-12 px-8 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                theme === 'dark' ? 'bg-white text-slate-900 btn-glow-dark' : 'bg-blue-600 text-white btn-soft-light'
              }`}
            >
              Let's Talk
              <Zap className="ml-2 w-3.5 h-3.5 fill-current" />
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-3 rounded-2xl transition-all ${
                theme === 'dark' ? 'bg-white/5 text-white border border-white/10' : 'bg-slate-100 text-slate-900 border border-slate-200'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[-1]"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className={`lg:hidden absolute top-full left-4 right-4 mt-6 p-4 rounded-[2.5rem] shadow-2xl overflow-hidden border ${
                theme === 'dark' ? 'glass-dark bg-slate-900/90' : 'glass-light bg-white/95'
              }`}
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center space-x-4 p-4 rounded-3xl transition-all group ${
                      theme === 'dark' 
                        ? 'hover:bg-white/10 text-white' 
                        : 'hover:bg-blue-50 text-slate-900'
                    }`}
                  >
                    <div className={`p-2 rounded-xl transition-colors ${theme === 'dark' ? 'bg-white/5 group-hover:bg-white/20' : 'bg-slate-100 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest flex-1 text-left">{item.label}</span>
                    <div className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-white/10' : 'bg-blue-600 text-white'}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className={`w-full h-14 rounded-2xl font-black text-xs uppercase tracking-widest ${
                      theme === 'dark' ? 'bg-white text-slate-900' : 'bg-blue-600 text-white shadow-lg'
                    }`}
                  >
                    Get in Touch
                    <Zap className="ml-2 w-4 h-4 fill-current" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </header>
  );
};

export default Header;