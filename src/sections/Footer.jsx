'use client';
import React from 'react';
import { motion } from 'framer-motion';

const monoFont = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-[#050505] pt-32 pb-10 px-6 overflow-hidden border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Section: CTA & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          {/* Left: Big Headline */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-none"
            >
              CRAFTING THE <br /> 
              <span className="text-[#ccff00]">FUTURE</span> OF SODA.
            </motion.h3>
          </div>

          {/* Right: Links with Hover Animation */}
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-stone-500">
              {['Instagram', 'Privacy', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ color: '#ccff00', x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="hover:text-white transition-colors"
                  style={{ fontFamily: monoFont }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <p className="mt-12 md:mt-0 text-stone-600 text-[12px] uppercase tracking-widest max-w-[300px] md:text-right">
              Functional Soda for Modern Living. Purity is our standard. choice is yours.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION: HUGE LOGO REVEAL */}
        <div className="relative mt-20 border-t border-white/5 pt-10">
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <h1 className="text-[28vw] leading-none font-bold text-white tracking-[-0.08em] select-none">
              KIN
            </h1>
          </motion.div>
          
          {/* Copyright Info */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-[10px] uppercase tracking-[0.2em] text-stone-700">
            <p>© 2026 KIN Functional Beverages</p>
            <p style={{ fontFamily: monoFont }}>Built by Devansh Arya</p>
            <p>All rights reserved.</p>
          </div>
        </div>

      </div>

      {/* Background Decorative Element (Optional Lime Glow) */}
      <div className="absolute bottom-[-20%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-[#ccff00]/10 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}