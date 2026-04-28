import { Link } from 'react-router-dom';

const ingredients = [
  {
    id: "01",
    name: 'Shiitake',
    tag: 'Cognitive Support',
    desc: 'Supports cognitive function and helps maintain mental clarity throughout the day.',
    image: '/images/shiitake.png',
  },
  {
    id: "02",
    name: 'Lemon',
    tag: 'Zest & Vitality',
    desc: 'Natural electrolytes and vitamin C to brighten the palate and awaken the senses.',
    image: '/images/f.png',
  },
  {
    id: "03",
    name: 'Ginger',
    tag: 'Digestive Warmth',
    desc: 'A warming botanical spice that aids digestion and provides a grounding, natural energy lift.',
    image: '/images/image2.jpg',
  }
];

export default function IngredientsSection() {
  return (
    <section className="w-full bg-[var(--color-bg)] py-16 md:py-48 px-6 md:px-12 lg:px-20 font-body overflow-x-hidden">
      


      {/* --- HEADER --- */}
      <div className="max-w-[1800px] mx-auto mb-12 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="border-l-[1px] border-black/10 pl-6 md:pl-8">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] text-black/30 block mb-6">What's Inside</span>
          <h2 className="text-[10vw] md:text-[8vw] lg:text-[120px] font-extrabold tracking-[-0.07em] text-[#0C0C0C] lowercase font-heading">
            Our <br/> 
            <span className="text-outline-dark">Ingredients.</span>
          </h2>
        </div>
        <div className="max-w-[300px] mb-4">
            <p className="text-[12px] md:text-[13px] leading-relaxed text-black/40 uppercase tracking-widest font-medium">
                Three powerful botanicals, carefully blended for focus and vitality.
            </p>
        </div>
      </div>

      {/* --- GRID: CLEAN SPEC CARDS --- */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24">
        {ingredients.map((item, idx) => (
          <div key={item.id} className={`flex flex-col ${idx === 1 ? 'lg:mt-32' : ''}`}>
            
            {/* 1. IMAGE POSTCARD (Subtle Scale Only) */}
            <div className="group relative w-full aspect-[4/5] overflow-hidden rounded-[24px] md:rounded-[32px] bg-[#EBECE4]">


              {/* Main Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                loading="lazy"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />


            </div>

            {/* 2. SPEC-SHEET TYPOGRAPHY (Now Stable/No-Hover) */}
            <div className="mt-10 px-2">
              <div className="flex items-start justify-between mb-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.4em] mb-2 font-body">{item.id}</span>
                  <h3 className="text-[42px] lg:text-[74px] font-extrabold tracking-[-0.06em] text-[#0C0C0C] font-heading lowercase">
                    {item.name}
                  </h3>
                </div>
                <div className="text-2xl font-light text-black/10">+</div>
              </div>
              
              <div className="relative pt-8 border-t border-black/[0.06]">
                  <p className="text-[15px] md:text-[17px] leading-[1.6] text-black/60 font-medium max-w-[90%] font-body">
                    <span className="text-black/90 font-bold uppercase text-[9px] tracking-widest block mb-3">About —</span>
                    {item.desc}
                  </p>
                  {/* Subtle Accent Line */}
                  <div className="absolute top-0 left-0 w-12 h-[2px] bg-black/10" />
              </div>


            </div>
          </div>
        ))}
      </div>
      
      {/* Ingredient Section CTA */}
      <div className="mt-20 flex justify-center">
        <Link 
          to="/partner" 
          className="group flex items-center gap-4 text-[14px] md:text-[16px] font-serif italic text-black/40 hover:text-black transition-colors duration-500"
        >
          Curious about the taste?
          <span className="not-italic font-body text-[11px] font-bold uppercase tracking-[0.3em] border-b border-black/10 group-hover:border-black transition-all">
             Request a sample →
          </span>
        </Link>
      </div>

    </section>
  );
}