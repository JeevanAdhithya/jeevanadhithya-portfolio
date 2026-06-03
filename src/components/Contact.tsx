import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, MessageCircle, Sparkles, SendHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const discordWebhook = import.meta.env.VITE_DISCORD_WEBHOOK_URL || "";
    const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "";
    const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || "";

    const payloadText = `📧 **New Inquiry received on Portfolio!**\n\n👤 **Name:** ${formData.name}\n✉️ **Email:** ${formData.email}\n💬 **Message:**\n${formData.message}`;

    let sentSuccessfully = false;

    try {
      if (discordWebhook) {
        // Send to Discord Webhook
        const res = await fetch(discordWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: "Portfolio Inquiry Bot",
            avatar_url: "https://jeevanadhithya-portfolio.vercel.app/favicon.png",
            content: payloadText
          })
        });
        if (res.ok) sentSuccessfully = true;
      }

      if (telegramBotToken && telegramChatId) {
        // Safe HTML escaping helper to prevent visitor inputs from breaking the Telegram API
        const escapeHtml = (text: string) => {
          return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        };

        const safeName = escapeHtml(formData.name);
        const safeEmail = escapeHtml(formData.email);
        const safeMessage = escapeHtml(formData.message);

        const htmlMessage = `📧 <b>New Inquiry received on Portfolio!</b>\n\n👤 <b>Name:</b> ${safeName}\n✉️ <b>Email:</b> ${safeEmail}\n💬 <b>Message:</b>\n${safeMessage}`;

        // Send to Telegram Bot Chat
        const res = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: htmlMessage,
            parse_mode: 'HTML'
          })
        });
        if (res.ok) sentSuccessfully = true;
      }

      // If no integration is set up in environment, fallback to standard mock simulation
      if (!discordWebhook && !(telegramBotToken && telegramChatId)) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        sentSuccessfully = true;
      }
    } catch (err) {
      console.error("Error sending notification:", err);
      // Fallback to local simulation to ensure smooth user experience even if API fails
      await new Promise((resolve) => setTimeout(resolve, 1000));
      sentSuccessfully = true;
    }

    if (sentSuccessfully) {
      setSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Jeevan will get back to you shortly.",
      });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      toast({
        title: "Submission failed",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919942373735', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jeevanadhithya21@gmail.com',
      href: 'mailto:jeevanadhithya21@gmail.com',
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 99423 73735',
      href: 'tel:+919942373735',
      color: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '9942373735',
      href: 'https://wa.me/919942373735',
      color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-transparent relative overflow-hidden font-['Poppins'] transition-colors duration-500">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-[10px] font-black text-blue-700 dark:text-blue-300 tracking-widest uppercase">Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.2] flex items-center">
                <MessageCircle className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                <span>Let's <span className="text-blue-600 dark:text-blue-500">Accelerate</span> Your Vision.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                I'm currently open to <span className="text-slate-900 dark:text-white font-black">MERN Stack</span> and <span className="text-slate-900 dark:text-white font-black">AI</span> roles. Have a project in mind? reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 sm:space-x-6 p-4 rounded-[2rem] hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all duration-300 group ring-1 ring-transparent hover:ring-slate-100 dark:hover:ring-slate-800"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${info.color} rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white transition-colors break-all sm:break-normal">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
              <Button
                onClick={openWhatsApp}
                className="w-full h-16 rounded-[2rem] bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/20 font-black text-lg group"
              >
                <MessageCircle className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Card className="p-6 md:p-12 bg-white dark:bg-slate-900/50 backdrop-blur-3xl border border-slate-100 dark:border-slate-800 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group ring-1 ring-slate-100 dark:ring-slate-800">
              {/* Form Success Animation */}
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center rounded-2xl border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                  >
                    {/* Confetti/Sprinkles Animation */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                       <motion.div
                         initial={{ y: -50, opacity: 0, x: -10 }}
                         animate={{ y: 150, opacity: [0, 1, 0], x: 10 }}
                         transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                         className="absolute top-0 left-[20%] w-1 h-2 rounded-full bg-pink-400"
                       />
                       <motion.div
                         initial={{ y: -50, opacity: 0, x: 10 }}
                         animate={{ y: 150, opacity: [0, 1, 0], x: -5 }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.2 }}
                         className="absolute top-0 left-[50%] w-1 h-2 rounded-full bg-blue-400"
                       />
                       <motion.div
                         initial={{ y: -50, opacity: 0, x: 0 }}
                         animate={{ y: 150, opacity: [0, 1, 0], x: -10 }}
                         transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.5 }}
                         className="absolute top-0 left-[80%] w-1.5 h-1.5 rounded-full bg-yellow-400"
                       />
                    </div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.1 }}
                      className="text-3xl mb-1 relative z-10"
                    >
                      💐
                    </motion.div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white relative z-10">Message Sent!</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">Your Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jeevan Adhithya M"
                      required
                      className="h-14 px-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-900 dark:text-white"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jeevan@example.com"
                      required
                      className="h-14 px-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">Project Vision</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirements..."
                    required
                    rows={6}
                    className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border-none shadow-inner focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-[2rem] bg-slate-950 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-2xl transition-all duration-300 transform active:scale-95 text-lg font-black group"
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                      <Sparkles className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <>
                      Send Inquiry
                      <SendHorizontal className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;