import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  Palmtree, 
  Infinity as InfinityIcon, 
  Home, 
  Wind, 
  Refrigerator, 
  Music, 
  Droplets, 
  MapPin, 
  Phone, 
  MessageCircle,
  Mail,
  Menu,
  X,
  ChevronRight,
  Star,
  Users,
  BedDouble,
  ShieldCheck,
  Zap
} from 'lucide-react';

const HERO_IMAGE = "https://res.cloudinary.com/dnbkg0on9/image/upload/v1777625734/IMG-20260501-WA0029_r6k2rh.jpg";
const POOL_IMAGE = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200";
const GARDEN_IMAGE = "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200";
const INTERIOR_IMAGE = "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200";
const FOUNDER_IMAGE = "https://res.cloudinary.com/dnbkg0on9/image/upload/v1777627009/Screenshot_20260501-144604_Instagram_pvglt1.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Parallax effects
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);
  const heroTranslateY = useTransform(scrollY, [0, 500], [0, 150]);

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.95)']
  );

  return (
    <div className="relative min-h-screen bg-luxury-dark selection:bg-luxury-gold selection:text-luxury-dark scroll-smooth">
      {/* Custom noise overlay for cinematic texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Navigation */}
      <motion.nav 
        style={{ backgroundColor: navBackground }}
        className="fixed top-0 left-0 right-0 z-50 h-20 glass-nav flex items-center px-6 md:px-12 justify-between"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-luxury-gold rounded-lg flex items-center justify-center">
            <Waves className="text-luxury-dark w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase font-display">Ocean Resort</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          <button onClick={() => scrollTo('features')} className="hover:text-luxury-gold transition-colors cursor-pointer">Features</button>
          <button onClick={() => scrollTo('amenities')} className="hover:text-luxury-gold transition-colors cursor-pointer">Amenities</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-luxury-gold transition-colors cursor-pointer">Pricing</button>
          <button onClick={() => scrollTo('location')} className="hover:text-luxury-gold transition-colors cursor-pointer">Location</button>
          <button onClick={() => scrollTo('pricing')} className="luxury-button py-2.5 px-6 text-[10px]">Book Your Stay</button>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-luxury-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-light uppercase tracking-widest">
              <button className="text-left py-2" onClick={() => { scrollTo('features'); setIsMenuOpen(false); }}>Features</button>
              <button className="text-left py-2" onClick={() => { scrollTo('amenities'); setIsMenuOpen(false); }}>Amenities</button>
              <button className="text-left py-2" onClick={() => { scrollTo('pricing'); setIsMenuOpen(false); }}>Pricing</button>
              <button className="text-left py-2" onClick={() => { scrollTo('location'); setIsMenuOpen(false); }}>Location</button>
              <button className="luxury-button w-full mt-4" onClick={() => { scrollTo('pricing'); setIsMenuOpen(false); }}>Book Your Stay</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, y: heroTranslateY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-10" />
          <img 
            src={HERO_IMAGE} 
            alt="Luxury Villa" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] font-medium mb-6 opacity-60"
            >
              Private Resort
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-display mb-6 leading-[0.9] tracking-tighter text-luxury-gold">
              OCEAN <br className="hidden md:block" /> <span className="text-white">RESORT</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-white/60 max-w-2xl mx-auto mb-10 tracking-widest uppercase text-xs">
              Luxurious Private Villa with Private Swimming Pool
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button onClick={() => scrollTo('pricing')} className="cta-btn">
                Book Your Stay Now
              </button>
              <button onClick={() => scrollTo('features')} className="luxury-outline-button flex items-center gap-2">
                Explore Features
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Property Section */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">The Property</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display">Entire Private Villa <br/> with Full Privacy</h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-lg">
              Experience the pinnacle of luxury in our unique A-frame architectural marvel. 
              Designed for those who seek tranquility and unmatched privacy, Ocean Resort 
              offers a seamless blend of modern comfort and natural beauty.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "Private Pool", "Lush Garden", "Full Privacy", "2BHK Luxury"
              ].map((label, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="feature-pill text-center py-2"
                >
                  {label}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 glass-panel max-w-xs">
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4 font-bold">Key Highlights</p>
              <ul className="text-sm space-y-3 font-light text-white/70">
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-luxury-gold rounded-full" /> Unique A-Frame Design</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-luxury-gold rounded-full" /> Fully Air-Conditioned</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-luxury-gold rounded-full" /> Sleeps up to 6 Guests</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-luxury-gold rounded-full" /> 3km from Fatehpur</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-luxury-gold/10 blur-3xl rounded-full z-0" />
            <div className="relative z-10 glass-panel p-4 overflow-hidden group">
               <img 
                src={POOL_IMAGE} 
                alt="Private Pool" 
                className="rounded-[18px] w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-10 bottom-10 p-6 glass-panel border-white/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-gold">Private Pool</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="text-luxury-gold fill-luxury-gold w-2 h-2" />)}
                  </div>
                </div>
                <h3 className="text-lg font-display tracking-wide italic">Crystal Reflection</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-luxury-slate/30">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Highlights</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display">Unrivaled Excellence</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "A-Frame Design", 
                desc: "Iconic architectural silhouette with towering glass walls.",
                img: POOL_IMAGE,
                icon: <Zap className="w-5 h-5" />
              },
              { 
                title: "Full Air-Conditioned", 
                desc: "Stay cool in the tropical heat with central climate control.",
                img: HERO_IMAGE,
                icon: <Wind className="w-5 h-5" />
              },
              { 
                title: "Garden Area", 
                desc: "Private manicured gardens for early morning meditations.",
                img: GARDEN_IMAGE,
                icon: <Palmtree className="w-5 h-5" />
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative overflow-hidden rounded-[32px] h-[450px] glass-panel flex flex-col justify-end p-8 border-white/5"
              >
                {card.img && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-transparent z-10" />
                    <img 
                      src={card.img} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 -z-10" 
                      alt={card.title}
                      referrerPolicy="no-referrer"
                    />
                  </>
                )}
                {!card.img && (
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-slate/50 to-luxury-dark/50 -z-10" />
                )}
                
                <div className="relative z-20">
                  <div className="w-12 h-12 rounded-2xl bg-luxury-gold/20 border border-luxury-gold/50 flex items-center justify-center text-luxury-gold mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-display mb-3 uppercase tracking-tight text-white italic">{card.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Convenience</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 font-display">Modern Luxuries Included</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Refrigerator />, label: "Smart Fridge" },
            { icon: <Music />, label: "Premium Audio" },
            { icon: <Droplets />, label: "Water Dispenser" },
            { icon: <ShieldCheck />, label: "24/7 Security" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-2xl bg-luxury-slate border border-white/5 flex items-center justify-center text-luxury-gold mb-2 shadow-2xl">
                {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
              </div>
              <span className="text-xs uppercase tracking-widest font-bold text-white/70">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-gold/5 z-0" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Reservation</span>
                <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight italic">Exceptional Value <br/> In Every Stay</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-b border-white/5">
                    <span className="text-white/40 uppercase text-[10px] tracking-widest font-bold">Standard Night</span>
                    <span className="text-2xl font-display text-luxury-gold tracking-widest">₹9,000</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-white/5">
                    <span className="text-white/40 uppercase text-[10px] tracking-widest font-bold">Weekday Special</span>
                    <span className="text-2xl font-display text-luxury-gold tracking-widest">₹8,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-luxury-gold text-black p-12 md:p-16 flex flex-col justify-center items-center text-center">
                <div className="price-tag mb-8 w-full py-6">
                  <p className="text-[10px] uppercase opacity-70 mb-1 tracking-widest">Starting From</p>
                  <p className="text-4xl font-display tracking-widest">₹8,000 <span className="text-xs">/night</span></p>
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.1em]">Privileges Included</h3>
                <ul className="text-xs space-y-3 mb-10 font-medium opacity-80 uppercase tracking-widest">
                  <li>• Early Check-in Availability</li>
                  <li>• Welcome Drinks & Refreshments</li>
                  <li>• Dedicated Property Manager</li>
                  <li>• Music System Access</li>
                </ul>
                <a 
                  href="https://wa.me/918573890894?text=Hello%20Ocean%20Resort,%20I'm%20interested%20in%20booking%20the%20luxury%20villa.%20Please%20provide%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold rounded-full hover:scale-105 transition-all shadow-xl block"
                >
                  Confirm Reservation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[32px] overflow-hidden h-[500px] border border-white/10 glass-panel p-0">
            <div className="absolute inset-0 bg-[#0a0e14] grid grid-cols-4 grid-rows-4 opacity-50">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i} className="border border-white/5" />
              ))}
            </div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-10 bg-luxury-gold/20 rounded-full blur-xl" 
                />
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-luxury-dark">
                  <MapPin className="text-luxury-dark" />
                </div>
              </div>
              
              <div className="absolute top-1/4 left-1/4 glass-panel px-4 py-2 text-[10px] uppercase font-bold tracking-widest border-luxury-gold/20">
                Fatehpur
              </div>
              <div className="absolute bottom-1/3 right-1/4 glass-panel px-4 py-2 text-[10px] uppercase font-bold tracking-widest border-luxury-gold/20">
                Medical College
              </div>
            </motion.div>
          </div>

          <div>
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Neighborhood</span>
            <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight italic">The Perfect <br/> Remote Setting</h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed font-light">
              Tucked away in a serene garden enclave, strategically located for both accessibility and absolute seclusion.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-6 p-6 glass-panel border-white/5">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase text-white/40">Primary Location</h4>
                  <p className="text-sm font-medium mt-1">Near Medical College District</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 glass-panel border-white/5">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                  <Wind size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase text-white/40">Travel Time</h4>
                  <p className="text-sm font-medium mt-1">3 km from Fatehpur Junction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 md:px-12 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 aspect-[3/4] md:aspect-[2/3] max-w-lg relative lg:ml-auto"
          >
            <div className="absolute inset-0 border border-luxury-gold/20 rounded-[32px] rotate-2 translate-x-4 translate-y-4 -z-10" />
            <div className="absolute inset-0 border border-white/5 rounded-[32px] -rotate-2 -translate-x-4 -translate-y-4 -z-10" />
            <div className="w-full h-full glass-panel overflow-hidden bg-luxury-slate/50 relative group p-0 border-white/10">
              <img 
                src={FOUNDER_IMAGE} 
                alt="Mr. Dev Gupta" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-luxury-gold text-[10px] tracking-[0.5em] font-bold uppercase">Founder & Visionary</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-6xl font-display mb-8 leading-none italic">Visionary Behind <br/> The Luxury</h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2 italic">Mr. Dev Gupta</h3>
              <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold">Fatehpur Entrepreneur</p>
            </div>

            <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
              Bringing years of hospitality and development expertise to Ocean Resort. 
              The visionary founder driving standards of excellence across multiple ventures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="glass-panel py-8 px-10 border-luxury-gold/10 flex flex-col gap-6">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold opacity-60">Portfolio of Ventures</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {["Balaji Caterers", "Urban Vada Pav", "Ocean Resort", "Balaji Properties"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-sm font-medium uppercase tracking-widest text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 bg-luxury-dark border-t border-white/5 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto"
        >
          <Waves className="w-10 h-10 text-luxury-gold mx-auto mb-8 opacity-50" />
          <h2 className="text-4xl md:text-7xl font-display mb-12 uppercase tracking-tighter leading-none text-luxury-gold italic">Experience The <br/> Extraordinary</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a 
              href="https://wa.me/918573890894?text=Hello,%20I%20have%20an%20inquiry%20about%20Ocean%20Resort." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-8 glass-panel border-white/10 hover:bg-white/5 transition-all group no-underline"
            >
              <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-1">Stay Connected</p>
                <p className="text-lg font-display tracking-wide group-hover:text-luxury-gold transition-colors italic">WhatsApp Concierge</p>
              </div>
            </a>
            
            <div className="flex items-center justify-center gap-4 p-8 glass-panel border-white/10 hover:bg-white/5 transition-all group">
              <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-1">Direct Line</p>
                <p className="text-lg font-display tracking-wide group-hover:text-luxury-gold transition-colors italic">+91 85738 90894</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-12 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/10">© 2026 Ocean Resort Luxury. Private Resort Enclave.</p>
            
            <div className="glass-panel py-6 px-8 max-w-2xl mx-auto border-white/5 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold opacity-60 mb-2">Developed by</p>
              <h4 className="text-xl font-display italic tracking-wide text-white">Forge Eternal Tech</h4>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-luxury-gold/40" />
                  <span>9511421803 / 8004262191</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-luxury-gold/40" />
                  <span>eternalsforge@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-luxury-gold/40" />
                  <span>Fatehpur, India</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </footer>

      {/* Floating CTA for Mobile */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
      >
        <a 
          href="https://wa.me/918573890894?text=Hello,%20I'd%20like%20to%20book%20my%20stay%20at%20Ocean%20Resort."
          target="_blank"
          rel="noopener noreferrer"
          className="luxury-button w-full shadow-2xl flex items-center justify-center gap-3 no-underline"
        >
          <MessageCircle className="w-5 h-5" /> Book Your Stay
        </a>
      </motion.div>
    </div>
  );
}
