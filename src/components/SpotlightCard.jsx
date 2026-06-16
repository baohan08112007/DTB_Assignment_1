import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = ({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(254, 86, 33, 0.04)', // Very subtle orange glow
  splitColors = null, // { left: 'rgba(...)', right: 'rgba(...)' } for dual-color spotlight
  ...props
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [activeColor, setActiveColor] = useState(spotlightColor);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    if (splitColors) {
      // Smooth transition: left half → left color, right half → right color
      const ratio = x / rect.width; // 0 = far left, 1 = far right
      setActiveColor(ratio < 0.5 ? splitColors.left : splitColors.right);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const resolvedColor = splitColors ? activeColor : spotlightColor;

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Main cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${resolvedColor}, transparent 70%)`,
          transition: 'opacity 500ms ease-in-out, background 300ms ease-in-out',
        }}
      />
      {/* Ambient dual glow (always visible at low opacity when splitColors is used) */}
      {splitColors && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 25% 60%, ${splitColors.left.replace(/[\d.]+\)$/, '0.04)')}, transparent 55%),
                         radial-gradient(ellipse at 75% 60%, ${splitColors.right.replace(/[\d.]+\)$/, '0.04)')}, transparent 55%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default SpotlightCard;

