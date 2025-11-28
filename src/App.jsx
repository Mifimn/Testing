
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Wrench, 
  Droplet, 
  AlertCircle,
  CheckCircle,
  DollarSign,
  Award,
  Shield,
  MessageCircle,
  MapPin,
  Clock
} from 'lucide-react';
import './App.css';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-ocean">
                CITY PLUMBERS
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-text hover:text-ocean transition">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-text hover:text-ocean transition">
                Services
              </button>
              <button onClick={() => scrollToSection('emergency')} className="text-slate-text hover:text-ocean transition">
                Emergency
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-text hover:text-ocean transition">
                Contact
              </button>
              <a 
                href="tel:08023169274" 
                className="bg-urgent text-white px-6 py-2 rounded-lg font-semibold hover:bg-urgent-dark transition flex items-center gap-2"
              >
                <Phone size={18} />
                24/7 Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-ocean"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-slate-text hover:text-ocean transition">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-slate-text hover:text-ocean transition">
                  Services
                </button>
                <button onClick={() => scrollToSection('emergency')} className="text-left text-slate-text hover:text-ocean transition">
                  Emergency
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-slate-text hover:text-ocean transition">
                  Contact
                </button>
                <a 
                  href="tel:08023169274" 
                  className="bg-urgent text-white px-6 py-2 rounded-lg font-semibold hover:bg-urgent-dark transition flex items-center gap-2 justify-center"
                >
                  <Phone size={18} />
                  24/7 Call Now
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-ocean to-ocean-dark pt-16"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-ocean/85"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-shadow"
          >
            Fast, Reliable Plumbing Repairs in Your Area
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-100 mb-8"
          >
            From leaky faucets to burst pipes, we fix it right the first time. Licensed, Insured, and always on time.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-dark transition shadow-lg"
            >
              Request Service
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-ocean transition shadow-lg"
            >
              Our Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-ocean mb-6">
                No Job Too Small, No Leak Too Big
              </h2>
              <p className="text-lg text-slate-text mb-6 leading-relaxed">
                We understand that plumbing issues can be stressful. That's why we offer transparent pricing and respectful service. We treat your home like our own—leaving no mess behind.
              </p>
              <div className="inline-flex items-center gap-3 bg-cyan text-white px-6 py-3 rounded-lg font-bold text-xl">
                <CheckCircle size={28} />
                100% Satisfaction Guarantee
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-pale-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-ocean mb-4">Our Services</h2>
            <p className="text-xl text-slate-text">Professional plumbing solutions for every need</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-urgent rounded-full flex items-center justify-center mb-6">
                <AlertCircle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean mb-4">Emergency Repairs</h3>
              <p className="text-slate-text leading-relaxed">
                Available 24/7 for burst pipes, severe clogs, and overflowing toilets. We get there fast.
              </p>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-cyan rounded-full flex items-center justify-center mb-6">
                <Droplet size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean mb-4">Leak Detection</h3>
              <p className="text-slate-text leading-relaxed">
                High water bill? We use advanced technology to find hidden leaks behind walls and under floors.
              </p>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-ocean rounded-full flex items-center justify-center mb-6">
                <Wrench size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean mb-4">Installations</h3>
              <p className="text-slate-text leading-relaxed">
                Professional installation for water heaters, new faucets, toilets, and shower systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="emergency" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-ocean mb-4">The Professional Difference</h2>
            <p className="text-xl text-slate-text">Why customers trust us with their homes</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-pale-blue p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto">
                <DollarSign size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean mb-4">Upfront Pricing</h3>
              <p className="text-slate-text leading-relaxed">
                No hidden fees. You'll know the cost before we start any work.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-pale-blue p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean mb-4">Licensed Experts</h3>
              <p className="text-slate-text leading-relaxed">
                All our plumbers are certified professionals with years of experience.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-pale-blue p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean mb-4">Clean Up Guarantee</h3>
              <p className="text-slate-text leading-relaxed">
                We wear shoe covers and leave your home cleaner than we found it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-ocean-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Get a Free Quote Today</h2>
            <p className="text-2xl text-gray-200 mb-8">
              Don't let a drip turn into a flood. Call us now.
            </p>
            
            <div className="mb-12">
              <a 
                href="tel:08023169274"
                className="text-5xl sm:text-6xl font-bold text-cyan hover:text-cyan-light transition inline-block"
              >
                0802-316-9274
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:08023169274"
                className="bg-urgent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-urgent-dark transition shadow-lg flex items-center gap-2"
              >
                <Phone size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/2348023169274"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={24} />
                WhatsApp Chat
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4">
                <Clock size={32} className="text-cyan" />
                <div className="text-left">
                  <p className="text-xl font-semibold">Available 24/7</p>
                  <p className="text-gray-300">Emergency services anytime</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <MapPin size={32} className="text-cyan" />
                <div className="text-left">
                  <p className="text-xl font-semibold">Serving Your Area</p>
                  <p className="text-gray-300">Fast response times</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CITY PLUMBERS</h3>
              <p className="text-gray-400">Professional plumbing services you can trust</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition">
                  Services
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition">
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
              <a href="tel:08023169274" className="text-2xl font-bold text-cyan hover:text-cyan-light transition block mb-4">
                0802-316-9274
              </a>
              <p className="text-gray-400 text-sm">Available 24/7 for emergencies</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p className="mb-2">© 2025 City Plumbers. All rights reserved.</p>
            <p className="text-sm">Website Developed by [Your Name]</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/2348023169274"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} className="text-white" />
      </a>
    </div>
  );
}
