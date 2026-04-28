import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const scrollWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    
    let rafId;
    const updateScroll = () => {
      const scrollY = window.scrollY;
      
      // Stop calculations if we've scrolled past the hero
      if (scrollY > window.innerHeight * 1.5) {
        rafId = requestAnimationFrame(updateScroll);
        return;
      }
      
      if (scrollWrapperRef.current) {
        const scale = Math.max(0.94, 1 - scrollY * 0.0003);
        scrollWrapperRef.current.style.transform = `translate3d(0, 0, 0) scale(${scale})`;
      }
      
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0, ${scrollY * -0.1}px, 0) scale(1.05)`;
      }

      if (overlayRef.current) {
        const opacity = Math.max(0, 1 - scrollY * 0.002);
        const yPos = scrollY * -0.6;
        overlayRef.current.style.opacity = opacity;
        overlayRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      rafId = requestAnimationFrame(updateScroll);
    };
    
    rafId = requestAnimationFrame(updateScroll);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[110vh] md:min-h-[140vh] w-full bg-[#f4f4f2] overflow-hidden font-body">
      

      
      <div 
        ref={scrollWrapperRef}
        className="fixed top-0 left-0 w-full h-[100dvh] p-4 md:p-6 z-0 origin-center transition-opacity duration-1000"
        style={{ opacity: loaded ? 1 : 0, willChange: 'transform' }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-[30px] md:rounded-[50px] bg-black shadow-2xl">
          
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <img 
              ref={imageRef}
              src="/images/g.jpeg" 
              alt="Hero Background" 
              className="w-full h-full object-cover object-right md:object-center brightness-[0.75] contrast-[1.1]"
              style={{ willChange: 'transform' }}
            />
            {/* Subtle Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* CONTENT OVERLAY */}
          <div ref={overlayRef} className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6" style={{ willChange: 'transform, opacity' }}>
            
            <div className="flex flex-col items-center text-center">
              {/* Minimal Top Label */}
              <span className="text-[9px] tracking-[1.5em] uppercase opacity-40 mb-6 font-light">
                Functional Mushroom Syrup
              </span>

              {/* Distilled Logo */}
              <div className="relative">
                <h1 className="font-heading text-[22vw] md:text-[180px] tracking-[-0.08em] flex items-center drop-shadow-xl">
                  KIN<span className="text-[0.35em] font-serif italic lowercase opacity-30 tracking-tight ml-2">ship.</span>
                </h1>
              </div>

              {/* Primary Tagline */}
              <p className="mt-8 font-serif italic text-[18px] md:text-[22px] opacity-70 tracking-wide drop-shadow-md">
                "All bliss, no booze."
              </p>

              {/* Hero CTA */}
              <Link 
                to="/partner" 
                className="mt-10 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-body text-[11px] md:text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-white/20 transition-all duration-500"
              >
                Request a Free Sample
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>

            {/* BOTTOM INFO */}
            <div className="absolute bottom-8 md:bottom-20 w-full flex justify-center px-6">
               <div className="flex flex-col items-center gap-4 max-w-[320px] text-center">
                  <div className="w-8 h-px bg-white/30" />
                  <p className="text-[11px] md:text-[13px] leading-[1.6] text-white/60 font-body uppercase tracking-[0.3em] font-light">
                    Crafted for bars, lounges <br/> & modern hospitality.
                  </p>
               </div>


            </div>

          </div>
        </div>
      </div>

      <div className="h-[110vh] md:h-[140vh] pointer-events-none" />
    </section>
  );
}