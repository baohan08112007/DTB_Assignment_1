import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Building, ShieldCheck, Zap, ArrowRight, XCircle, CheckCircle,
  Lightbulb, DollarSign, RefreshCw, Lock, TrendingUp, Shield, Anchor,
  BarChart2, Star, Megaphone, Link2, Target, Coins, Activity,
  Tv2, Smartphone, Radio, AlertTriangle, BadgeCheck, Repeat,
} from 'lucide-react';
import { fadeUp, stagger, fadeLeft, fadeRight } from '../data/constants';
import { AnimatedSection, SectionHeading, Card } from '../components/Shared';
import SpotlightCard from '../components/SpotlightCard';
import { VerticalCarousel } from '../components/Carousel';

const VALUE_STRATEGIES = [
  { label: 'Platform Lock-in Mechanisms', Icon: Lock,     color: '#ef4444', desc: 'Raise switching costs so users remain within the ecosystem.' },
  { label: 'Premium Pricing',             Icon: DollarSign, color: '#fe5621', desc: 'Charge higher prices for perceived superior value or exclusivity.' },
  { label: 'Loyalty Programs',            Icon: Star,     color: '#f59e0b', desc: 'Reward repeat behaviour to increase lifetime customer value.' },
  { label: 'Advertising Revenue',         Icon: Megaphone, color: '#10b981', desc: 'Monetise platform traffic by selling ad placements to merchants.' },
  { label: 'Subscription Fees',           Icon: RefreshCw, color: '#3b82f6', desc: 'Recurring revenue model that builds predictable cash flow.' },
];

export default function StrategyAnalysis() {
  return (
    <AnimatedSection id="strategy-analysis" className="py-16 md:py-28 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <motion.div variants={fadeUp} className="bg-orange-50 rounded-3xl p-6 md:p-12 border border-orange-100">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">DTC Disruption</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">How Direct-to-Consumer models are disrupting traditional retail by disintermediating the supply chain.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before - Traditional */}
          <SpotlightCard variants={fadeLeft} spotlightColor="rgba(239, 68, 68, 0.08)" className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm bg-gradient-to-br from-red-50 to-white">
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
          </SpotlightCard>
          
          {/* After - DTC */}
          <SpotlightCard variants={fadeRight} spotlightColor="rgba(16, 185, 129, 0.08)" className="bg-white rounded-2xl p-6 border border-green-200 shadow-sm bg-gradient-to-br from-green-50 to-white">
            <div className="text-xs font-bold text-green-500 uppercase tracking-widest mb-5 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              After — DTC Direct
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold min-h-12">
              <span className="px-5 py-2.5 rounded-xl text-white shadow-sm" style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}>Brand</span>
              <ArrowRight className="w-6 h-6 text-brand" />
              <span className="px-5 py-2.5 rounded-xl text-white shadow-sm" style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}>Customer</span>
            </div>
            <p className="text-xs text-green-600 mt-4 text-center font-medium">Direct connection = higher margin + full data ownership</p>
          </SpotlightCard>
        </div>
      </motion.div>

      {/* Value Capture Strategy */}
      <motion.div variants={fadeUp} className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Value Capture Strategy</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            How a company converts the value it creates into revenue and profit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Definition card */}
          <SpotlightCard
            variants={fadeLeft}
            spotlightColor="rgba(254, 86, 33, 0.08)"
            className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 shadow-sm flex flex-col gap-4 h-full"
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: '#fe562115' }}>
                <Lightbulb className="w-5 h-5" style={{ color: '#fe5621' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#fe5621]">Definition</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              Value Capture Strategy refers to how a company converts the value it creates into{' '}
              <span className="font-semibold text-gray-900">revenue and profit</span>. Common strategies include{' '}
              <span className="font-semibold text-[#fe5621]">premium pricing</span>,{' '}
              <span className="font-semibold text-[#fe5621]">subscription fees</span>,{' '}
              <span className="font-semibold text-[#fe5621]">loyalty programs</span>,{' '}
              <span className="font-semibold text-[#fe5621]">advertising revenue</span>, and{' '}
              <span className="font-semibold text-[#fe5621]">platform lock-in mechanisms</span>.
            </p>
          </SpotlightCard>

          {/* Common Strategies — Vertical Carousel */}
          <motion.div variants={fadeRight} className="flex flex-col">
            <p className="text-xs text-gray-400 mb-3 text-center">Auto-advances · tap a dot to jump</p>
            <VerticalCarousel
              items={VALUE_STRATEGIES}
              interval={3000}
              renderItem={(item) => {
                const Icon = item.Icon;
                return (
                  <SpotlightCard
                    spotlightColor={`rgba(${parseInt(item.color.slice(1,3),16)}, ${parseInt(item.color.slice(3,5),16)}, ${parseInt(item.color.slice(5,7),16)}, 0.08)`}
                    className="bg-white rounded-2xl px-5 py-5 border border-gray-100 shadow-sm flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${item.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </SpotlightCard>
                );
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Core Strategy */}

      <motion.div variants={fadeUp} className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Core Strategy</h3>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Shopee's strategic pillars that drive platform dominance and long-term value capture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: 'Switching Costs',
              label: 'Competitive Moat',
              desc: 'Building high friction barriers that make migrating to competing platforms painful and costly.',
              Icon: Anchor,
              color: '#fe5621',
              gradient: 'from-orange-50 to-white',
              border: 'border-orange-100',
              hover: 'hover:border-orange-200',
            },
            {
              title: 'Value Capture Strategy',
              label: 'Shopee',
              desc: 'Extracting maximum value from every transaction and user interaction across the platform ecosystem.',
              Icon: TrendingUp,
              color: '#fe5621',
              gradient: 'from-orange-50 to-white',
              border: 'border-orange-100',
              hover: 'hover:border-orange-200',
            },
            {
              title: 'Revenue Leakage Mitigation',
              label: 'Monetization',
              desc: "Preventing off-platform transactions and ensuring all revenue flows through Shopee's infrastructure.",
              Icon: Shield,
              color: '#fe5621',
              gradient: 'from-orange-50 to-white',
              border: 'border-orange-100',
              hover: 'hover:border-orange-200',
            },
            {
              title: 'Platform Lock-in Matrix',
              label: 'Retention',
              desc: 'Structural mechanisms that make leaving the platform costly and unattractive for buyers and sellers.',
              Icon: Lock,
              color: '#fe5621',
              gradient: 'from-orange-50 to-white',
              border: 'border-orange-100',
              hover: 'hover:border-orange-200',
            },
            {
              title: 'Closed-Loop Ecosystem',
              label: 'Self-Reinforcing',
              desc: "An integrated system where users stay, transact, and engage entirely within Shopee's platform.",
              Icon: RefreshCw,
              color: '#fe5621',
              gradient: 'from-orange-50 to-white',
              border: 'border-orange-100',
              hover: 'hover:border-orange-200',
            },
          ].map((item, i) => (
            <SpotlightCard
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              spotlightColor={`rgba(${parseInt(item.color.slice(1,3),16)}, ${parseInt(item.color.slice(3,5),16)}, ${parseInt(item.color.slice(5,7),16)}, 0.08)`}
              className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-6 border ${item.border} ${item.hover} shadow-sm transition-all duration-300 hover:shadow-md flex flex-col gap-3`}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: `${item.color}15` }}>
                  <item.Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.label}
                </span>
              </div>
              <h4 className="font-bold text-gray-900 text-base leading-tight">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </SpotlightCard>
          ))}
        </div>
      </motion.div>

      {/* Operational & Technical */}
      <motion.div variants={fadeUp} className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Operational & Technical</h3>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            The technical and operational infrastructure powering Shopee's competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Continuous Data & Money Flow',
              desc: "Real-time streams of transaction data and financial flows that feed Shopee's analytics and decision engines.",
              Icon: Activity,
              color: '#ef4444',
              tag: 'Data Infrastructure',
            },
            {
              title: 'Platform Equity',
              desc: "The accumulated brand trust, user base, and network effects that compound Shopee's market position over time.",
              Icon: BarChart2,
              color: '#fe5621',
              tag: 'Brand Value',
            },
            {
              title: 'Customer Retention Deterrent',
              desc: 'Active mechanisms — from loyalty rewards to personalized feeds — that reduce churn and keep users engaged.',
              Icon: Target,
              color: '#f59e0b',
              tag: 'Retention',
            },
            {
              title: 'Shopee Coins & Platinum Tier',
              desc: 'Gamified loyalty programs that reward repeat purchases and incentivize higher spending thresholds.',
              Icon: Star,
              color: '#10b981',
              tag: 'Loyalty Program',
            },
            {
              title: 'Cross-Services Integration',
              desc: 'Seamless connectivity across Shopee Live, Food, and Pay — creating a super-app experience that deepens engagement.',
              Icon: Link2,
              color: '#3b82f6',
              tag: 'Shopee Live · Food · Pay',
            },
          ].map((item, i) => (
            <SpotlightCard
              key={i}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              spotlightColor={`rgba(${parseInt(item.color.slice(1,3),16)}, ${parseInt(item.color.slice(3,5),16)}, ${parseInt(item.color.slice(5,7),16)}, 0.08)`}
              className={`bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5 ${i === 4 ? 'md:col-span-2' : ''}`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.color}15` }}
              >
                <item.Icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-lg" style={{ background: `${item.color}12`, color: item.color }}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>

  );
}
