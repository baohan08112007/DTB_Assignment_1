import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ParticleCanvas } from '../components/Shared';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-24">
      {/* Particle Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #fff7f4 0%, #ffffff 50%, #fff0eb 100%)' }}>
        <ParticleCanvas />
      </div>

      {/* Decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fe562130, transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fe562140, transparent 70%)' }}
      />

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.08] mb-6 text-gray-900 tracking-tight"
        >
          Digital Business <br className="hidden md:block" /> 
          <span style={{ color: '#fe5621' }}>and E-commerce</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-2xl text-gray-500 mb-10 max-w-3xl mx-auto font-medium px-2"
        >
          Deep dive into the transition from traditional retail to modern Direct-to-Consumer models.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/case-study"
            className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-bold text-base md:text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
            style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)', boxShadow: '0 8px 30px rgba(254,86,33,0.3)' }}
          >
            Explore Case Study
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
