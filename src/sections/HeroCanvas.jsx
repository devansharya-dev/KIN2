import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import BeatText from '../components/BeatText';
import GlowPulse from '../components/GlowPulse';
import ScrollIndicator from '../components/ScrollIndicator';
import ProgressDots from '../components/ProgressDots';

import { TOTAL_FRAMES, FRAME_PREFIX, SCROLL_HEIGHT, pad, BEATS } from '../utils/constants';

export default function HeroCanvas({ children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const animFrameRef = useRef(null);

  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ── Smoothed frame index ─────────────────────────────────────────────────
  const rawFrame = useRef(0);
  const smoothFrame = useRef(0);

  // ── Preload all frames ────────────────────────────────────────────────────
  useEffect(() => {
    const images = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `${FRAME_PREFIX}${pad(i)}.jpg`;
      img.onload = img.onerror = () => {
        loaded++;
        const pct = (loaded / TOTAL_FRAMES) * 100;
        setLoadProgress(pct);
        if (loaded === TOTAL_FRAMES) setReady(true);
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // ── Draw frame to canvas ──────────────────────────────────────────────────
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[Math.round(frameIndex)];
    if (!img || !img.complete || !img.naturalWidth) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    // contain-fit logic with a 15% zoom to crop out the Veo watermark
    const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight) * 1.15;
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    const dx = (width - dw) / 2;
    const dy = (height - dh) / 2;

    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // ── Resize canvas ─────────────────────────────────────────────────────────
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [drawFrame]);

  // ── Scroll → rawFrame with Lenis ──────────────────────────────────────────
  useEffect(() => {
    if (!ready || !containerRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: containerRef.current,
      content: contentRef.current,
      lerp: 0.1, // Smooth scrolling factor
      smoothWheel: true,
    });

    const onLenisScroll = (e) => {
      // e.progress gives us exactly what we need natively (0 to 1)
      setScrollProgress(e.progress);
      rawFrame.current = Math.min(TOTAL_FRAMES - 1, Math.floor(e.progress * (TOTAL_FRAMES - 1)));
    };

    lenis.on('scroll', onLenisScroll);

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [ready]);

  // ── Spring animation loop ─────────────────────────────────────────────────
  useEffect(() => {
    if (!ready) return;

    const loop = () => {
      // Smooth LERP (Linear Interpolation) for jitter-free scroll
      smoothFrame.current += (rawFrame.current - smoothFrame.current) * 0.08;

      // Clamp
      smoothFrame.current = Math.max(0, Math.min(TOTAL_FRAMES - 1, smoothFrame.current));
      currentFrameRef.current = smoothFrame.current;

      drawFrame(Math.round(smoothFrame.current));
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [ready, drawFrame]);

  return (
    <>
      {/* Loader */}


      {/* Main scrollable container */}
      <motion.div
        ref={containerRef}
        className="scroll-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Lenis Content Wrapper */}
        <div ref={contentRef}>
          {/* Sticky canvas viewport */}
          <div className="sticky-wrap" style={{ height: SCROLL_HEIGHT }}>
          <div className="sticky-inner">
            {/* Canvas */}
            <canvas ref={canvasRef} className="film-canvas" />

            {/* Vignette + noise overlay */}
            <div className="vignette" />
            <div className="noise" />

            {/* Glow at 60% scroll */}
            <GlowPulse scrollProgress={scrollProgress} />

            {/* Navbar */}
            <Navbar scrollProgress={scrollProgress} />

            {/* Beat overlays */}
            {BEATS.map((beat) => (
              <BeatText key={beat.id} beat={beat} scrollProgress={scrollProgress} />
            ))}

            {/* Scroll cue */}
            <ScrollIndicator scrollProgress={scrollProgress} />

            {/* Beat progress dots */}
            <ProgressDots scrollProgress={scrollProgress} />
          </div>
        </div>

          {/* Render children (like CTA and Footer) at the end of the scroll container */}
          {children}
        </div>
      </motion.div>
    </>
  );
}
