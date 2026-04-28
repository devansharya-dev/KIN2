export default function BrochureSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 md:py-32 px-6 md:px-12 lg:px-20 font-body overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* Left: Content */}
        <div className="flex-1">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] text-white/30 block mb-6">Free Download</span>
          <h2 className="font-heading text-[32px] md:text-[56px] lg:text-[72px] font-extrabold tracking-[-0.06em] text-white lowercase leading-[1.1] mb-6">
            The KIN<br />
            <span className="opacity-30">Partner Brochure.</span>
          </h2>
          <p className="text-[14px] md:text-[18px] leading-[1.7] text-white/40 font-medium max-w-[500px] mb-10">
            Everything your team needs to evaluate KIN — pricing tiers, serving suggestions, 
            ROI projections, and the full ingredient story. One PDF, zero fluff.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a 
              href="/brochure/KIN-Partner-Brochure.pdf"
              download
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-body text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[var(--color-secondary)] transition-colors duration-500"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download Brochure
            </a>
            <span className="text-[11px] text-white/20 uppercase tracking-[0.2em] font-bold mt-2 sm:mt-3">PDF • Free • No Sign-up</span>
          </div>
        </div>

        {/* Right: Visual Accent */}
        <div className="flex-shrink-0 relative">
          <div className="w-[220px] md:w-[300px] h-[300px] md:h-[400px] bg-white/[0.03] rounded-[32px] border border-white/[0.06] flex flex-col items-center justify-center p-8 md:p-12">
            {/* PDF Icon */}
            <div className="w-16 h-20 md:w-20 md:h-24 bg-white/[0.06] rounded-lg border border-white/10 flex items-center justify-center mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">PDF</span>
            </div>
            <p className="text-[11px] md:text-[12px] font-bold text-white/20 uppercase tracking-[0.3em] text-center">KIN Partner<br />Brochure</p>
            <div className="mt-6 w-12 h-[1px] bg-white/10" />
            <p className="mt-4 text-[10px] text-white/15 uppercase tracking-[0.2em]">2026 Edition</p>
          </div>
          {/* Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[var(--color-primary)]/20 blur-3xl rounded-full" />
        </div>

      </div>
    </section>
  );
}
