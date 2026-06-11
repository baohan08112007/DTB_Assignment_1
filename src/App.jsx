import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { motion } from 'framer-motion';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Foundation = lazy(() => import('./pages/Foundation'));
const CustomerBehavior = lazy(() => import('./pages/CustomerBehavior'));
const StrategyAnalysis = lazy(() => import('./pages/StrategyAnalysis'));
const EcommerceManagement = lazy(() => import('./pages/EcommerceManagement'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Conclusion = lazy(() => import('./pages/Conclusion'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-10 h-10 border-4 border-gray-200 border-t-brand rounded-full"
    />
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="foundation" element={<Foundation />} />
          <Route path="customer-behavior" element={<CustomerBehavior />} />
          <Route path="strategy-analysis" element={<StrategyAnalysis />} />
          <Route path="ecommerce-management" element={<EcommerceManagement />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="conclusion" element={<Conclusion />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
