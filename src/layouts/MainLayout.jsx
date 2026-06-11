import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ShopeeLogo } from '../components/Shared';
import { NAV_LINKS, pageVariants } from '../data/constants';

export const MainLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-gray-900 flex flex-col">
      {/* ── NAVIGATION ─────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-sm' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-4">
            <NavLink
              to="/"
              className="flex items-center gap-2.5 group hover:scale-105 transition-transform"
            >
              <ShopeeLogo className="w-10 h-10 text-[26px] drop-shadow-sm" />
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                Shopee
              </span>
            </NavLink>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive ? 'text-brand bg-orange-50' : 'text-gray-600 hover:text-brand hover:bg-orange-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <NavLink
              to="/case-study"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all"
              style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)', boxShadow: '0 4px 20px rgba(254,86,33,0.4)' }}
            >
              Case Study
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>
      </motion.nav>

      {/* ── MAIN CONTENT ───────────────────────────────────────────────────── */}
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 py-12 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <ShopeeLogo className="w-8 h-8 text-[20px] drop-shadow-sm" />
            <span className="font-bold text-gray-900 text-lg tracking-tight">Shopee</span>
          </div>
          <p className="text-sm text-gray-400 text-center">
            Group Project 2026 — Digital Business & E-commerce Course
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.href}
                to={link.href}
                className="text-sm text-gray-400 hover:text-brand transition-colors font-medium"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
