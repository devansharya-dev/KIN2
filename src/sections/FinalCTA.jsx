'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="shop" className="relative w-full py-32 md:py-48 bg-[var(--color-bg)] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <h1 className="font-main text-[16vw] md:text-[11vw] leading-[0.8] font-bold text-[var(--color-text)] uppercase mb-6">
          PURE <br /> 
          INTENT
        </h1>

        <div className="flex items-center gap-4 mb-10">
          <div className="h-[1px] w-12 bg-[var(--color-secondary)]"></div>
          <p className="font-main text-[var(--color-secondary)] text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-light">
            The New Standard
          </p>
          <div className="h-[1px] w-12 bg-[var(--color-secondary)]"></div>
        </div>

        <p className="font-main text-[var(--color-text-muted)] text-[14px] md:text-[18px] max-w-lg leading-relaxed mb-12 font-light">
          Stripping away the noise to reveal what matters. <br />
          Functional aesthetics for the modern era.
        </p>

        <button className="font-main bg-[var(--color-primary)] text-[var(--color-surface)] text-[11px] font-bold uppercase tracking-[0.4em] px-14 py-6 hover:bg-[var(--color-accent)] transition-all duration-500">
          Enter the Void
        </button>
      </motion.div>
    </section>
  );
}