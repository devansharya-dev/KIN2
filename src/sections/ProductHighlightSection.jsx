import { motion } from 'framer-motion';

export default function IngredientsSection() {
  return (
    <section className="relative bg-[#080808] text-white py-28 px-6 md:px-12 lg:py-40 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7ea87a]/30 to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="relative group"
        >
          <div className="overflow-hidden rounded-sm border border-white/5">
            <img
              src="/images/kin-pour.png"
              alt="KIN functional soda being poured"
              className="w-full h-auto object-cover brightness-90 contrast-105 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </div>
          {/* Glow behind image */}
          <div className="absolute -inset-6 bg-[#7ea87a]/5 blur-3xl rounded-full -z-10 opacity-40" />
        </motion.div>

        {/* Right — Editorial content */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col gap-5">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#7ea87a] font-semibold">
              What's Inside
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none">
              The Kin<br />
              <span className="font-extralight text-stone-400">Twist</span>
            </h2>
          </div>

          {/* Sage accent rule */}
          <div className="h-0.5 w-12 bg-[#7ea87a] rounded-full" />

          <p className="text-base md:text-lg text-stone-400 font-light leading-relaxed max-w-md">
            Every bottle of KIN is a deliberate composition — adaptogens, botanicals,
            and sparkling mineral water merged into a drink that honours craft
            and consciousness in equal measure.
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

          {/* Detail bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 pl-4 border-l border-white/10 hover:border-[#7ea87a]/50 transition-colors duration-400">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/80">
                Flavour
              </h4>
              <p className="text-sm text-stone-500 leading-relaxed font-light">
                Earthy shiitake depth meets bright ginger warmth, finished with
                a citrus-forward sparkle that lingers.
              </p>
            </div>

            <div className="flex flex-col gap-2 pl-4 border-l border-white/10 hover:border-[#7ea87a]/50 transition-colors duration-400">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/80">
                Versatility
              </h4>
              <p className="text-sm text-stone-500 leading-relaxed font-light">
                Enjoy straight from the bottle, over ice, or as the foundation of
                an elevated zero-proof cocktail.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}