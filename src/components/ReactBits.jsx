import React from "react";
import { motion } from "framer-motion";

export const AuroraBackground = ({ children, className = "" }) => {
  return (
    <main className={`relative flex flex-col w-full items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50 overflow-hidden transition-colors duration-300 ${className}`}>
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute -inset-[10%] opacity-40 blur-[80px]"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(238, 77, 45, 0.4) 0%, rgba(59, 130, 246, 0.2) 25%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 113, 133, 0.3) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 40%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </main>
  );
};

export const ShinyText = ({ text, className = "" }) => {
  return (
    <motion.span
      className={`inline-block relative overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900 dark:from-slate-100 dark:via-slate-400 dark:to-slate-100 bg-[length:200%_auto] ${className}`}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
};

export const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
