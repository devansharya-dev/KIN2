import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  
  const scrollWrapperRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    
    let rafId;
    const updateScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollWrapperRef.current) {
        const scale = Math.max(0.92, 1 - scrollY * 0.0004);
        const scrollOpacity = Math.max(0, 1 - scrollY * 0.0015);
        scrollWrapperRef.current.style.transform = `scale(${scale})`;
        scrollWrapperRef.current.style.opacity = scrollOpacity;
      }
      
      if (videoRef.current) {
        const videoParallax = scrollY * 0.4;
        videoRef.current.style.transform = `translateY(${videoParallax}px) scale(1.1)`;
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
    <section id="hero" className="relative min-h-[120vh] w-full bg-[var(--color-bg)] overflow-hidden">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
        
        .font-heading { 
          font-family: 'Syne', sans-serif;
          letter-spacing: -0.06em;
        }
        .font-body { 
          font-family: 'Inter', sans-serif; 
        }
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }
      `}</style>
      
      {/* LOAD ANIMATION WRAPPER */}
      <div 
        className="fixed top-0 left-0 w-full h-[100dvh] p-4 md:p-8 flex flex-col z-10"
        style={{
          transform: `translateY(${loaded ? '0%' : '30px'})`,
          opacity: loaded ? 1 : 0,
          transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease-out'
        }}
      >
        {/* SCROLL ANIMATION WRAPPER (Instantly responds to scroll, no transition lag) */}
        <div 
          ref={scrollWrapperRef}
          className="w-full h-full"
          style={{
            transformOrigin: 'center bottom',
            willChange: 'transform, opacity'
          }}
        >
          {/* ROUNDED VIDEO CONTAINER */}
          <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-[40px] md:rounded-[80px] bg-[#1a1a1a] shadow-2xl">
          
          {/* VIDEO LAYER */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video 
              ref={videoRef}
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover scale-110 brightness-[0.5] contrast-[1.1]"
              style={{ willChange: 'transform' }}
            >
              <source src="video/KIN_Soda_Pour_202604181424.mp4" type="video/mp4" />
            </video>
            {/* Vignette Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          </div>

          {/* CONTENT LAYER */}
          <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-20 text-white">
            
            {/* Minimal Top Header */}
            <div className="flex justify-between items-center font-body text-[10px] tracking-[0.5em] uppercase font-semibold opacity-80">
              <span>Nectar of Focus</span>
              <div className="w-12 h-[1px] bg-white/30 hidden md:block" />
              <span>Series 2026</span>
            </div>

            {/* MAIN LOGO - Ultra Stylish Typography */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                {/* ULTRA PREMIUM EDITORIAL LOGO */}
<div className="flex flex-col items-center text-center group cursor-default">
  <div className="relative flex items-center justify-center">
    
    {/* Background Decorative Letter (Watermark style) */}
    <span className="absolute font-heading text-[35vw] md:text-[320px] text-white/[0.03] select-none">
      K
    </span>

    <h1 className="relative flex items-center font-heading text-[26vw] md:text-[220px] leading-none uppercase tracking-tighter">
      {/* Letter K */}
      <span className="transition-transform duration-1000 group-hover:-translate-x-4">K</span>
      
      {/* The "Premium" I - Thin, Elegant, and Distinct */}
      <span className="relative inline-block mx-2 md:mx-4">
         <span className="block w-[2px] md:w-[3px] h-[0.7em] bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></span>
         {/* Dot on top for elegance */}
         <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full border border-white/40"></span>
      </span>
      
      {/* Letter N */}
      <span className="transition-transform duration-1000 group-hover:translate-x-4">N</span>
    </h1>

    {/* Elegant Overlay Text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <p className="font-body text-[10px] md:text-[14px] tracking-[1.5em] md:tracking-[2.5em] uppercase text-white/40 whitespace-nowrap ml-[1.25em]">
          Essential
        </p>
    </div>
  </div>

  {/* Sub-branding */}
  <div className="mt-8 flex items-center gap-4 opacity-60">
    <div className="h-[1px] w-8 bg-white/30"></div>
    <p className="font-body text-[12px] md:text-[16px] tracking-[0.4em] uppercase font-light">
      Botanical Alchemy
    </p>
    <div className="h-[1px] w-8 bg-white/30"></div>
  </div>
</div>
                {/* Stylish Subtitle over the logo */}
                <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-body italic text-[14px] md:text-[20px] tracking-widest text-[var(--color-bg)] opacity-90 w-full">
                  The New Ritual
                </p>
              </div>
            </div>

            {/* BOTTOM INFO - Metadata hatakar stylish branding rakhi hai */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end w-full font-body">
              
              <div className="max-w-md">
                <h3 className="text-[18px] md:text-[24px] font-light leading-[1.2] opacity-90">
                   Mindful botanicals crafted for <br /> 
                   <span className="italic font-normal text-[var(--color-bg)]">high-frequency living.</span>
                </h3>
              </div>

              <div className="flex flex-col items-start md:items-end space-y-4">
                <div className="text-left md:text-right">
                  <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-2">Philosophy</p>
                  <p className="text-[12px] md:text-[14px] font-medium tracking-tight uppercase max-w-[200px]">
                    Energy without the crash. Focus without the noise.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Scrolling Space */}
      <div className="h-[120vh] pointer-events-none" />
    </section>
  );
}