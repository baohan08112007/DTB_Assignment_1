import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Target, ShoppingBag, Users, MessageSquare, ArrowRight } from 'lucide-react';
import { fadeUp, scaleIn } from '../data/constants';

export const FlowDiagram = () => {
  const steps = [
    { label: 'Awareness', icon: Globe, color: '#fe5621' },
    { label: 'Interest', icon: Zap, color: '#ff7849' },
    { label: 'Consideration', icon: Target, color: '#ff9a77' },
    { label: 'Purchase', icon: ShoppingBag, color: '#fe5621' },
    { label: 'Retention', icon: Users, color: '#d94318' },
    { label: 'Advocacy', icon: MessageSquare, color: '#b53410' },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-0 items-center">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <React.Fragment key={i}>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.05 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-3 transition-all duration-300 group-hover:shadow-xl"
                style={{ background: `linear-gradient(135deg, ${step.color}22, ${step.color}44)`, border: `2px solid ${step.color}33` }}
              >
                <Icon className="w-7 h-7" style={{ color: step.color }} />
              </div>
              <span className="text-xs font-bold text-gray-700 text-center">{step.label}</span>
              <div
                className="w-2 h-2 rounded-full mt-2 group-hover:scale-150 transition-transform"
                style={{ background: step.color }}
              />
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                variants={fadeUp}
                className="w-6 md:w-10 flex items-center justify-center pb-10"
              >
                <div className="w-full h-0.5 relative" style={{ background: 'linear-gradient(90deg, #fe562133, #fe5621)' }}>
                  <ArrowRight className="w-4 h-4 absolute -right-1 -top-2" style={{ color: '#fe5621' }} />
                </div>
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const MediaVenn = () => {
  const circles = [
    { label: 'Paid', sublabel: 'Ads', color: '#fe5621' },
    { label: 'Owned', sublabel: 'Website', color: '#ff9a77' },
    { label: 'Earned', sublabel: 'PR', color: '#d94318' },
  ];
  return (
    <div className="flex justify-between items-center w-full gap-3 mt-8 pb-4">
      {circles.map((c, i) => (
        <motion.div
          key={i}
          variants={scaleIn}
          whileHover={{ scale: 1.05, y: -5 }}
          className="flex-1 aspect-square rounded-full flex flex-col items-center justify-center text-center transition-all duration-300"
          style={{
            background: `${c.color}15`,
            border: `2px solid ${c.color}40`,
          }}
        >
          <div className="text-sm md:text-base font-bold" style={{ color: c.color }}>{c.label}</div>
          <div className="text-[10px] md:text-xs text-gray-600 mt-1">{c.sublabel}</div>
        </motion.div>
      ))}
    </div>
  );
};

export const CashFlowViz = () => {
  const [active, setActive] = useState(null);
  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      {/* Shopee */}
      <motion.div
        variants={scaleIn}
        className="rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300"
        style={{ borderColor: '#ee6b20', background: '#fff7f4' }}
        onMouseEnter={() => setActive('shopee')}
        onMouseLeave={() => setActive(null)}
      >
        <div className="text-center mb-4">
          <span className="text-2xl font-black text-orange-500">Shopee</span>
          <div className="text-xs text-gray-500 mt-1">Platform Path</div>
        </div>
        <div className="space-y-2">
          {['Customer Pays', '→ Shopee Holds', '→ 7-14 Day Wait', '→ Seller Gets ~85%'].map((step, i) => (
            <motion.div
              key={i}
              animate={active === 'shopee' ? { x: [0, 4, 0] } : {}}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-white rounded-xl px-3 py-2 border border-orange-100"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
              {step}
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#fe5621]/10 text-[#fe5621] border border-[#fe5621]/20">
            −12 to 15% cost
          </span>
        </div>
      </motion.div>
      {/* Coolmate */}
      <motion.div
        variants={scaleIn}
        className="rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300"
        style={{ borderColor: '#1a56db', background: '#f0f5ff' }}
        onMouseEnter={() => setActive('coolmate')}
        onMouseLeave={() => setActive(null)}
      >
        <div className="text-center mb-4">
          <span className="text-2xl font-black text-blue-600">Coolmate</span>
          <div className="text-xs text-gray-500 mt-1">DTC Path</div>
        </div>
        <div className="space-y-2">
          {['Customer Pays', '→ Payment Gateway', '→ Instant Transfer', '→ Coolmate Gets ~97%'].map((step, i) => (
            <motion.div
              key={i}
              animate={active === 'coolmate' ? { x: [0, 4, 0] } : {}}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-white rounded-xl px-3 py-2 border border-blue-100"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              {step}
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
            ~3.5% total cost
          </span>
        </div>
      </motion.div>
    </div>
  );
};
