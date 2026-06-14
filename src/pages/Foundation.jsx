import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Network, Share2, Eye, ShieldCheck, Zap } from 'lucide-react';
import { fadeUp, stagger, fadeLeft, fadeRight, LOREM } from '../data/constants';
import { AnimatedSection, SectionHeading, Card } from '../components/Shared';

export default function Foundation() {
  return (
    <AnimatedSection id="foundation" className="py-16 md:py-28 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="2. Foundation"
        title="Core Concepts of Digital Business"
        subtitle="Understanding the transition from traditional e-commerce to full digital business ecosystems."
      />

      {/* Concept Comparison */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div variants={fadeLeft} className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 hover:border-orange-200 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">E-commerce</h3>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The buying and selling of goods and services over the internet. It is a subset of digital business focused purely on transactions.
          </p>
          <ul className="space-y-3">
            {['Online Storefronts', 'Payment Gateways', 'Digital Marketing', 'Order Fulfillment'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeRight} className="bg-orange-50 rounded-3xl p-6 md:p-8 border border-orange-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}>
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Digital Business</h3>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
            The integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value.
          </p>
          <ul className="space-y-3 relative z-10">
            {['Supply Chain Digitization', 'Data-driven Decisions', 'Automated Workflows', 'Customer Ecosystems'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Network Types */}
      <motion.div variants={fadeUp} className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Network Types in Digital Business</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Intranet', icon: ShieldCheck, color: '#3b82f6', desc: 'Internal network for employees only. Used for HR, internal comms, and secure company data.' },
            { title: 'Extranet', icon: Network, color: '#8b5cf6', desc: 'Secure network accessible to partners, suppliers, and key clients. Enhances supply chain collaboration.' },
            { title: 'Internet', icon: Globe, color: '#10b981', desc: 'Public network accessible to everyone. Used for marketing, sales, and public customer interaction.' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="p-6">
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ background: `${item.color}15` }}>
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
