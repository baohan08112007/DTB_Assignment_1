import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Smartphone, AlertTriangle, CreditCard, Truck, ShieldCheck, Wifi } from 'lucide-react';
import { fadeUp, scaleIn, fadeLeft, fadeRight, stagger, LOREM, feeData, gmvData, radarData } from '../data/constants';
import { AnimatedSection, SectionHeading, CompRow } from '../components/Shared';
import { InteractiveAreaChart, InteractiveBarChart, InteractiveRadarChart } from '../components/InteractiveCharts';
import { CashFlowViz } from '../components/Charts';

export default function CaseStudy() {
  return (
    <AnimatedSection id="case-study" className="py-28 relative overflow-hidden" style={{ backgroundColor: '#222222' }}>
      {/* Background glows */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-[50rem] h-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
        style={{ background: '#fe562120' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        className="absolute bottom-0 right-0 w-[40rem] h-[40rem] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl pointer-events-none"
        style={{ background: '#1a56db25' }}
      />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="6. Case Study"
          title={<span><span style={{ color: '#fe5621' }}>Shopee</span> <span className="text-gray-400">vs</span> <span style={{ color: '#3b82f6' }}>Coolmate DTC</span></span>}
          subtitle="Deep Insight in Disintermediation & Non-linear Journey Map. Core comparative analysis."
          light
        />

        {/* Two-Panel Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Shopee Panel */}
          <motion.div variants={fadeLeft} className="rounded-3xl p-8 border relative overflow-hidden bg-gradient-to-br from-[#1a0800] to-[#2d0f00] border-[#fe562130]">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl bg-[#fe562115]" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border bg-[#fe562120] border-[#fe562140]">
                  <ShoppingBag className="w-7 h-7 text-[#fe5621]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Shopee Marketplace</h3>
                  <p className="text-gray-400 text-sm">Platform-dependent — ~1.9M Followers</p>
                </div>
              </div>
              <ul className="space-y-5">
                {[
                  { title: 'Data Ownership', val: 'Limited — Kept by Shopee', bad: true },
                  { title: 'Commission', val: '~4–10% / order', bad: true },
                  { title: 'Total Cost', val: '12–15%+ / order', bad: true },
                  { title: 'Cash Flow', val: 'Held for 7–14 days', bad: true },
                  { title: 'Brand Control', val: 'Limited by platform', bad: true },
                ].map((row, i) => (
                  <li key={i} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-gray-400">{row.title}</span>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-xl ${row.bad ? 'bg-[#fe5621]/20 text-[#fe5621] border border-[#fe5621]/30' : 'bg-green-900/30 text-green-400 border border-green-900/40'}`}>
                      {row.val}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Coolmate Panel */}
          <motion.div variants={fadeRight} className="rounded-3xl p-8 border relative overflow-hidden bg-gradient-to-br from-[#000d1a] to-[#001229] border-[#1a56db40]">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl bg-[#1a56db15]" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border bg-[#1a56db20] border-[#1a56db40]">
                  <Smartphone className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-600">
                    Coolmate.me DTC
                  </h3>
                  <p className="text-gray-400 text-sm">Direct-to-Consumer — Full Control</p>
                </div>
              </div>
              <ul className="space-y-5">
                {[
                  { title: 'Data Ownership', val: '100% owned', good: true },
                  { title: 'Commission', val: '0% commission', good: true },
                  { title: 'Total Cost', val: '~3.5% / order', good: true },
                  { title: 'Cash Flow', val: 'Instant to account', good: true },
                  { title: 'Brand Control', val: 'Full UX/UI control', good: true },
                ].map((row, i) => (
                  <li key={i} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-gray-400">{row.title}</span>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-xl ${row.good ? 'bg-green-900/30 text-green-400 border border-green-900/40' : 'bg-yellow-900/30 text-yellow-400 border border-yellow-900/40'}`}>
                      {row.val}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <motion.div variants={scaleIn} className="rounded-3xl p-8 border bg-[#000000] border-white/10">
            <h3 className="text-xl font-bold text-white text-center mb-8">Cost Comparison (% per order)</h3>
            <InteractiveBarChart data={feeData} />
          </motion.div>
          
          <motion.div variants={scaleIn} className="rounded-3xl p-8 border bg-[#000000] border-white/10">
            <h3 className="text-xl font-bold text-white text-center mb-8">Radar — Overall Capability Comparison</h3>
            <InteractiveRadarChart data={radarData} />
          </motion.div>
        </div>

        {/* Cash Flow Animation */}
        <motion.div variants={fadeUp} className="rounded-3xl p-8 md:p-10 border bg-white/5 border-white/10 mb-14">
          <h3 className="text-xl font-bold text-white text-center mb-2">Cash Flow Logic</h3>
          <p className="text-gray-400 text-sm text-center mb-6">Actual cash flow — Hover for details</p>
          <CashFlowViz />
        </motion.div>

        {/* Full Metrics Comparison Table */}
        <motion.div variants={fadeUp} className="rounded-3xl p-8 md:p-12 mb-14 border border-gray-200 shadow-sm bg-[#f2f5fa] overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Full Comparative Analysis</h3>
          <div className="overflow-x-auto mt-8">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-gray-500 font-bold text-xs uppercase tracking-wider border-b border-gray-200">Metrics</th>
                  <th className="text-center py-4 px-4 font-bold text-xs uppercase tracking-wider border-b border-gray-200 text-brand">Shopee Marketplace</th>
                  <th className="text-center py-4 px-4 font-bold text-xs uppercase tracking-wider border-b border-gray-200 text-blue-600">Coolmate DTC</th>
                </tr>
              </thead>
              <tbody>
                <CompRow label="Data Ownership" shopeeVal="Limited" coolmateVal="100% Owned" shopeeGood={false} coolmateGood={true} />
                <CompRow label="Commission Fee" shopeeVal="~4-10%" coolmateVal="0%" shopeeGood={false} coolmateGood={true} />
                <CompRow label="Effective Cost/Order" shopeeVal="~12-15%+" coolmateVal="Significantly lower" shopeeGood={false} coolmateGood={true} />
                <CompRow label="Cash Flow" shopeeVal="Held 7-14 days" coolmateVal="Direct/Instant" shopeeGood={false} coolmateGood={true} />
                <CompRow label="Brand Control" shopeeVal="Limited by platform" coolmateVal="Full control" shopeeGood={false} coolmateGood={true} />
                <CompRow label="Traffic Generation" shopeeVal="Platform algorithms" coolmateVal="Self-generated (Paid/SEO)" shopeeGood={true} coolmateGood={false} />
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Constraints */}
        <motion.div variants={fadeUp}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-4 bg-brand/20 text-orange-300 border border-brand/30">
              <AlertTriangle className="w-3.5 h-3.5" /> Real-world Barriers
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Constraints & Environmental Adaptation</h3>
          </div>
          <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'COD Culture', icon: CreditCard, color: '#fe5621', desc: 'High COD rates cause return risks.' },
              { title: 'Logistics', icon: Truck, color: '#3b82f6', desc: 'Last-mile delivery challenges.' },
              { title: 'Trust Concerns', icon: ShieldCheck, color: '#10b981', desc: 'Building consumer trust online.' },
              { title: 'Digital Gap', icon: Wifi, color: '#8b5cf6', desc: 'Varied tech adoption.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }}>
                  <div className="rounded-3xl p-6 h-full border transition-all hover:border-white/20 bg-white/5 border-white/10">
                    <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center border" style={{ background: `${item.color}18`, borderColor: `${item.color}30` }}>
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <h4 className="font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
