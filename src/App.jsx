import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Menu, 
  X, 
  Phone, 
  CheckCircle, 
  Lightbulb, 
  Activity, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  MapPin,
  Clock,
  Star,
  Quote,
  BatteryCharging,
  Wifi,
  Wrench,
  Cpu
} from 'lucide-react';
import './App.css';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// --- Data Arrays (Simulating a Database) ---

const SERVICES = [
  {
    id: 1,
    title: "Panel Upgrades",
    desc: "Modernize your power backbone. We upgrade old fuse boxes to safe, modern breaker panels handling 200A+ loads.",
    icon: Zap
  },
  {
    id: 2,
    title: "Smart Home Automation",
    desc: "Control your home with your voice. Installation of smart switches, thermostats, and integrated security systems.",
    icon: Wifi
  },
  {
    id: 3,
    title: "EV Charger Install",
    desc: "Level 2 charging stations installed in your garage. Fast, safe, and code-compliant for Tesla and all major EV brands.",
    icon: BatteryCharging
  },
  {
    id: 4,
    title: "Lighting Design",
    desc: "Recessed lighting, chandeliers, and landscape illumination designed to enhance the aesthetic of your property.",
    icon: Lightbulb
  },
  {
    id: 5,
    title: "Industrial Wiring",
    desc: "Heavy-duty 3-phase wiring for machinery, warehouses, and commercial office fit-outs.",
    icon: Wrench
  },
  {
    id: 6,
    title: "Surge Protection",
    desc: "Whole-home surge protection to guard your expensive electronics against lightning and grid spikes.",
    icon: Activity
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "SparkWire came out at 10 PM on a Sunday when our main breaker blew. Professional, calm, and fixed it in under an hour. Lifesavers!",
    rating: 5
  },
  {
    id: 2,
    name: "TechStart Office",
    role: "Commercial Client",
    text: "They handled the entire rewiring of our new server room. The cable management was a work of art. Highly recommended for business needs.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Adebayo",
    role: "Property Manager",
    text: "I use SparkWire for all my rental properties. Their safety inspections are thorough and their pricing is always transparent.",
    rating: 5
  }
];

const PROCESS_STEPS = [
  { num: "01", title: "Consultation", desc: "We assess your needs and provide a clear, upfront quote." },
  { num: "02", title: "Design & Plan", desc: "We map out the safest, most efficient electrical path." },
  { num: "03", title: "Installation", desc: "Precision work using premium copper wiring and parts." },
  { num: "04", title: "Testing", desc: "Rigorous stress testing before we consider the job done." }
];

// --- Reusable Components ---

const SectionHeader = ({ title, subtitle, align = "center", light = false }) => (
  <div className={`mb-16 ${align === "left" ? "text-left" : "text-center"}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-3xl md:text-5xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
      <span className="text-yellow-500">.</span>
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: align === "left" ? "60px" : "100px" }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`h-1.5 bg-yellow-500 mt-4 rounded-full ${align === "center" ? "mx-auto" : ""}`}
    />
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className={`mt-4 text-lg max-w-2xl mx-auto ${light ? 'text-slate-400' : 'text-slate-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Main Application ---

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated Scroll Function with Offset Calculation
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Height of the sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-yellow-500 selection:text-white overflow-x-hidden">
      
      {/* 1. Navigation Bar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-slate-100' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="bg-yellow-500 p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-yellow-500/30">
              <Zap className="text-white" size={20} fill="currentColor" />
            </div>
            <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              SparkWire<span className="text-yellow-500">Pros</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Process', 'Testimonials'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                className={`text-sm font-bold uppercase tracking-wide hover:text-yellow-500 transition-colors relative group ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_4px_14px_0_rgba(234,179,8,0.39)]"
            >
              Get Quote
            </button>
          </div>

          <button 
            className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 fixed inset-0 top-[60px] z-40 overflow-y-auto"
            >
              <div className="flex flex-col p-8 gap-6">
                {['Home', 'About', 'Services', 'Process', 'Testimonials', 'Contact'].map((item, idx) => (
                  <motion.button 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className="text-white text-2xl font-bold text-left py-4 border-b border-slate-800 hover:text-yellow-500 flex justify-between items-center group"
                  >
                    {item}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-yellow-500" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Hero Section */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
            alt="Electrical Panel" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold text-xs md:text-sm uppercase tracking-wider mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              Serving Local Residents & Businesses
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8">
              Powering Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                World Safely.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
              We provide industrial-grade electrical solutions for your home and office. Certified experts, 24/7 availability, and a 100% safety guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] flex items-center justify-center gap-2 group"
              >
                <Zap size={20} fill="currentColor" className="group-hover:scale-110 transition-transform"/> 
                Book an Electrician
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center"
              >
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats / Trusted Strip */}
      <div className="bg-yellow-500 py-8 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-around items-center gap-8 md:gap-0">
            {[
              { num: "15+", label: "Years Active" },
              { num: "2k+", label: "Projects Done" },
              { num: "100%", label: "Safety Record" },
              { num: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-slate-900">{stat.num}</div>
                <div className="text-slate-800 font-bold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                [attachment_0](attachment)
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
                  alt="Electrician at work" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <ShieldCheck className="text-yellow-500" size={32} />
                  <span className="font-bold text-slate-900 text-lg">Fully Licensed</span>
                </div>
                <p className="text-sm text-slate-500">License #EL-99201-X. Insured up to $2M liability for your peace of mind.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-yellow-600 font-bold uppercase tracking-widest mb-4">About SparkWire</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                We Don't Just Fix Wires. <br />We Engineer Safety.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Electrical work isn't a DIY hobby. It requires precision, deep knowledge of codes, and the right tools. At SparkWire Pros, we bridge the gap between complex electrical engineering and home comfort.
              </p>
              <ul className="space-y-4 mb-8">
                {["Residential Renovations", "Commercial Fit-outs", "Emergency Repairs"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-800 font-semibold">
                    <CheckCircle className="text-yellow-500" size={20} /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollToSection('contact')} className="text-slate-900 font-black border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition-colors">
                Meet the Team &rarr;
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Services Section (Expanded) */}
      <section id="services" className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 -skew-x-12 opacity-50 z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader 
            title="Our Expertise" 
            subtitle="From simple socket repairs to complex industrial automation, we cover the full spectrum." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 group hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                  <service.icon size={28} className="text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-yellow-600 uppercase tracking-wide group-hover:gap-2 transition-all">
                  Book Now <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process Section (New) */}
      <section id="process" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="How We Work" subtitle="Transparent, efficient, and clean." light={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                {idx !== PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-10" />
                )}
                <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-yellow-500 border-4 border-slate-900 mb-6 mx-auto relative z-10 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
                <p className="text-slate-400 text-center text-sm leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section (New) */}
      <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeader title="Client Stories" subtitle="Don't just take our word for it." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl relative"
              >
                <Quote className="absolute top-6 right-6 text-yellow-100" size={60} />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-8 italic relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 text-white relative">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-yellow-500/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8">Let's Get Wired.</h2>
              <p className="text-slate-400 text-lg mb-12">
                Have a project in mind or an electrical emergency? Reach out now. We respond within 15 minutes during business hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500/10 p-4 rounded-lg">
                    <Phone className="text-yellow-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Phone</h4>
                    <p className="text-slate-300">0802-316-9274</p>
                    <p className="text-slate-500 text-sm">Mon-Fri 8am - 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500/10 p-4 rounded-lg">
                    <MapPin className="text-yellow-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">HQ Location</h4>
                    <p className="text-slate-300">123 Industrial Ave, Spark City</p>
                    <p className="text-slate-500 text-sm">Servicing entire metro area</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-yellow-500/10 p-4 rounded-lg">
                    <MessageCircle className="text-yellow-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">WhatsApp</h4>
                    <p className="text-slate-300">Instant Chat Available</p>
                    <a href="https://wa.me/12345678" className="text-yellow-500 text-sm underline mt-1 block">Start Chat</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Form */}
            <div className="w-full md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg p-4 text-white focus:border-yellow-500 focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Service Needed</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-lg p-4 text-white focus:border-yellow-500 focus:outline-none transition-colors">
                    <option>Residential Repair</option>
                    <option>Commercial Project</option>
                    <option>Installation</option>
                    <option>Emergency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-slate-900 border border-slate-800 rounded-lg p-4 text-white focus:border-yellow-500 focus:outline-none transition-colors" placeholder="Describe your issue..."></textarea>
                </div>
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 rounded-lg transition-colors text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-black text-slate-500 py-12 border-t border-slate-900 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="bg-yellow-500 p-1 rounded">
                  <Zap size={16} className="text-slate-900"/>
               </div>
               <span className="text-white font-bold text-lg uppercase">SparkWire</span>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-center">
              {['Home', 'Services', 'Process', 'Testimonials', 'Contact'].map(link => (
                <button key={link} onClick={() => scrollToSection(link.toLowerCase())} className="hover:text-yellow-500 transition-colors">
                  {link}
                </button>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p>&copy; 2025 SparkWire Pros.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (WhatsApp) */}
      <motion.a
        href="https://wa.me/08023169274"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl cursor-pointer flex items-center justify-center text-white"
      >
        <MessageCircle size={32} />
      </motion.a>

    </div>
  );
};

export default App;