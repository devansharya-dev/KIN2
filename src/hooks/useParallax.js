import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useParallax — Lightweight parallax hook using CSS transforms only.
 * Returns a ref to attach to the container and the current parallax values.
 *
 * @param {Object} options
 * @param {number} options.speed   — Parallax speed factor (0 = static, 1 = full scroll speed). Default 0.3
 * @param {number} options.scale   — Max additional scale on scroll (e.g. 0.05 = 5% growth). Default 0
 * @param {string} options.direction — 'up' | 'down'. Default 'up'
 */
export default function useParallax({ speed = 0.3, scale = 0, direction = 'up' } = {}) {
  const ref = useRef(null);
  const [values, setValues] = useState({ y: 0, scale: 1, progress: 0 });
  const ticking = useRef(false);

  const update = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // progress: 0 when element enters bottom, 1 when it leaves top
    const progress = Math.min(
      Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
      1
    );

    // Translate: centered at 0.5 progress so element starts slightly below and moves up
    const centered = (progress - 0.5) * 2; // -1 to 1
    const translateY = centered * speed * 100 * (direction === 'up' ? -1 : 1);

    // Scale: grows from 1 to 1+scale as you scroll through
    const currentScale = 1 + scale * progress;

    setValues({
      y: Math.round(translateY * 100) / 100,
      scale: Math.round(currentScale * 1000) / 1000,
      progress,
    });

    ticking.current = false;
  }, [speed, scale, direction]);

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(update);
    }
  }, [update]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial calculation
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll, update]);

  return { ref, ...values };
}
