import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, stagger } from '../data/constants';
import { AnimatedSection, SectionHeading } from '../components/Shared';
import { Link } from 'react-router-dom';

export default function Conclusion() {
  return (
    <AnimatedSection id="conclusion" className="py-28 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <SectionHeading
        tag="7. Q&A & Conclusion"
        title="Conclusion & Takeaways"
        subtitle="Key learnings from the transition to digital business models."
      />

      <motion.div variants={stagger} className="space-y-8">
        {[
          { title: 'Digital Business is the Foundation', body: 'Digitizing all business operations is a prerequisite for survival and growth in the digital era.' },
          { title: 'Customers Are Not Linear', body: 'Modern customer journeys are complex with multiple touchpoints. Businesses must be present at the right time and place.' },
          { title: 'DTC is the Long-term Path', body: 'DTC models help businesses own data, optimize profit margins, and build sustainable brands.' },
          { title: 'Disintermediation is Inevitable', body: 'Technology helps eliminate intermediaries, directly connecting Brands with customers. Early adapters win.' },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ x: 8 }}
            className="flex items-start gap-5 text-left bg-gray-50 rounded-2xl p-6 border border-gray-100 cursor-pointer transition-all hover:border-orange-200 hover:bg-orange-50"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-black text-sm" style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)' }}>
              {i + 1}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
          style={{ background: 'linear-gradient(135deg, #fe5621, #d94318)', boxShadow: '0 8px 30px rgba(254,86,33,0.35)' }}
        >
          Back to Home
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </AnimatedSection>
  );
}
