
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
  Clock,
  Star,
  Users,
  Zap,
  ThumbsUp,
  TrendingUp,
  FileText,
  Settings,
  Home,
  Droplets,
  Flame,
  Wind
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Fast response time and professional service! They fixed our burst pipe within an hour. Highly recommend!",
      service: "Emergency Repair"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Transparent pricing and excellent workmanship. They installed our new water heater efficiently.",
      service: "Installation"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Found a hidden leak that was costing us hundreds. Very thorough and knowledgeable team.",
      service: "Leak Detection"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Available 24/7 as promised. Called them at 2 AM for a flooding issue and they arrived within 30 minutes!",
      service: "Emergency Service"
    }
  ];

  const serviceDetails = [
    {
      icon: <Droplets size={28} />,
      title: "Drain Cleaning",
      description: "Professional drain cleaning using advanced equipment to clear stubborn clogs."
    },
    {
      icon: <Flame size={28} />,
      title: "Water Heater Service",
      description: "Installation, repair, and maintenance of traditional and tankless water heaters."
    },
    {
      icon: <Wind size={28} />,
      title: "Pipe Repair & Replacement",
      description: "Expert pipe repair and replacement services for damaged or aging plumbing systems."
    },
    {
      icon: <Home size={28} />,
      title: "Bathroom Plumbing",
      description: "Complete bathroom plumbing services including fixture installation and upgrades."
    },
    {
      icon: <Settings size={28} />,
      title: "Sewer Line Services",
      description: "Sewer line inspection, cleaning, and repair using camera technology."
    },
    {
      icon: <Droplet size={28} />,
      title: "Water Filtration",
      description: "Installation of water filtration and purification systems for clean, safe water."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "24/7", label: "Available" },
    { number: "100%", label: "Satisfaction" }
  ];

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
              <button onClick={() => scrollToSection('about')} className="text-slate-text hover:text-ocean transition">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-text hover:text-ocean transition">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-text hover:text-ocean transition">
                Testimonials
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
                <button onClick={() => scrollToSection('about')} className="text-left text-slate-text hover:text-ocean transition">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-slate-text hover:text-ocean transition">
                  Services
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-slate-text hover:text-ocean transition">
                  Testimonials
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

      {/* Stats Section */}
      <section className="bg-ocean-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
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
              <p className="text-lg text-slate-text mb-6 leading-relaxed">
                With over 10 years of experience serving the local community, our team of licensed professionals has seen it all. From simple faucet repairs to complex sewer line replacements, we bring expertise and dedication to every job.
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

      {/* Main Services Section */}
      <section id="services" className="py-20 bg-pale-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-ocean mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-text">Professional plumbing solutions for every need</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          {/* Additional Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-ocean text-center mb-12">Complete Service List</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceDetails.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="text-cyan mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-ocean mb-3">
                    {service.title}
                  </h4>
                  <p className="text-slate-text text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-pale-blue p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto">
                <Zap size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean mb-4">Fast Response</h3>
              <p className="text-slate-text leading-relaxed">
                Same-day service available. We prioritize emergencies and urgent repairs.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-pale-blue p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean mb-4">Written Warranties</h3>
              <p className="text-slate-text leading-relaxed">
                All work comes with written warranties for your peace of mind.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-pale-blue p-8 rounded-lg shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto">
                <ThumbsUp size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean mb-4">Quality Materials</h3>
              <p className="text-slate-text leading-relaxed">
                We use only top-quality parts and materials for lasting repairs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-ocean-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-xl text-gray-200">From call to completion in four easy steps</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <p className="text-gray-200">
                Reach out 24/7 and speak with a real person who cares about your plumbing emergency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">We Arrive</h3>
              <p className="text-gray-200">
                Our licensed plumber arrives promptly with all necessary tools and equipment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Diagnose & Quote</h3>
              <p className="text-gray-200">
                We assess the issue and provide an upfront, transparent quote before any work begins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                4
              </div>
              <h3 className="text-2xl font-bold mb-4">Fix & Clean</h3>
              <p className="text-gray-200">
                We complete the repair efficiently and clean up completely, leaving no trace behind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-pale-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-ocean mb-4">What Our Customers Say</h2>
            <p className="text-xl text-slate-text">Real reviews from real customers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-text text-lg mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-ocean text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 bg-cyan text-white px-8 py-4 rounded-lg font-bold text-xl">
              <TrendingUp size={28} />
              4.9/5 Average Rating from 500+ Reviews
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-ocean mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-text">Get answers to common plumbing questions</p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pale-blue p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-ocean mb-3">Do you offer emergency services?</h3>
              <p className="text-slate-text leading-relaxed">
                Yes! We're available 24/7 for emergency plumbing situations. Whether it's a burst pipe at 2 AM or a major leak on a holiday, we're here to help.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pale-blue p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-ocean mb-3">Are your plumbers licensed and insured?</h3>
              <p className="text-slate-text leading-relaxed">
                Absolutely. All our plumbers are fully licensed, insured, and bonded. We carry comprehensive liability insurance for your protection and peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pale-blue p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-ocean mb-3">How quickly can you respond to an emergency?</h3>
              <p className="text-slate-text leading-relaxed">
                We aim to arrive within 60 minutes for emergency calls in our service area. For scheduled appointments, we offer same-day and next-day service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pale-blue p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-ocean mb-3">Do you provide free estimates?</h3>
              <p className="text-slate-text leading-relaxed">
                Yes, we provide free, no-obligation estimates for all non-emergency work. For emergency repairs, we'll give you an upfront quote before starting work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pale-blue p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-ocean mb-3">What payment methods do you accept?</h3>
              <p className="text-slate-text leading-relaxed">
                We accept cash, all major credit cards, debit cards, and mobile payments. Payment is due upon completion of the work.
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
              <p className="text-gray-400 mb-4">Professional plumbing services you can trust</p>
              <div className="flex gap-4">
                <Users className="text-cyan" size={24} />
                <span className="text-gray-400">Licensed & Insured Professionals</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition">
                  Services
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="block text-gray-400 hover:text-white transition">
                  Testimonials
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
              <p className="text-gray-400 text-sm mb-4">Available 24/7 for emergencies</p>
              <a 
                href="https://wa.me/2348023169274"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
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
