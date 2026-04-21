'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const img_L = "/images/image1.jpg"; 
const img_R = "/images/image2.jpg"; 

export default function SplitGateWidget() {
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Split Logic
  const desktopLeftX = useTransform(smoothProgress, [0, 0.7], ["0%", "-100%"]);
  const desktopRightX = useTransform(smoothProgress, [0, 0.7], ["0%", "100%"]);
  
  // Mobile Diagonal Logic
  const mobileLeftX = useTransform(smoothProgress, [0, 0.8], ["0%", "-120%"]);
  const mobileLeftY = useTransform(smoothProgress, [0, 0.8], ["0%", "-120%"]);
  const mobileRightX = useTransform(smoothProgress, [0, 0.8], ["0%", "120%"]);
  const mobileRightY = useTransform(smoothProgress, [0, 0.8], ["0%", "120%"]);
  const gateScale = useTransform(smoothProgress, [0, 0.5], [1, 0.5]);
  
  // Text Reveal
  const textY = useTransform(smoothProgress, [0.3, 0.9], [80, 0]);
  const textOpacity = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);

  return (
    <>
      <div id="shop"
        ref={scrollContainerRef}
        data-lenis-prevent="true"
        className="relative w-screen h-screen bg-[#020202] overflow-y-scroll overflow-x-hidden no-scrollbar"
      >
        <div className="h-[300vh] w-full relative">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            
            {/* --- REVEALED CONTENT --- */}
            <motion.div 
              style={{ y: textY, opacity: textOpacity }}
              className="relative z-10 flex flex-col items-center text-center px-6"
            >
              <h1 className="font-main text-[16vw] md:text-[11vw] leading-[0.8] font-bold text-white uppercase mb-6">
                PURE <br /> 
                INTENT
              </h1>

              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-[#ccff00]"></div>
                <p className="font-main text-[#ccff00] text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-light">
                  The New Standard
                </p>
                <div className="h-[1px] w-12 bg-[#ccff00]"></div>
              </div>

              <p className="font-main text-stone-400 text-[14px] md:text-[18px] max-w-lg leading-relaxed mb-12 font-light">
                Stripping away the noise to reveal what matters. <br />
                Functional aesthetics for the modern era.
              </p>

              <button className="font-main bg-white text-black text-[11px] font-bold uppercase tracking-[0.4em] px-14 py-6 hover:bg-[#ccff00] transition-all duration-500">
                Enter the Void
              </button>
            </motion.div>

            {/* --- GATES (ORIGINAL COLORS) --- */}
            <motion.div
              style={{ 
                x: isMobile ? mobileLeftX : desktopLeftX, 
                y: isMobile ? mobileLeftY : 0,
                scale: isMobile ? gateScale : 1
              }}
              className="absolute left-0 top-0 w-1/2 h-full z-20 will-change-transform"
            >
              <img 
                src={img_L} 
                className="w-full h-full object-cover border-r border-white/10" 
                alt="L" 
              />
            </motion.div>

            <motion.div
              style={{ 
                x: isMobile ? mobileRightX : desktopRightX, 
                y: isMobile ? mobileRightY : 0,
                scale: isMobile ? gateScale : 1
              }}
              className="absolute right-0 top-0 w-1/2 h-full z-20 will-change-transform"
            >
              <img 
                src={img_R} 
                className="w-full h-full object-cover" 
                alt="R" 
              />
            </motion.div>
            
          </div>
        </div>
      </div>
    </>
  );
}