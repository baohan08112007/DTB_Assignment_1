import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, ShieldCheck, Zap, ArrowRight, XCircle, CheckCircle } from 'lucide-react';
import { fadeUp, stagger, fadeLeft, fadeRight } from '../data/constants';
import { AnimatedSection, SectionHeading, Card } from '../components/Shared';

export default function StrategyAnalysis() {
  return (
    <AnimatedSection id="strategy-analysis" className="py-28 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="4. Strategy Analysis"
        title="Market Structure & Strategy"
        subtitle="Where opportunities exist in the system and how DTC disrupts traditional models."
      />

      {/* Marketplace Actors */}
      <motion.div variants={fadeUp} className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Digital Marketplace Actors</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { role: 'Customers', icon: Users, color: '#3b82f6', desc: 'End users driving demand.' },
            { role: 'Competitors', icon: Zap, color: '#ef4444', desc: 'Direct & indirect alternatives.' },
            { role: 'Intermediaries', icon: Building, color: '#f59e0b', desc: 'Platforms, payment gateways, logistics.' },
            { role: 'Complementors', icon: ShieldCheck, color: '#10b981', desc: 'Services that add value to the core product.' }
          ].map((item, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: `${item.color}15` }}>
                {React.createElement(item.icon, { className: "w-6 h-6", style: { color: item.color } })}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{item.role}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* DTC Disruption */}
      <motion.div variants={fadeUp} className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">DTC Disruption</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">How Direct-to-Consumer models are disrupting traditional retail by disintermediating the supply chain.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before - Traditional */}
          <motion.div variants={fadeLeft} className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm bg-gradient-to-br from-red-50 to-white">
            <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-5 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Before — Traditional
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm font-semibold">
              <span className="px-3 py-2 rounded-xl bg-gray-100 text-gray-700">Brand</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="px-3 py-2 rounded-xl bg-gray-100 text-gray-700">Distributor</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="px-3 py-2 rounded-xl bg-gray-100 text-gray-700">Retailer</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="px-3 py-2 rounded-xl bg-gray-100 text-gray-700">Customer</span>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center italic">Multiple intermediaries increase cost and reduce control</p>
          </motion.div>
          
          {/* After - DTC */}
          <motion.div variants={fadeRight} className="bg-white rounded-2xl p-6 border border-green-200 shadow-sm bg-gradient-to-br from-green-50 to-white">
            <div className="text-xs font-bold text-green-500 uppercase tracking-widest mb-5 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              After — DTC Direct
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold h-12">
              <span className="px-5 py-2.5 rounded-xl text-white shadow-sm" style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}>Brand</span>
              <ArrowRight className="w-6 h-6 text-brand" />
              <span className="px-5 py-2.5 rounded-xl text-white shadow-sm" style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}>Customer</span>
            </div>
            <p className="text-xs text-green-600 mt-4 text-center font-medium">Direct connection = higher margin + full data ownership</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
