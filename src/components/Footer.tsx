import { Github, Linkedin, Heart, Mail, Phone, ExternalLink, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/JeevanAdhithya',
      label: 'GitHub',
      color: 'hover:bg-[#24292e]'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jeevanadhithya',
      label: 'LinkedIn',
      color: 'hover:bg-[#0077b5]'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/919942373735',
      label: 'WhatsApp',
      color: 'hover:bg-[#25D366]'
    }
  ];

  return (
    <footer className="bg-white dark:bg-transparent pt-20 pb-10 relative overflow-hidden font-['Poppins'] transition-colors duration-500">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <span className="text-white font-black text-sm">JA</span>
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Jeevan <span className="text-blue-600">Adhithya</span> <span className="text-slate-900 dark:text-white">M</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
              A dedicated <span className="text-slate-900 dark:text-white font-bold">MERN Stack Developer</span> and 
              <span className="text-blue-600 font-bold"> AI Enthusiast</span> from Coimbatore. I build 
              modern web solutions that bring ideas to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-500 dark:text-slate-400 hover:text-white transition-all duration-300 shadow-sm ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:ml-12 space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg">Quick Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg">Contact Details</h4>
            <div className="space-y-4">
              <a href="mailto:jeevanadhithya21@gmail.com" className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 border border-slate-200 dark:border-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm font-medium">jeevanadhithya21@gmail.com</span>
              </a>
              <a href="tel:+919942373735" className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-indigo-600 border border-slate-200 dark:border-slate-800 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm font-medium">+91 99423 73735</span>
              </a>
            </div>
            
            <div className="pt-4">
              <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                <div className="bg-white dark:bg-slate-950/50 rounded-[15px] p-4 flex items-center justify-between shadow-inner">
                  <div className="text-xs">
                    <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">Status</p>
                    <p className="text-slate-900 dark:text-white font-bold">Open for Collaboration</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
            © {currentYear} Crafted with <Heart className="w-3 h-3 text-red-500 inline mx-1 fill-red-500 animate-pulse" /> by <span className="text-slate-900 dark:text-white font-bold">Jeevan Adhithya M</span>
          </p>
          <div className="flex space-x-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;