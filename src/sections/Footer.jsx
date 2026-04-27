export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F2F3EC] pt-20 pb-10 px-6 md:px-16 overflow-hidden" id="contact">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Space+Grotesk:wght@300;500;700&display=swap');
        .font-heading { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <div className="max-w-[1800px] mx-auto">
        
        {/* --- MAIN GRID: COMPRESSED & SLEEK --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-black/10 pt-12 pb-16">
          
          {/* Left Side: Impactful but smaller headline */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-[10vw] lg:text-[100px] leading-[0.8] tracking-[-0.06em] text-[#0C0C0C] lowercase">
              Kin. <br /> 
              <span className="opacity-10 italic">The New Ritual</span>
            </h2>
          </div>

          {/* Right Side: Links & Availability (Now more compact) */}
          <div className="lg:col-span-5 flex flex-col md:flex-row justify-between items-start gap-12 mt-12 lg:mt-0 font-body">
            
            {/* Nav Group */}
            <div className="flex flex-col gap-3">
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-black/20 mb-1">Navigation</p>
              <div className="flex flex-wrap lg:flex-col gap-x-8 gap-y-2">
                {['Instagram', 'Privacy', 'Contact', 'Lab'].map((item) => (
                  <a key={item} href="#" className="text-[16px] md:text-[18px] font-bold tracking-tight text-black hover:opacity-40 transition-opacity">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Status Group */}
            <div className="flex flex-col gap-3 lg:text-right items-start lg:items-end">
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-black/20 mb-1">Logistics</p>
              <p className="text-[13px] font-medium text-black uppercase tracking-widest leading-relaxed">
                Batch 01 // Delhi <br />
                Global Distribution
              </p>
            </div>
          </div>
        </div>

        {/* --- SIGNATURE BAR: NO EXTRA JUNK --- */}
        <div className="relative border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 font-body opacity-40">
          
          <div className="flex items-center gap-8 order-2 md:order-1">
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Est. 2026</span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">© All Rights Reserved</span>
          </div>

          {/* Dev Credit - Mid Anchor */}
          <div className="order-1 md:order-2 flex items-center gap-3">
             <span className="text-[9px] font-black uppercase tracking-[0.3em]">Dev:</span>
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black border-b border-black/20">Devansh Arya</span>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 order-3">
             <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
             <span className="text-[9px] font-black uppercase tracking-[0.4em]">System Synced</span>
          </div>
        </div>

      </div>

      {/* Very faint background detail to ground the layout */}
      <div className="absolute -bottom-10 -right-10 font-heading text-[25vw] text-black/[0.01] pointer-events-none select-none uppercase">
        Kin
      </div>
    </footer>
  );
}