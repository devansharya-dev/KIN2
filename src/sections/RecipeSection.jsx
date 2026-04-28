const recipes = [
  {
    id: '01',
    name: 'KIN Spritz',
    desc: 'KIN Syrup, sparkling water, fresh lemon wheel. Light, bubbly, and refreshing.',
    mood: 'Bright & Citrusy',
    image: '/images/recipes/spritz.png'
  },
  {
    id: '02',
    name: 'KIN Tonic',
    desc: 'KIN Syrup, premium tonic water, thin ginger slice. Crisp with a botanical edge.',
    mood: 'Crisp & Botanical',
    image: '/images/recipes/tonic.png'
  },
  {
    id: '03',
    name: 'KIN Mule',
    desc: 'KIN Syrup, ginger beer, fresh lime wedge. Bold, spicy, and deeply satisfying.',
    mood: 'Bold & Spicy',
    image: '/images/recipes/mule.png'
  },
  {
    id: '04',
    name: 'KIN Highball',
    desc: 'KIN Syrup, club soda, orange peel twist. Clean, tall, and effortlessly smooth.',
    mood: 'Clean & Smooth',
    image: '/images/recipes/highball.png'
  },
];

import { Link } from 'react-router-dom';

export default function RecipeSection() {
  return (
    <section className="w-full bg-[var(--color-bg)] py-16 md:py-40 px-6 md:px-12 lg:px-20 font-body overflow-x-hidden">

      {/* --- HEADER --- */}
      <div className="max-w-[1800px] mx-auto mb-10 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="border-l-[1px] border-black/10 pl-6 md:pl-8">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] text-black/30 block mb-6">Menu Ideas</span>
          <h2 className="text-[10vw] md:text-[8vw] lg:text-[120px] font-extrabold tracking-[-0.07em] text-[#0C0C0C] lowercase font-heading">
            Serve KIN <br/> 
            <span className="text-outline-dark">Your Way.</span>
          </h2>
        </div>
        <div className="max-w-[300px] mb-4">
            <p className="text-[12px] md:text-[13px] leading-relaxed text-black/40 uppercase tracking-widest font-medium">
                Ready-to-serve recipes your bar team can pour in under 30 seconds.
            </p>
        </div>
      </div>

      {/* --- RECIPE GRID --- */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {recipes.map((item) => (
          <div key={item.id} className="group flex flex-col bg-[var(--color-surface)] rounded-[24px] md:rounded-[32px] transition-all duration-500 hover:shadow-xl">
            
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] md:aspect-[4/3] bg-[#E0E2D8] overflow-hidden rounded-t-[24px] md:rounded-t-[32px]">
              <img 
                src={item.image} 
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="p-4 md:p-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[8px] md:text-[9px] font-bold text-black/20 uppercase tracking-[0.4em]">{item.id}</span>
                <span className="text-[7px] md:text-[9px] font-bold text-[var(--color-primary)]/50 uppercase tracking-[0.3em] hidden md:block">{item.mood}</span>
              </div>
              
              <h3 className="text-[20px] md:text-[34px] font-extrabold tracking-[-0.04em] text-[#0C0C0C] font-heading lowercase mb-2 md:mb-4">
                {item.name}
              </h3>

              <p className="text-[12px] md:text-[15px] leading-[1.5] text-black/50 font-medium flex-grow">
                {item.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/30" />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/25">1:3 Dilution</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recipe Section CTA */}
      <div className="mt-16 md:mt-24 flex flex-col items-center text-center">
        <p className="text-[14px] md:text-[18px] font-serif italic text-black/40 mb-8 max-w-[500px]">
          Want the complete KIN mixology guide for your bar team?
        </p>
        <Link 
          to="/partner" 
          className="inline-flex items-center gap-3 border-2 border-black text-black px-8 py-4 rounded-full font-body text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500"
        >
          Get the Full Recipe Guide + Samples
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>

    </section>
  );
}
