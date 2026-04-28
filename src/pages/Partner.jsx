import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../sections/FAQSection';

export default function Partner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[#0C0C0C] font-body">

      {/* --- NAVBAR (Simplified) --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-20 h-[90px] bg-[var(--color-bg)] border-b border-black/5">
        <Link to="/" className="font-heading text-[22px] md:text-[28px] font-extrabold tracking-[-0.04em]">
          KIN
        </Link>
        <Link 
          to="/" 
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* --- HERO --- */}
      <section className="pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-6 md:px-20 max-w-[1200px] mx-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/30 block mb-6">Partnership Inquiry</span>
        <h1 className="font-heading text-[10vw] md:text-[80px] lg:text-[100px] font-extrabold tracking-[-0.06em] lowercase mb-8">
          Let's work<br />
          <span className="text-outline-dark">together.</span>
        </h1>
        <p className="max-w-[600px] text-[16px] md:text-[20px] leading-[1.6] text-black/50 font-medium">
          KIN is a functional botanical elixir designed for high-volume bar service. 
          We partner with venues to bring mindful, versatile drink options to their menus.
        </p>
      </section>

      {/* --- WHY PARTNER --- */}
      <section className="py-16 md:py-24 px-6 md:px-20 max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[28px] md:text-[48px] font-extrabold tracking-[-0.04em] leading-none lowercase mb-12">
          Why partner with KIN
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { stat: '4x', label: 'Yield', desc: 'Servings per bottle vs. ready-to-drink alternatives' },
            { stat: '65%', label: 'Savings', desc: 'Cheaper per serve with higher margins' },
            { stat: '75%', label: 'Less Storage', desc: 'Concentrated syrup takes less fridge space' },
            { stat: '1:3', label: 'Ratio', desc: 'Recommended dilution, fully customizable to your venue\'s taste' },
          ].map((item) => (
            <div key={item.label} className="bg-[var(--color-surface)] rounded-[20px] p-6 md:p-8 flex flex-col">
              <span className="text-[36px] md:text-[56px] font-semibold tracking-tighter leading-none text-[var(--color-primary)]">{item.stat}</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/30 mt-3 mb-2">{item.label}</span>
              <p className="text-[12px] md:text-[14px] text-black/40 font-medium leading-tight mt-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT FORM AREA --- */}
      <section className="py-16 md:py-24 px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: CTA */}
          <div>
            <h2 className="font-heading text-[28px] md:text-[48px] font-extrabold tracking-[-0.04em] leading-none lowercase mb-6">
              Get in touch
            </h2>
            <p className="text-[15px] md:text-[18px] leading-[1.6] text-black/50 font-medium mb-10 max-w-[500px]">
              Interested in stocking KIN at your establishment? Reach out to us directly — 
              we'd love to send you samples and walk you through the product.
            </p>

            <div className="flex flex-col gap-5">
              {/* Email CTA */}
              <a 
                href="mailto:kin.beverages@gmail.com?subject=Partnership%20Inquiry%20-%20KIN%20Syrup&body=Hi%20KIN%20Team%2C%0A%0AI'm%20interested%20in%20partnering%20with%20KIN%20for%20my%20establishment.%0A%0AEstablishment%20Name%3A%0ALocation%3A%0AType%20(Bar%2FCafe%2FLounge%2FRestaurant)%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you!" 
                className="inline-flex items-center gap-3 bg-[#0C0C0C] text-white px-8 py-5 rounded-full font-body text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-[#1F3D2B] transition-colors duration-500 w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Us
              </a>

              {/* WhatsApp CTA */}
              <a 
                href="https://wa.me/919412047564?text=Hi%20KIN%20Team!%20I'm%20interested%20in%20partnering%20with%20KIN%20for%20my%20establishment.%20Could%20you%20share%20more%20details%20and%20sample%20availability?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-[#0C0C0C] text-[#0C0C0C] px-8 py-5 rounded-full font-body text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-[#0C0C0C] hover:text-white transition-all duration-500 w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>

              {/* Phone */}
              <a 
                href="tel:+919412047564" 
                className="inline-flex items-center gap-3 text-[14px] font-bold tracking-tight text-black/40 hover:text-black transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 9412 04 7564
              </a>
            </div>
          </div>

          {/* Right: What to Expect */}
          <div className="bg-[var(--color-surface)] rounded-[24px] p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-black/30 mb-8">What to Expect</h3>
            <div className="flex flex-col gap-6">
              {[
                { step: '01', text: 'We send you free samples to try with your team' },
                { step: '02', text: 'We help you design KIN-based drinks for your menu' },
                { step: '03', text: 'You receive training materials for your bar staff' },
                { step: '04', text: 'Ongoing support and flexible restocking options' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="text-[24px] md:text-[32px] font-semibold tracking-tighter text-[var(--color-primary)]/20 leading-none shrink-0">{item.step}</span>
                  <p className="text-[14px] md:text-[16px] text-black/60 font-medium leading-snug pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- FAQ --- */}
      <FAQSection />

      {/* --- FOUNDER'S NOTE --- */}
      <section className="py-24 px-6 md:px-20 max-w-[800px] mx-auto text-center border-t border-black/5">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/30 mb-10 block">A Note from the Founders</h3>
        <p className="font-serif text-[20px] md:text-[28px] leading-[1.6] text-black/70 italic">
          "We created KIN because we wanted a drink that respected our mornings as much as our nights. 
          Small-batch, functional, and 100% natural — it's the beverage we couldn't find in the market, 
          so we built it ourselves. We're excited to share this ritual with your venue."
        </p>
        <div className="mt-12 flex flex-col items-center">
           <span className="font-heading text-[24px] font-bold lowercase tracking-tighter opacity-20">Kin Beverages</span>
           <div className="w-12 h-[1px] bg-black/10 mt-4" />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 px-6 md:px-20 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link to="/" className="font-heading text-[18px] font-extrabold tracking-[-0.04em]">KIN</Link>
          <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-20">© 2026 KIN Beverages</span>
        </div>
      </footer>

    </div>
  );
}
