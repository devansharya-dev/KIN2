import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section id="story" className="relative w-full bg-[#050505] text-white/90 py-12 md:py-28 px-6 md:px-12 lg:py-40">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500 font-medium">
          The Philosophy
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extralight tracking-tight leading-[1.05]">
          A new era of <br />
          <span className="font-semibold text-white">functional soda</span>.
        </h2>

        <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <p className="text-base md:text-lg text-stone-400 font-light leading-relaxed max-w-lg">
          Crafted with intention. Designed for the modern palate. Kin harmonizes
          nature's finest botanicals into a sophisticated, mindful drinking
          experience that transcends the ordinary.
        </p>
      </motion.div>
    </section>
  );
}
