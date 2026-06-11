import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger } from '../data/constants';
import { ShoppingBag } from 'lucide-react';

export const AnimatedSection = ({ children, id, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      id={id}
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export const SectionBadge = ({ children }) => (
  <motion.span
    variants={fadeUp}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5"
    style={{ background: 'linear-gradient(135deg, #fe5621, #ff9a77)' }}
  >
    {children}
  </motion.span>
);

export const SectionHeading = ({ tag, title, subtitle, light = false }) => (
  <div className="mb-14 text-center">
    {tag && <SectionBadge>{tag}</SectionBadge>}
    <motion.h2
      variants={fadeUp}
      className={`text-4xl md:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        variants={fadeUp}
        className={`text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-gray-300' : 'text-gray-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const Card = ({ children, className = '', hover = true }) => (
  <div
    className={`bg-white rounded-3xl border border-gray-100 shadow-sm ${hover ? 'hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 transition-all duration-300' : ''} ${className}`}
  >
    {children}
  </div>
);

export const ShopeeLogo = ({ className = "w-10 h-10 text-[24px]" }) => (
  <div className={`${className} rounded-[25%] flex items-center justify-center text-white font-black relative overflow-hidden flex-shrink-0 shadow-sm`} style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}>
    <ShoppingBag className="w-[65%] h-[65%] text-white absolute top-[15%]" style={{ strokeWidth: 2.5 }} />
    <span className="relative z-10 text-[0.45em] mt-[20%] font-bold font-sans tracking-tighter">S</span>
  </div>
);

export const CompRow = ({ label, shopeeVal, coolmateVal, shopeeGood, coolmateGood }) => (
  <motion.tr
    variants={fadeUp}
    className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
  >
    <td className="py-4 px-4 text-sm font-semibold text-gray-700">{label}</td>
    <td className="py-4 px-4 text-center">
      <span className={`text-sm font-bold px-3 py-1.5 rounded-xl inline-block ${shopeeGood ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
        {shopeeVal}
      </span>
    </td>
    <td className="py-4 px-4 text-center">
      <span className={`text-sm font-bold px-3 py-1.5 rounded-xl inline-block ${coolmateGood ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
        {coolmateVal}
      </span>
    </td>
  </motion.tr>
);

export const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    const particles = [];
    const PARTICLE_COUNT = 70;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(254, 86, 33, ${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(254, 86, 33, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return <canvas ref={canvasRef} id="particle-canvas" />;
};

export const TypingText = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const word = words[currentWord];
    let timeout;
    if (!deleting && currentChar <= word.length) {
      setText(word.slice(0, currentChar));
      timeout = setTimeout(() => setCurrentChar(c => c + 1), 80);
      if (currentChar === word.length) {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else if (deleting && currentChar >= 0) {
      setText(word.slice(0, currentChar));
      timeout = setTimeout(() => setCurrentChar(c => c - 1), 45);
      if (currentChar === 0) {
        setDeleting(false);
        setCurrentWord(w => (w + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentChar, deleting, currentWord, words]);

  return (
    <span className="text-brand">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};
