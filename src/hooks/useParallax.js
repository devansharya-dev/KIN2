import { useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * useParallax — Performance-optimized parallax hook using Framer Motion.
 * Runs outside the React render cycle for 60fps smoothness.
 */
export default function useParallax({ speed = 0.3, scale = 0, direction = 'up' } = {}) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Translate logic
  const y = useTransform(
    smoothProgress, 
    [0, 1], 
    [speed * 100 * (direction === 'up' ? 1 : -1), speed * 100 * (direction === 'up' ? -1 : 1)]
  );

  // Scale logic
  const s = useTransform(smoothProgress, [0, 1], [1, 1 + scale]);

  return { ref, y, scale: s };
}
