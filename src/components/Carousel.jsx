import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── 1. Horizontal Auto-Carousel (for 6 Stages) ───────────────────────────────
export const AutoCarousel = ({ items, renderItem, interval = 2500, className = '' }) => {
  const [current, setCurrent] = useState(0);
  const count = items.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % count);
    }, interval);
    return () => clearInterval(timer);
  }, [count, interval]);

  return (
    <div className={`relative ${className}`}>
      {/* Track */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            {renderItem(items[current], current)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-[#fe5621]'
                : 'w-2 h-2 bg-gray-200 hover:bg-orange-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ─── 2. Vertical Auto-Carousel (for Value Capture Strategies) ─────────────────
export const VerticalCarousel = ({ items, renderItem, interval = 3000, className = '' }) => {
  const [current, setCurrent] = useState(0);
  const count = items.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % count);
    }, interval);
    return () => clearInterval(timer);
  }, [count, interval]);

  return (
    <div className={`relative flex flex-col gap-4 ${className}`}>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {renderItem(items[current], current)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Step dots – vertical rail */}
      <div className="flex items-center gap-3 justify-center mt-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-[#fe5621]'
                : 'w-2 h-2 bg-gray-200 hover:bg-orange-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ─── 3. Testimonial Carousel (for Home page) ──────────────────────────────────
export const TestimonialCarousel = ({ testimonials, interval = 4000, className = '' }) => {
  const [current, setCurrent] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % count);
    }, interval);
    return () => clearInterval(timer);
  }, [count, interval]);

  const t = testimonials[current];

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex flex-col items-center text-center gap-4 px-6"
        >
          {/* Quote mark */}
          <span className="text-5xl font-black leading-none" style={{ color: '#fe562130' }}>"</span>
          <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed max-w-2xl">
            {t.quote}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}
            >
              {t.initials}
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
              <div className="text-xs text-gray-400">{t.role}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-[#fe5621]'
                : 'w-2 h-2 bg-gray-200 hover:bg-orange-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
