import React from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, ShoppingBag, Heart, Share2, Target, ArrowRight, ChevronDown } from 'lucide-react';
import { fadeUp, stagger, scaleIn, LOREM } from '../data/constants';
import { AnimatedSection, SectionHeading, Card } from '../components/Shared';

export default function CustomerBehavior() {
  return (
    <AnimatedSection id="customer-behavior" className="py-28 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="3. Customer Behavior"
        title="The Consumer Decision Journey"
        subtitle="Understanding how value flows through people in a non-linear path to purchase."
      />

      {/* Decision Journey Map */}
      <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-16">
        <h3 className="text-xl font-bold text-gray-900 text-center mb-10">6 Stages of Decision Making</h3>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          {[
            { step: 'Awareness', icon: Eye, color: '#3b82f6', desc: 'Triggered by need or ad' },
            { step: 'Consideration', icon: Search, color: '#8b5cf6', desc: 'Research & comparison' },
            { step: 'Intent', icon: Target, color: '#f59e0b', desc: 'Adding to cart' },
            { step: 'Purchase', icon: ShoppingBag, color: '#fe5621', desc: 'Transaction completed' },
            { step: 'Loyalty', icon: Heart, color: '#ef4444', desc: 'Repeat purchases' },
            { step: 'Advocacy', icon: Share2, color: '#10b981', desc: 'Word of mouth' },
          ].map((v, i) => (
            <React.Fragment key={i}>
              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }} className="flex-1 bg-gray-50 rounded-2xl p-5 text-center border border-gray-100 w-full md:w-auto">
                <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: `${v.color}15` }}>
                  {React.createElement(v.icon, { className: "w-6 h-6", style: { color: v.color } })}
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{v.step}</h4>
                <p className="text-xs text-gray-500">{v.desc}</p>
              </motion.div>
              {i < 5 && (
                <motion.div variants={scaleIn} className="flex-shrink-0 py-2">
                  <ArrowRight className="w-5 h-5 text-gray-300 hidden md:block" />
                  <ChevronDown className="w-5 h-5 text-gray-300 md:hidden" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Touchpoints */}
      <motion.div variants={fadeUp}>
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Digital Touchpoints</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Search Engines (SEO/SEM)', desc: 'Capturing high-intent users actively looking for solutions.' },
            { title: 'Social Media', desc: 'Building brand awareness and community engagement.' },
            { title: 'Email Marketing', desc: 'Direct, personalized communication for retention.' },
            { title: 'Website / App', desc: 'The core conversion engine and brand home.' },
            { title: 'Marketplaces', desc: 'High traffic discovery platforms like Shopee.' },
            { title: 'Affiliates / Influencers', desc: 'Leveraging third-party trust to drive sales.' }
          ].map((item, i) => (
            <Card key={i} className="p-6 border-l-4" style={{ borderLeftColor: i % 2 === 0 ? '#fe5621' : '#3b82f6' }}>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
