export const gmvData = [
  { year: '2020', gmv: 35.4 }, { year: '2021', gmv: 62.6 },
  { year: '2022', gmv: 73.5 }, { year: '2023', gmv: 78.5 },
  { year: '2024', gmv: 85.0 }, { year: '2025', gmv: 92.4 },
];

export const feeData = [
  { category: 'Commission', shopee: 10, coolmate: 0 },
  { category: 'Transaction', shopee: 4, coolmate: 1.5 },
  { category: 'Marketing', shopee: 6, coolmate: 2 },
  { category: 'Total Effective', shopee: 15, coolmate: 3.5 },
];

export const radarData = [
  { metric: 'Data Ownership', shopee: 20, coolmate: 100 },
  { metric: 'Cash Flow Speed', shopee: 30, coolmate: 95 },
  { metric: 'Margin', shopee: 40, coolmate: 85 },
  { metric: 'Brand Control', shopee: 25, coolmate: 100 },
  { metric: 'Flexibility', shopee: 35, coolmate: 90 },
  { metric: 'Scale', shopee: 95, coolmate: 60 },
];

export const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

export const NAV_LINKS = [
  { label: '1. Introduction', href: '/' },
  { label: '2. Core Concepts', href: '/foundation' },
  { label: '3. Customer Behavior', href: '/customer-behavior' },
  { label: '4. Strategy Analysis', href: '/strategy-analysis' },
  { label: '5. E-commerce Mgmt', href: '/ecommerce-management' },
  { label: '6. Case Study', href: '/case-study' },
  { label: '7. Conclusion', href: '/conclusion' },
];

// ─── ANIMATION VARIANTS ────────────────────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  out: { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};
