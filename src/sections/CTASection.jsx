import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function CTASection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  // Massive Image Movement
  const bottleY = useTransform(smoothProgress, [0, 1], [100, -100]); 
  const bottleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);
  
  // Text Movement
  const pureX = useTransform(smoothProgress, [0, 1], [-50, 50]);
  const zestX = useTransform(smoothProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[120vh] md:h-[160vh] bg-[var(--color-bg)] flex items-center justify-center overflow-hidden"
    >
      


      {/* --- BACKGROUND ARCHITECTURE (Empty space filler) --- */}
      <div className="absolute inset-0 flex justify-around px-20 opacity-[0.03] pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-black" />
        ))}
      </div>

      {/* 1. BACKGROUND TEXT (PURE) */}
      <motion.div 
        style={{ x: pureX, opacity: 0.08 }}
        className="absolute top-[20%] w-full flex justify-center z-0 select-none"
      >
        <h2 className="font-heading text-[25vw] font-extrabold text-[#0C0C0C] lowercase leading-none tracking-tighter">
          pure
        </h2>
      </motion.div>

      {/* 2. MASSIVE CENTER BOTTLE (D.PNG) */}
      <motion.div 
        style={{ y: bottleY, scale: bottleScale }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Postcard Container - Massive Size */}
        <div className="relative p-6 md:p-16 bg-white shadow-[0_120px_200px_-60px_rgba(0,0,0,0.15)] rounded-[40px] md:rounded-[80px] rotate-[-2deg]">
            <img 
              src="/images/d.png" 
              alt="Kin Bottle" 
              className="relative z-10 w-[240px] sm:w-[300px] md:w-[500px] lg:w-[650px] h-auto object-contain"
            />
            {/* Soft Shadow for Grounding */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[60%] h-5 bg-black/20 blur-3xl rounded-full scale-x-150 z-0" />
            

        </div>
      </motion.div>

      {/* 3. FOREGROUND CONTENT (ZEST & TAGLINE) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        
        <div className="mt-[60vh] md:mt-[75vh]">
          <motion.h2 
            style={{ x: zestX }}
            className="font-heading text-[16vw] lg:text-[280px] font-extrabold text-[#0C0C0C] lowercase tracking-tighter"
          >
            <span className="text-outline-dark italic">zest.</span>
          </motion.h2>
          
          <div className="mt-10 max-w-[900px] mx-auto">
              <p className="font-serif text-[24px] md:text-[45px] lg:text-[56px] text-[#0C0C0C]/90 leading-[1.1] italic">
                A mindful ritual for the <br /> 
                <span className="font-medium">modern</span> soul
              </p>
              
              {/* CTA Button */}
              <div className="mt-16 flex justify-center pointer-events-auto">
                  <Link to="/partner" className="inline-flex items-center gap-3 bg-[#0C0C0C] text-white px-10 py-5 rounded-full font-body text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-[#1F3D2B] transition-colors duration-500">
                      Request Samples
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
              </div>
              <div className="mt-8 flex justify-center items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                 <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-black/30">
                    Now onboarding partners in select cities — Limited pilot slots available
                 </span>
              </div>
          </div>
        </div>
      </div>

    </section>
  );
}