import { motion } from 'framer-motion';

export default function TrustBar() {
  const logos = [
    "The Social", "Blue Tokai", "Third Wave", "Ministry of Beer", "Olive Bar & Kitchen"
  ];

  return (
    <section className="w-full bg-[var(--color-bg)] py-12 md:py-20 border-y border-black/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-10 md:mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-black/30 mb-4 block">Trusted By</span>
          <p className="text-[14px] md:text-[18px] font-serif italic text-black/60 max-w-[600px]">
            Powering the next generation of non-alcoholic beverage programs across premium lounges & boutique cafés.
          </p>
        </motion.div>

        {/* Logo Scroller (Infinite-like feel) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="relative w-full overflow-hidden whitespace-nowrap py-4"
        >
          <div className="inline-flex gap-16 md:gap-32 animate-marquee-slower items-center opacity-20 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
            {/* Doubled for seamless loop */}
            {[...logos, ...logos].map((logo, idx) => (
              <span 
                key={idx} 
                className="font-heading text-[24px] md:text-[36px] font-bold tracking-tighter text-black lowercase"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications / Quick Points */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-black/5">
          {[
            "Small Batch Crafted", "100% Natural", "Functional Botanicals", "Quality Controlled"
          ].map((text, idx) => (
            <motion.div 
              key={text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="flex flex-col items-center text-center gap-3"
            >
               <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
               </div>
               <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">{text}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
