import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Network, Share2, Eye, ShieldCheck, Zap, Tv2, Smartphone, Radio, AlertTriangle, BadgeCheck, Repeat, Megaphone, Star } from 'lucide-react';
import { fadeUp, stagger, fadeLeft, fadeRight, LOREM } from '../data/constants';
import { AnimatedSection, SectionHeading, Card } from '../components/Shared';
import SpotlightCard from '../components/SpotlightCard';

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
        <SpotlightCard variants={fadeLeft} spotlightColor="rgba(59, 130, 246, 0.1)" className="bg-[#f0f4fa] rounded-3xl p-6 md:p-8 border border-blue-100/50 hover:border-blue-200 transition-colors shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">E-commerce</h3>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
            The buying and selling of goods and services over the internet. It is a subset of digital business focused purely on transactions.
          </p>
          <ul className="space-y-3 relative z-10">
            {['Online Storefronts', 'Payment Gateways', 'Digital Marketing', 'Order Fulfillment'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {item}
              </li>
            ))}
          </ul>
        </SpotlightCard>

        <SpotlightCard variants={fadeRight} spotlightColor="rgba(254, 86, 33, 0.1)" className="bg-orange-50 rounded-3xl p-6 md:p-8 border border-orange-100 shadow-sm">
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
        </SpotlightCard>
      </div>

      {/* Network Types */}
      <motion.div variants={fadeUp} className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Network Types in Digital Business</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Intranet', icon: ShieldCheck, color: '#fe5621', desc: 'Internal network for employees only. Used for HR, internal comms, and secure company data.' },
            { title: 'Extranet', icon: Network, color: '#3b82f6', desc: 'Secure network accessible to partners, suppliers, and key clients. Enhances supply chain collaboration.' },
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
      {/* Types of E-Commerce Transactions */}
      <motion.div variants={fadeUp} className="mt-4">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Types of E-Commerce Transactions</h3>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Understanding the three core models that define how buyers and sellers interact in the digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* B2C */}
          <SpotlightCard variants={fadeUp} whileHover={{ y: -6 }} spotlightColor="rgba(254, 86, 33, 0.08)" className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:border-orange-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}>
                B2C
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base leading-tight">Business-to-Consumer</div>
                <div className="text-xs text-[#fe5621] font-semibold mt-0.5">High Frequency</div>
              </div>
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Definition</div>
                <p className="text-sm text-gray-600 leading-relaxed">Direct commercial transactions between businesses and individual consumers.</p>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Characteristics</div>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2 text-sm text-gray-600"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#fe5621] flex-shrink-0" />Small transaction volumes per order</li>
                  <li className="flex items-start gap-2 text-sm text-gray-600"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#fe5621] flex-shrink-0" />Very high transaction frequency</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-orange-50 border border-orange-100 px-4 py-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Real-World Example</div>
              <p className="text-sm text-gray-700 leading-relaxed">Buying a pair of shoes from the official Nike store on <span className="font-semibold text-[#fe5621]">Shopee Mall</span>.</p>
            </div>
          </SpotlightCard>

          {/* B2B */}
          <SpotlightCard variants={fadeUp} whileHover={{ y: -6 }} spotlightColor="rgba(59, 130, 246, 0.08)" className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:border-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}>
                B2B
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base leading-tight">Business-to-Business</div>
                <div className="text-xs text-blue-500 font-semibold mt-0.5">High Value</div>
              </div>
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Definition</div>
                <p className="text-sm text-gray-600 leading-relaxed">Commercial transactions conducted between businesses.</p>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Characteristics</div>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2 text-sm text-gray-600"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />Large contract values</li>
                  <li className="flex items-start gap-2 text-sm text-gray-600"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />Complex decision-making processes</li>
                  <li className="flex items-start gap-2 text-sm text-gray-600"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />High-security platform requirements (Extranet)</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-blue-50 border border-blue-100 px-4 py-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Real-World Example</div>
              <p className="text-sm text-gray-700 leading-relaxed">Nike purchasing rubber from a raw material supplier, or an enterprise buying <span className="font-semibold text-blue-500">CRM software</span>.</p>
            </div>
          </SpotlightCard>

          {/* C2C */}
          <SpotlightCard variants={fadeUp} whileHover={{ y: -6 }} spotlightColor="rgba(16, 185, 129, 0.08)" className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:border-emerald-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                C2C
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base leading-tight">Consumer-to-Consumer</div>
                <div className="text-xs text-emerald-500 font-semibold mt-0.5">Platform-Driven</div>
              </div>
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Definition</div>
                <p className="text-sm text-gray-600 leading-relaxed">Direct transactions between consumers, empowered by the boom of digital platforms.</p>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Characteristics</div>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2 text-sm text-gray-600"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />Platform acts purely as intermediary</li>
                  <li className="flex items-start gap-2 text-sm text-gray-600"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />Provides infrastructure &amp; payment gateways</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Real-World Example</div>
              <p className="text-sm text-gray-700 leading-relaxed">Trading secondhand goods on <span className="font-semibold text-emerald-500">Cho Tot</span>, liquidation groups on Facebook, or transacting on eBay.</p>
            </div>
          </SpotlightCard>
        </div>
      </motion.div>

      {/* Controlling Traffic via 7Ds & POEM Loop */}
      <motion.div variants={fadeUp} className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Controlling Traffic via 7Ds &amp; The POEM Loop</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            How Shopee orchestrates traffic across paid, owned, and earned channels to build a self-reinforcing engagement loop.
          </p>
        </div>

        {/* Key Examples Banner */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl p-6 md:p-8 mb-8 text-white"
          style={{ background: 'linear-gradient(135deg, #fe5621 0%, #ff7c47 50%, #fe5621 100%)' }}
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { stat: '200M+', label: 'Shopee Live Views', sub: 'Real-time engagement at scale', Icon: Tv2 },
              { stat: '95%', label: 'Mobile Transactions', sub: 'Smartphone-first platform', Icon: Smartphone },
              { stat: '11.11', label: 'Flash Sale Campaigns', sub: 'Short-term traffic spikes', Icon: Zap },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-1">
                  <item.Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-extrabold tracking-tight">{item.stat}</div>
                <div className="font-semibold text-sm">{item.label}</div>
                <div className="text-xs text-orange-100">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 7Ds + POEM side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* 7Ds Framework */}
          <SpotlightCard
            variants={fadeLeft}
            spotlightColor="rgba(59, 130, 246, 0.08)"
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 h-full"
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#fe562115' }}>
                <Radio className="w-5 h-5" style={{ color: '#fe5621' }} />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: '#fe5621' }}>The 7Ds Framework</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed md:min-h-[48px]">
              Digital businesses must balance two modes of traffic to sustain platform growth.
            </p>
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-3 p-3 rounded-2xl flex-1" style={{ background: '#3b82f615' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#3b82f620' }}>
                  <Repeat className="w-4 h-4" style={{ color: '#3b82f6' }} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Always-On Engagement</div>
                  <div className="text-xs text-gray-500 mt-0.5">Daily interaction to maintain organic presence and habit loops.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl flex-1" style={{ background: '#3b82f615' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#3b82f620' }}>
                  <Zap className="w-4 h-4" style={{ color: '#3b82f6' }} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Campaign-Based Activities</div>
                  <div className="text-xs text-gray-500 mt-0.5">Flash sales &amp; seasonal events for short-term conversion spikes.</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-amber-50 border border-amber-100 flex-1">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <p className="text-xs text-amber-700 leading-relaxed">
                  <span className="font-semibold">Risk:</span> Subsidy-driven loyalty — users react to discounts rather than building long-term platform affinity.
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* POEM Loop */}
          <SpotlightCard
            variants={fadeRight}
            spotlightColor="rgba(16, 185, 129, 0.08)"
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 h-full"
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#fe562115' }}>
                <Repeat className="w-5 h-5" style={{ color: '#fe5621' }} />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: '#fe5621' }}>The POEM Loop</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed md:min-h-[48px]">
              Shopee's 95% mobile-first model creates a continuous, self-reinforcing traffic loop across three media types.
            </p>
            <div className="flex flex-col gap-3 flex-1">
              {[
                { type: 'Paid', color: '#10b981', Icon: Megaphone, channel: 'TikTok Ads · KOLs', role: 'Attract new users into the app ecosystem.' },
                { type: 'Owned', color: '#10b981', Icon: Smartphone, channel: 'Shopee App', role: 'Capture and convert traffic within the platform.' },
                { type: 'Earned', color: '#10b981', Icon: Star, channel: 'Shopee Coins Reviews', role: 'Organic re-engagement at very low cost.' },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl flex-1" style={{ background: `${m.color}15` }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#10b98120' }}>
                    <m.Icon className="w-4 h-4" style={{ color: '#10b981' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-xs px-2 py-0.5 rounded-md" style={{ background: `${m.color}20`, color: m.color }}>{m.type}</span>
                      <span className="text-sm font-semibold text-gray-900">{m.channel}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        {/* Summary strip */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl p-6 border border-orange-100 flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
          style={{ background: 'linear-gradient(135deg, #fff7f0, #ffffff)' }}
        >
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: '#fe562115' }}>
            <BadgeCheck className="w-6 h-6" style={{ color: '#fe5621' }} />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">Overall: </span>
            The POEM framework acts as an integrated loop where media channels reinforce each other — reducing acquisition cost while deepening long-term user engagement.
          </p>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
