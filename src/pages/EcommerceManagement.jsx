import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Smartphone, MessageSquare, CreditCard, Truck, Zap, CheckCircle, XCircle } from 'lucide-react';
import { fadeUp, stagger, LOREM } from '../data/constants';
import { AnimatedSection, SectionHeading, Card } from '../components/Shared';

export default function EcommerceManagement() {
  return (
    <AnimatedSection id="ecommerce-management" className="py-16 md:py-28 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="5. E-commerce Management"
        title="E-commerce Structure & Execution"
        subtitle="From sales channel structure to Platform Dependency, Logistics, and adaptation challenges."
      />

      {/* Channel Evolution */}
      <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-12">
        <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Sales Channel Evolution</h3>
        <div className="flex flex-col md:flex-row items-stretch md:items-start gap-6">
          {[
            { name: 'Single Channel', desc: 'Only one channel. Simple but high risk.', pct: 33 },
            { name: 'Multi Channel', desc: 'Multiple independent channels — website, Shopee, Facebook.', pct: 60 },
            { name: 'Omni Channel', desc: 'Seamless experience across all channels, synchronized data.', pct: 100 },
          ].map((c, i) => (
            <motion.div key={i} variants={fadeUp} className="flex-1 text-center w-full">
              <div className="h-4 rounded-full mb-3" style={{ background: `linear-gradient(90deg, #fe5621, #ff9a77)`, width: `${c.pct}%`, opacity: 0.5 + i * 0.2 }} />
              <div className="font-bold text-sm text-gray-800">{c.name}</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Platform Dependency */}
      <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-50">
            <ShieldCheck className="w-5 h-5 text-brand" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Platform Dependency</h3>
            <span className="text-xs text-orange-400 font-semibold">Risks & costs of relying on third-party platforms</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Independent */}
          <div className="rounded-2xl p-6 border border-green-200 bg-green-50/50">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <h4 className="font-bold text-gray-900">Independent (DTC)</h4>
            </div>
            <div className="space-y-4">
              {[
                { metric: 'Control Level', value: 'Full control', color: 'text-green-600' },
                { metric: 'Data Ownership', value: '100% owned', color: 'text-green-600' },
                { metric: 'Fee Structure', value: 'Payment gateway only (~2-3%)', color: 'text-green-600' },
                { metric: 'Algorithm Risk', value: 'None — organic + paid traffic', color: 'text-green-600' },
              ].map((row, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-sm text-gray-500">{row.metric}</span>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-xl bg-white border border-green-100 shadow-sm ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Platform-dependent */}
          <div className="rounded-2xl p-6 border border-red-200 bg-red-50/50">
            <div className="flex items-center gap-2 mb-5">
              <XCircle className="w-5 h-5 text-red-400" />
              <h4 className="font-bold text-gray-900">Platform-Dependent</h4>
            </div>
            <div className="space-y-4">
              {[
                { metric: 'Control Level', value: 'Limited by platform rules', color: 'text-red-500' },
                { metric: 'Data Ownership', value: 'Restricted / platform-held', color: 'text-red-500' },
                { metric: 'Fee Structure', value: 'Commission + ads + service (12-15%)', color: 'text-red-500' },
                { metric: 'Algorithm Risk', value: 'High — visibility depends on algorithm', color: 'text-red-500' },
              ].map((row, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-sm text-gray-500">{row.metric}</span>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-xl bg-white border border-red-100 shadow-sm ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Execution Challenges */}
      <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { title: 'Mobile-First Commerce', icon: Smartphone, color: '#fe5621', desc: 'Consumers buy primarily via mobile. Interface must be optimized for a quick checkout experience.' },
          { title: 'Social Commerce', icon: MessageSquare, color: '#ff7849', desc: 'Direct purchasing from TikTok, Facebook, Instagram. Channel shift is happening rapidly.' },
          { title: 'COD vs Digital Pay', icon: CreditCard, color: '#ff9a77', desc: 'COD still accounts for a high percentage in SEA, causing return risks and slowing cash flow.' },
          { title: 'Last-Mile Delivery', icon: Truck, color: '#d94318', desc: 'Logistics infrastructure and fast delivery expectations impact the entire operation.' },
        ].map((item, i) => (
          <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }}>
            <Card className="p-6 h-full">
              <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center" style={{ background: `${item.color}15` }}>
                {React.createElement(item.icon, { className: "w-6 h-6", style: { color: item.color } })}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* AI Horizon */}
      <motion.div variants={fadeUp} className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden bg-slate-900">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-brand/30"
        />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 bg-brand/20 text-orange-300 border border-brand/40">
            <Zap className="w-3.5 h-3.5" />
            AI Horizon
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">The Future of AI in Commerce</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">{LOREM}</p>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
