import { motion } from 'framer-motion';

export default function ScrollIndicator({ scrollProgress }) {
  if (scrollProgress > 0.05) return null;
  return (
    <motion.div
      className="scroll-indicator"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="scroll-line" />
      <span className="scroll-label">SCROLL</span>
    </motion.div>
  );
}
