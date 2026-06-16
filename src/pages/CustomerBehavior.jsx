import React from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, ShoppingBag, Heart, Share2, Target, ArrowRight, ChevronDown } from 'lucide-react';
import { fadeUp, stagger, scaleIn, LOREM } from '../data/constants';
import { AnimatedSection, SectionHeading, Card } from '../components/Shared';
import SpotlightCard from '../components/SpotlightCard';
import { AutoCarousel } from '../components/Carousel';

const STAGES = [
  { step: 'Awareness', icon: Eye,         color: '#3b82f6', desc: 'Triggered by need or ad',      detail: 'The customer becomes aware of a need or discovers Shopee through TikTok ads, social feeds, or word-of-mouth.',          num: '01' },
  { step: 'Consideration', icon: Search,  color: '#8b5cf6', desc: 'Research & comparison',         detail: 'They actively research, compare prices, read reviews, and browse multiple sellers on Shopee before deciding.',          num: '02' },
  { step: 'Intent', icon: Target,         color: '#f59e0b', desc: 'Adding to cart',                detail: 'The customer adds items to cart, saves to wishlist, or uses Shopee\'s "Buy Now" feature — intent signal is strong.',    num: '03' },
  { step: 'Purchase', icon: ShoppingBag,  color: '#fe5621', desc: 'Transaction completed',         detail: 'Checkout is completed via ShopeePay, COD, or linked bank. Vouchers and Shopee Coins often trigger the final click.', num: '04' },
  { step: 'Loyalty', icon: Heart,         color: '#ef4444', desc: 'Repeat purchases',              detail: 'Shopee Coins rewards, Platinum membership perks, and personalised feeds keep the user returning for more.',             num: '05' },
  { step: 'Advocacy', icon: Share2,       color: '#10b981', desc: 'Word of mouth',                 detail: 'Satisfied buyers leave reviews, share hauls on social media, and refer friends — creating earned media at no cost.',    num: '06' },
];

export default function CustomerBehavior() {
  return (
    <AnimatedSection id="customer-behavior" className="py-16 md:py-28 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        tag="3. Customer Behavior"
        title="The Consumer Decision Journey"
        subtitle="Understanding how value flows through people in a non-linear path to purchase."
      />

      {/* Decision Journey Map — Auto Carousel */}
      <SpotlightCard variants={fadeUp} className="bg-white rounded-3xl p-5 md:p-8 border border-gray-100 shadow-sm mb-16">
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">6 Stages of Decision Making</h3>
        <p className="text-xs text-gray-400 text-center mb-6">Auto-advances every 2.5 seconds · tap a dot to jump</p>

        {/* Stage pills — always visible overview */}
        <div className="flex items-center justify-center gap-1 flex-wrap mb-8">
          {STAGES.map((v, i) => (
            <React.Fragment key={i}>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: `${v.color}15`, color: v.color }}
              >
                {v.step}
              </span>
              {i < 5 && <ArrowRight className="w-3 h-3 text-gray-300 flex-shrink-0" />}
            </React.Fragment>
          ))}
        </div>

        <AutoCarousel
          items={STAGES}
          interval={2500}
          renderItem={(v) => {
            const Icon = v.icon;
            return (
              <div className="flex flex-col sm:flex-row items-center gap-6 py-4 px-2 sm:px-6">
                {/* Icon + step number */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-sm"
                    style={{ background: `${v.color}15` }}
                  >
                    <Icon className="w-10 h-10" style={{ color: v.color }} />
                  </div>
                  <span className="text-xs font-black text-gray-300">STEP {v.num}</span>
                </div>
                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="font-extrabold text-gray-900 text-xl mb-1" style={{ color: v.color }}>{v.step}</h4>
                  <p className="text-sm font-semibold text-gray-500 mb-3">{v.desc}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.detail}</p>
                </div>
              </div>
            );
          }}
        />
      </SpotlightCard>

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

      {/* Touchpoint Classification */}
      <motion.div variants={fadeUp} className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Touchpoint Classification</h3>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Every customer interaction falls into one of three touchpoint categories — each plays a distinct role in the marketing mix.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Paid */}
          <SpotlightCard variants={scaleIn} whileHover={{ y: -6 }} spotlightColor="rgba(59, 130, 246, 0.08)" className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:border-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base leading-tight">Paid Touchpoint</div>
                <div className="text-xs text-blue-500 font-semibold mt-0.5">Traffic Generation</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">
              Sponsored posts on TikTok/Social media to capture traffic.
            </p>
            <div className="rounded-2xl bg-blue-50 border border-blue-100 px-4 py-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Example</div>
              <p className="text-sm text-gray-700">TikTok Ads, Facebook Sponsored Posts, Google Search Ads</p>
            </div>
          </SpotlightCard>

          {/* Owned */}
          <SpotlightCard variants={scaleIn} whileHover={{ y: -6 }} spotlightColor="rgba(254, 86, 33, 0.08)" className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:border-orange-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base leading-tight">Owned Touchpoint</div>
                <div className="text-xs text-[#fe5621] font-semibold mt-0.5">Direct Interaction</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">
              Shopee App interface to drive direct interaction.
            </p>
            <div className="rounded-2xl bg-orange-50 border border-orange-100 px-4 py-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Example</div>
              <p className="text-sm text-gray-700">Shopee App, Brand Website, Email Newsletter</p>
            </div>
          </SpotlightCard>

          {/* Earned */}
          <SpotlightCard variants={scaleIn} whileHover={{ y: -6 }} spotlightColor="rgba(16, 185, 129, 0.08)" className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:border-emerald-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base leading-tight">Earned Touchpoint</div>
                <div className="text-xs text-emerald-500 font-semibold mt-0.5">Trust Building</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">
              Community forums and user reviews to build trust.
            </p>
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Example</div>
              <p className="text-sm text-gray-700">Shopee Reviews, Facebook Groups, Word-of-Mouth</p>
            </div>
          </SpotlightCard>
        </div>
      </motion.div>

      {/* Lifecycle Marketing Strategy */}
      <motion.div variants={fadeUp} className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Lifecycle Marketing Strategy</h3>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            A three-stage loop connecting touchpoints to customer lifecycle stages — from first click to loyal advocate.
          </p>
        </div>

        <div className="relative">
          {/* Loop connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 to-emerald-200" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                stage: 'Acquisition',
                type: 'Paid Touchpoint',
                desc: 'Driven by Paid Touchpoints to generate traffic.',
                color: '#3b82f6',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-100',
                textColor: 'text-blue-500',
                gradientFrom: '#3b82f6',
                gradientTo: '#1d4ed8',
                icon: '📢',
              },
              {
                step: '02',
                stage: 'Conversion',
                type: 'Owned Touchpoint',
                desc: 'Triggered by Owned Touchpoints via vouchers/incentives.',
                color: '#fe5621',
                bgColor: 'bg-orange-50',
                borderColor: 'border-orange-100',
                textColor: 'text-[#fe5621]',
                gradientFrom: '#fe5621',
                gradientTo: '#d94318',
                icon: '🛒',
              },
              {
                step: '03',
                stage: 'Retention & Advocacy',
                type: 'Earned Touchpoint',
                desc: 'Reinforced by Earned Touchpoints through review incentives.',
                color: '#10b981',
                bgColor: 'bg-emerald-50',
                borderColor: 'border-emerald-100',
                textColor: 'text-emerald-500',
                gradientFrom: '#10b981',
                gradientTo: '#059669',
                icon: '⭐',
              },
            ].map((item, i) => (
              <React.Fragment key={i}>
                <SpotlightCard
                  variants={scaleIn}
                  whileHover={{ y: -6 }}
                  spotlightColor={`rgba(${parseInt(item.color.slice(1,3),16)}, ${parseInt(item.color.slice(3,5),16)}, ${parseInt(item.color.slice(5,7),16)}, 0.08)`}
                  className="relative bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Step circle */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-white font-black flex-shrink-0" style={{ background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})` }}>
                      <span className="text-[10px] font-bold opacity-80">STEP</span>
                      <span className="text-lg leading-none">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base leading-tight">{item.stage}</div>
                      <div className={`text-xs font-semibold mt-0.5 ${item.textColor}`}>{item.type}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  <div className={`rounded-2xl ${item.bgColor} border ${item.borderColor} px-4 py-3 text-center`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  {/* Arrow for mobile */}
                  {i < 2 && (
                    <div className="md:hidden flex justify-center mt-2">
                      <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </div>
                  )}
                </SpotlightCard>
                {/* Arrow connector (desktop) */}
                {i < 2 && (
                  <div className="hidden md:flex absolute items-center" style={{ top: '3.5rem', left: `calc(${(i + 1) * 33.33}% - 0.5rem)`, transform: 'translateX(-50%)' }}>
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm z-10">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Loop back indicator */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-gray-200" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-500">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Continuous Loop
            </div>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-gray-200" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

