// src/components/Loader.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const interFont = '"Inter", sans-serif';

export default function Loader({ progress }) {
  return (
    <AnimatePresence mode="wait">
      {progress < 100 && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-[var(--color-primary)] flex items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { 
              type: "spring", 
              stiffness: 400, // Super tight spring
              damping: 40,   // No bounce, just pure speed
              mass: 1
            } 
          }}
        >
          {/* Progress Percentage - Centered & Sharp */}
          <div className="relative flex flex-col items-center">
            <div className="overflow-hidden h-[110px] md:h-[160px]">
              <motion.span 
                className="text-[var(--color-surface)] text-[30vw] md:text-[18vw] font-bold leading-none block"
                style={{ fontFamily: interFont, letterSpacing: "-0.05em" }}
              >
                {Math.round(progress)}
              </motion.span>
            </div>
            
            {/* Speed Line */}
            <div className="w-[40vw] max-w-[150px] h-[3px] bg-[var(--color-surface)]/20 mt-2 overflow-hidden">
              <motion.div 
                className="h-full bg-[var(--color-accent)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            <div className="mt-8 text-[10px] uppercase tracking-[0.8em] text-[var(--color-surface)]/50 font-medium">
              Initializing
            </div>
          </div>

          {/* Side Accents (To fill space without slowing down) */}
          <div className="absolute bottom-10 left-10 opacity-20 text-[9px] font-mono tracking-widest text-[var(--color-surface)]">
            KIN // V1.0
          </div>
          <div className="absolute bottom-10 right-10 opacity-20 text-[9px] font-mono tracking-widest text-[var(--color-surface)]">
            {new Date().getFullYear()}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}