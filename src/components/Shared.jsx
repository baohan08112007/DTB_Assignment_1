import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger } from '../data/constants';
import { ShoppingBag } from 'lucide-react';

export const AnimatedSection = ({ children, id, className = '', ...props }) => {
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
      {...props}
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

export const ShopeeLogo = ({ className = "w-10 h-10" }) => (
  <div className={`${className} rounded-[22%] flex-shrink-0 overflow-hidden shadow-sm`} style={{ background: 'linear-gradient(145deg, #f97040 0%, #ee4d2d 100%)' }}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Shopping bag body */}
      <path d="M28 40 Q26 40 25 42 L20 80 Q19 83 22 83 L78 83 Q81 83 80 80 L75 42 Q74 40 72 40 Z" fill="white"/>
      {/* Bag handle */}
      <path d="M38 40 Q38 24 50 24 Q62 24 62 40" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none"/>
      {/* S letter in orange */}
      <text x="50" y="71" textAnchor="middle" fontSize="30" fontWeight="900" fontFamily="Arial, sans-serif" fill="#ee4d2d" letterSpacing="-1">S</text>
    </svg>
  </div>
);

export const CompRow = ({ label, shopeeVal, coolmateVal, shopeeGood, coolmateGood }) => (
  <motion.tr
    variants={fadeUp}
    className="border-b border-gray-200 last:border-0 hover:bg-white transition-colors"
  >
    <td className="py-4 px-4 text-sm font-semibold text-gray-700">{label}</td>
    <td className="py-4 px-4 text-center">
      <span className={`text-sm font-bold inline-block ${shopeeGood ? 'text-green-600' : 'text-[#fe5621]'}`}>
        {shopeeVal}
      </span>
    </td>
    <td className="py-4 px-4 text-center">
      <span className={`text-sm font-bold inline-block ${coolmateGood ? 'text-green-600' : 'text-[#fe5621]'}`}>
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
