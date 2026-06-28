import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Printer, Mail, Phone, MapPin, Github, Linkedin,
  Code2, Server, Database, Brain, Wrench, GraduationCap, Award,
  Layers, Globe, Zap, Cpu, BookOpen, ExternalLink, CheckCircle2,
  Star, Briefcase, Heart, MessageSquare, Lightbulb, Users, Target,
  Shield, TrendingUp, Rocket, Languages, Coffee, Gamepad2, Music4
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// ── Section heading helper ────────────────────────────────────────────────────
const SectionHeading = ({ icon: Icon, iconColor, label }: { icon: any; iconColor: string; label: string }) => (
  <h3 className="print-heading flex items-center gap-1.5 text-[10px] print:text-[9.5px] font-black uppercase tracking-widest text-slate-900 dark:text-white print:text-slate-900 border-b-2 border-slate-100 dark:border-slate-800 print:border-slate-200 pb-1 mb-2.5 print:mb-1.5">
    <span className={`p-1 print:p-0.5 rounded ${iconColor} bg-current/10 flex-shrink-0`}>
      <Icon className="w-3 h-3 print:w-2.5 print:h-2.5 text-white" />
    </span>
    {label}
  </h3>
);

const Resume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Jeevan Adhithya M | Professional Resume';
    const params = new URLSearchParams(window.location.search);
    if (params.get('print') === 'true') {
      const timer = setTimeout(() => window.print(), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const skillGroups = [
    { icon: Code2, bg: 'bg-blue-600', label: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer'] },
    { icon: Server, bg: 'bg-purple-600', label: 'Backend', skills: ['Node.js', 'Express', 'FastAPI', 'Python', 'REST', 'WebSockets'] },
    { icon: Database, bg: 'bg-emerald-600', label: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'Supabase', 'Firebase'] },
    { icon: Brain, bg: 'bg-rose-600', label: 'AI / ML', skills: ['Gemini API', 'OpenAI API', 'RAG Pipelines', 'Prompt Eng.'] },
    { icon: Wrench, bg: 'bg-amber-600', label: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman'] },
  ];

  const projects = [
    {
      title: 'SkillSync Barter Platform',
      icon: Layers, iconColor: 'text-blue-500',
      badge: 'Supabase Realtime', badgeColor: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 print:bg-blue-50 print:text-blue-700',
      stack: 'TypeScript · React · Tailwind · Supabase',
      points: ['Real-time skill matchmaking; WebSocket latency < 150ms', 'Row-level security auth & live Supabase subscriptions'],
      link: 'https://skillsync-gamma-lemon.vercel.app',
    },
    {
      title: 'Civic Lens AI Portal',
      icon: Brain, iconColor: 'text-purple-500',
      badge: 'Gemini API', badgeColor: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20 print:bg-purple-50 print:text-purple-700',
      stack: 'React · Node.js · Express · PostgreSQL · Gemini',
      points: ['AI doc summarizer — processes reports in < 8 seconds', 'Streamed Gemini responses via Node/Express backend'],
      link: 'https://civic-lens-website.vercel.app',
    },
    {
      title: 'Ayush Bridge Healthcare',
      icon: Globe, iconColor: 'text-emerald-500',
      badge: 'Firebase Suite', badgeColor: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 print:bg-emerald-50 print:text-emerald-700',
      stack: 'TypeScript · React · Vite · Firebase',
      points: ['Patient-practitioner portal; 120+ practitioners onboarded', 'Reduced appointment wait times by 45%'],
      link: 'https://ayush-bridge.vercel.app',
    },
    {
      title: 'PriceScout Tracker',
      icon: Zap, iconColor: 'text-amber-500',
      badge: 'Node Cron', badgeColor: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 print:bg-amber-50 print:text-amber-700',
      stack: 'Node.js · Puppeteer · PostgreSQL · React',
      points: ['Automated cron scraper monitoring 500+ products daily', 'Avg. 18% savings via price-drop alert system'],
      link: 'https://pricescout-eta.vercel.app',
    },
  ];

  const softSkills = [
    { icon: Target, label: 'Problem Solving' },
    { icon: Users, label: 'Team Collaboration' },
    { icon: TrendingUp, label: 'Fast Learner' },
    { icon: MessageSquare, label: 'Clear Communication' },
    { icon: Shield, label: 'Detail-Oriented' },
    { icon: Lightbulb, label: 'Creative Thinking' },
  ];

  const interests = [
    { icon: Rocket, label: 'AI Research' },
    { icon: Coffee, label: 'Open Source' },
    { icon: Gamepad2, label: 'UI/UX Design' },
    { icon: Music4, label: 'Photography' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 print:py-0 print:bg-white text-slate-800 dark:text-slate-200 print:text-slate-900 font-['Poppins']">

      {/* Control Panel */}
      <div className="max-w-4xl mx-auto px-6 mb-6 flex justify-between items-center no-print">
        <Button variant="ghost" onClick={() => navigate('/')}
          className="rounded-xl font-bold flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white">
          <ArrowLeft className="w-4 h-4" /><span>Back to Portfolio</span>
        </Button>
        <Button onClick={() => window.print()}
          className="rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 shadow-lg shadow-blue-500/20">
          <Printer className="w-4 h-4" /><span>Print / Save as PDF</span>
        </Button>
      </div>

      {/* Resume Card */}
      <div className="print-card max-w-4xl mx-auto bg-white dark:bg-slate-900 print:bg-white rounded-[2rem] print:rounded-none shadow-xl print:shadow-none border border-slate-100 dark:border-slate-800 print:border-none relative overflow-hidden print:p-0">

        <style dangerouslySetInnerHTML={{
          __html: `
          @media print {
            @page {
              size: A4 portrait;
              margin: 6mm 8mm 6mm 8mm !important;
            }
            html, body {
              background-color: white !important;
              color: #0f172a !important;
              font-size: 9px !important;
              line-height: 1.25 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .no-print {
              display: none !important;
            }
            .print-card {
              border: none !important;
              box-shadow: none !important;
              border-radius: 0 !important;
              max-width: 100% !important;
              width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .print-header {
              padding: 0 0 6px 0 !important;
              margin-bottom: 6px !important;
              display: flex !important;
              flex-direction: row !important;
              justify-content: space-between !important;
              align-items: flex-end !important;
              border-bottom: 1.5px solid #cbd5e1 !important;
            }
            .print-grid {
              display: grid !important;
              grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
              gap: 12px !important;
            }
            .print-aside {
              grid-column: span 4 / span 4 !important;
              padding: 0 10px 0 0 !important;
              border-right: 1px solid #e2e8f0 !important;
              background: transparent !important;
            }
            .print-main {
              grid-column: span 8 / span 8 !important;
              padding: 0 !important;
            }
            .print-section {
              margin-bottom: 6px !important;
              break-inside: avoid;
            }
          }
        ` }} />

        {/* Accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 no-print" />

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <header className="print-header px-8 pt-7 pb-6 print:px-0 print:pt-0 print:pb-2 border-b-2 border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-end md:justify-between gap-4">

          {/* Left: Name + title + tagline */}
          <div>
            <h1 className="text-3xl print:text-2xl font-black text-slate-900 dark:text-white print:text-slate-900 tracking-tight leading-none mb-1">
              Jeevan Adhithya M
            </h1>
            <h2 className="text-xs print:text-[10px] font-black text-blue-600 dark:text-blue-400 print:text-blue-600 uppercase tracking-[0.18em] mb-1.5">
              Full-Stack Engineer &amp; AI Developer
            </h2>
            <p className="text-xs print:text-[9.5px] text-slate-500 dark:text-slate-400 print:text-slate-700 font-medium leading-normal max-w-md">
              Passionate engineer specialized in Node.js, React, and production AI API integrations.
              Focused on building high-performance, modular digital systems.
            </p>
          </div>

          {/* Right: Contact details */}
          <div className="flex-shrink-0 space-y-1 print:space-y-0.5 text-[11px] print:text-[9.5px] font-medium text-slate-600 dark:text-slate-400 print:text-slate-800 md:text-right">
            {[
              { icon: Mail, href: 'mailto:jeevanadhithya21@gmail.com', label: 'jeevanadhithya21@gmail.com', color: 'text-blue-600' },
              { icon: Phone, href: 'tel:+919942373735', label: '+91 99423 73735', color: 'text-blue-600' },
              { icon: MapPin, href: '#', label: 'Coimbatore, Tamil Nadu', color: 'text-blue-600' },
              { icon: Github, href: 'https://github.com/JeevanAdhithya', label: 'github.com/JeevanAdhithya', color: 'text-slate-500' },
              { icon: Linkedin, href: 'https://linkedin.com/in/jeevanadhithya', label: 'linkedin.com/in/jeevanadhithya', color: 'text-sky-600' },
            ].map(({ icon: Icon, href, label, color }) => (
              <div key={label} className="flex items-center md:justify-end gap-1.5">
                <Icon className={`w-3 h-3 print:w-2.5 print:h-2.5 flex-shrink-0 ${color}`} />
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  {label}
                </a>
              </div>
            ))}
          </div>

        </header>

        {/* ── BODY ─────────────────────────────────────────────────── */}
        <div className="print-grid grid grid-cols-1 md:grid-cols-12 gap-0 px-8 py-6 print:px-0 print:py-2">

          {/* LEFT SIDEBAR */}
          <aside className="print-aside md:col-span-4 pr-6 print:pr-3 py-2 space-y-5 print:space-y-3.5 border-r border-slate-100 dark:border-slate-800 print:border-slate-200 bg-slate-50/50 dark:bg-slate-900/50 print:bg-transparent">

            {/* Technical Skills */}
            <section className="print-section">
              <SectionHeading icon={Code2} iconColor="bg-blue-600" label="Technical Skills" />
              <div className="space-y-2 print:space-y-1.5">
                {skillGroups.map(({ icon: Icon, bg, label, skills }) => (
                  <div key={label}>
                    <div className={`flex items-center gap-1 text-[9px] print:text-[8.5px] font-black uppercase tracking-wider mb-0.5 ${bg.replace('bg-', 'text-')}`}>
                      <Icon className="w-2.5 h-2.5 print:w-2 print:h-2" />{label}
                    </div>
                    <div className="flex flex-wrap gap-1 print:gap-0.5">
                      {skills.map(s => (
                        <span key={s} className="px-1.5 py-0.5 print:px-1 print:py-0 text-[9px] print:text-[8px] font-bold rounded bg-white dark:bg-slate-800 print:bg-slate-100 border border-slate-200 dark:border-slate-700 print:border-slate-300 text-slate-700 dark:text-slate-300 print:text-slate-900">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft Skills */}
            <section className="print-section">
              <SectionHeading icon={Heart} iconColor="bg-rose-500" label="Soft Skills" />
              <div className="grid grid-cols-2 gap-1 print:gap-0.5">
                {softSkills.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1 text-[9.5px] print:text-[8.5px] font-semibold text-slate-700 dark:text-slate-300 print:text-slate-800">
                    <Icon className="w-2.5 h-2.5 print:w-2 print:h-2 text-blue-500 flex-shrink-0" />{label}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="print-section">
              <SectionHeading icon={GraduationCap} iconColor="bg-purple-600" label="Education" />
              <div className="space-y-2.5 print:space-y-1.5">
                <div className="relative pl-2.5 border-l-2 border-blue-500">
                  <span className="text-[9px] print:text-[8px] font-black text-blue-600 tracking-wider flex items-center gap-1"><Star className="w-2 h-2" />2023 – 2026</span>
                  <h4 className="text-[10.5px] print:text-[9.5px] font-bold text-slate-900 dark:text-white print:text-slate-900 mt-0.5 leading-tight">Diploma in Computer Engg.</h4>
                  <p className="text-[8.5px] print:text-[8px] font-medium text-slate-500 print:text-slate-600">Nachimuthu Polytechnic College</p>
                  <p className="text-[8.5px] print:text-[8px] font-black text-emerald-600 print:text-emerald-700 mt-0.5">⭐ 96.5% Marks</p>
                </div>
                <div className="relative pl-2.5 border-l-2 border-purple-500">
                  <span className="text-[9px] print:text-[8px] font-black text-purple-600 tracking-wider flex items-center gap-1"><Star className="w-2 h-2" />Passed 2023</span>
                  <h4 className="text-[10.5px] print:text-[9.5px] font-bold text-slate-900 dark:text-white print:text-slate-900 mt-0.5 leading-tight">10th Std Matriculation</h4>
                  <p className="text-[8.5px] print:text-[8px] font-medium text-slate-500 print:text-slate-600">Shrimahathma Vidhy Manthir</p>
                  <p className="text-[8.5px] print:text-[8px] font-black text-emerald-600 print:text-emerald-700 mt-0.5">⭐ 89.9% Marks</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="print-section">
              <SectionHeading icon={Award} iconColor="bg-amber-500" label="Certifications" />
              <div className="space-y-1.5 print:space-y-1">
                {[
                  { icon: BookOpen, title: 'Meta Front-End Developer', org: 'Meta / Coursera · 2024', color: 'text-blue-500' },
                  { icon: Cpu, title: 'AWS Academy Graduate', org: 'Amazon Web Services · 2024', color: 'text-amber-500' },
                  { icon: Brain, title: 'Prompt Eng. Specialist', org: 'DeepLearning.AI · 2023', color: 'text-rose-500' },
                ].map(({ icon: Icon, title, org, color }) => (
                  <div key={title} className="flex items-start gap-1.5">
                    <Icon className={`w-2.5 h-2.5 print:w-2 print:h-2 mt-0.5 flex-shrink-0 ${color}`} />
                    <div>
                      <h4 className="text-[9.5px] print:text-[8.5px] font-bold text-slate-900 dark:text-white print:text-slate-900 leading-tight">{title}</h4>
                      <p className="text-[8.5px] print:text-[7.5px] font-bold text-slate-400 print:text-slate-500 uppercase tracking-wider">{org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="print-section">
              <SectionHeading icon={Languages} iconColor="bg-cyan-600" label="Languages" />
              <div className="space-y-1 print:space-y-0.5">
                {[
                  { lang: 'Tamil', level: 'Native', w: 'w-full' },
                  { lang: 'English', level: 'Professional', w: 'w-4/5' },
                ].map(({ lang, level, w }) => (
                  <div key={lang}>
                    <div className="flex justify-between text-[8.5px] print:text-[8px] font-bold mb-0.5">
                      <span className="text-slate-800 dark:text-slate-200 print:text-slate-900">{lang}</span>
                      <span className="text-slate-400 print:text-slate-600">{level}</span>
                    </div>
                    <div className="h-1 print:h-0.5 bg-slate-200 dark:bg-slate-700 print:bg-slate-200 rounded-full">
                      <div className={`h-full ${w} bg-gradient-to-r from-blue-500 to-indigo-500 print:bg-blue-600 rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests */}
            <section className="print-section">
              <SectionHeading icon={Coffee} iconColor="bg-orange-500" label="Interests" />
              <div className="flex flex-wrap gap-1 print:gap-0.5">
                {interests.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1 text-[9px] print:text-[8px] font-semibold text-slate-600 dark:text-slate-400 print:text-slate-800 bg-white dark:bg-slate-800 print:bg-slate-100 border border-slate-200 dark:border-slate-700 print:border-slate-300 px-1.5 py-0.5 rounded">
                    <Icon className="w-2.5 h-2.5 print:w-2 print:h-2 text-blue-500" />{label}
                  </div>
                ))}
              </div>
            </section>

          </aside>

          {/* RIGHT MAIN */}
          <main className="print-main md:col-span-8 pl-6 print:pl-3 py-2 space-y-4 print:space-y-3">

            {/* Profile Summary */}
            <section className="print-section">
              <SectionHeading icon={Briefcase} iconColor="bg-blue-600" label="Profile Summary" />
              <p className="text-[10.5px] print:text-[9px] text-slate-600 dark:text-slate-400 print:text-slate-800 leading-relaxed font-medium">
                Self-driven Computer Engineering graduate (96.5%) specializing in modular web apps and cloud AI integrations.
                Built peer-to-peer barter platforms, LLM summarization dashboards, and data-visualization consoles.
                Passionate about backend optimization, database performance, and shipping AI-driven user experiences at scale.
              </p>
            </section>

            {/* What I Bring */}
            <section className="print-section">
              <SectionHeading icon={Rocket} iconColor="bg-indigo-600" label="What I Bring" />
              <div className="grid grid-cols-2 gap-1.5 print:gap-1">
                {[
                  { icon: TrendingUp, color: 'text-blue-500', text: '20+ production web apps' },
                  { icon: Brain, color: 'text-rose-500', text: 'AI pipelines with Gemini & OpenAI' },
                  { icon: Shield, color: 'text-emerald-500', text: 'Secure auth & real-time data sync' },
                  { icon: Rocket, color: 'text-amber-500', text: 'End-to-end MERN stack delivery' },
                ].map(({ icon: Icon, color, text }) => (
                  <div key={text} className="flex items-start gap-1.5 bg-slate-50 dark:bg-slate-800/50 print:bg-slate-50 rounded-lg px-2.5 py-1.5 print:py-1 border print:border-slate-200">
                    <Icon className={`w-3 h-3 print:w-2.5 print:h-2.5 mt-0.5 flex-shrink-0 ${color}`} />
                    <span className="text-[9.5px] print:text-[8.5px] font-semibold text-slate-700 dark:text-slate-300 print:text-slate-900 leading-tight">{text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Projects — compact */}
            <section className="print-section">
              <SectionHeading icon={Layers} iconColor="bg-indigo-600" label="Core Projects" />
              <div className="space-y-2 print:space-y-1.5">
                {projects.map(({ title, icon: Icon, iconColor, badge, badgeColor, stack, points, link }) => (
                  <div key={title} className="border border-slate-100 dark:border-slate-800 print:border-slate-200 rounded-xl print:rounded-lg px-3 py-2 print:py-1.5">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <Icon className={`w-3 h-3 print:w-2.5 print:h-2.5 flex-shrink-0 ${iconColor}`} />
                        <h4 className="text-[11px] print:text-[9.5px] font-black text-slate-900 dark:text-white print:text-slate-900 leading-tight">{title}</h4>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <span className={`text-[8px] print:text-[7.5px] font-black uppercase px-1.5 py-0.5 print:px-1 print:py-0 rounded ${badgeColor}`}>{badge}</span>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 no-print">
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-[8.5px] print:text-[7.5px] font-bold text-slate-400 print:text-slate-500 mb-1 pl-4.5 print:pl-4">{stack}</p>
                    <ul className="space-y-0.5 pl-4.5 print:pl-4">
                      {points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1 text-[9.5px] print:text-[8.5px] text-slate-600 dark:text-slate-400 print:text-slate-800 font-medium leading-snug">
                          <CheckCircle2 className="w-2.5 h-2.5 print:w-2 print:h-2 text-blue-500 mt-0.5 flex-shrink-0" />{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Availability */}
            <section className="print-section">
              <SectionHeading icon={Target} iconColor="bg-emerald-600" label="Availability & Goals" />
              <div className="grid grid-cols-2 gap-1.5 print:gap-1">
                {[
                  { icon: Briefcase, color: 'text-blue-500', label: 'Open To', value: 'Full-Stack Internships & Placements' },
                  { icon: Globe, color: 'text-purple-500', label: 'Work Mode', value: 'Remote / Hybrid / On-site' },
                  { icon: Rocket, color: 'text-rose-500', label: 'Goal', value: 'Senior Engineer in AI Startup' },
                  { icon: MessageSquare, color: 'text-emerald-500', label: 'Response', value: 'Available within 24 hours' },
                ].map(({ icon: Icon, color, label, value }) => (
                  <div key={label} className="flex items-start gap-1.5 bg-slate-50 dark:bg-slate-800/50 print:bg-slate-50 rounded-lg px-2.5 py-1.5 print:py-1 border print:border-slate-200">
                    <Icon className={`w-3 h-3 print:w-2.5 print:h-2.5 mt-0.5 flex-shrink-0 ${color}`} />
                    <div>
                      <p className="text-[8px] print:text-[7px] font-black uppercase tracking-widest text-slate-400 print:text-slate-500">{label}</p>
                      <p className="text-[9.5px] print:text-[8.5px] font-bold text-slate-800 dark:text-slate-200 print:text-slate-900 leading-tight">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>

      </div>
    </div>
  );
};

export default Resume;
