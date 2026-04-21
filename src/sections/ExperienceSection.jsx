import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-36 px-6 md:py-48 overflow-hidden">
      {/* Radial glow bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(126,168,122,0.04)_0%,transparent_60%)] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500 font-medium">
          The Experience
        </p>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-none">
          Awaken your <br />
          <span className="font-semibold">higher self</span>.
        </h2>

        {/* Divider */}
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <p className="text-base md:text-lg text-stone-400 font-light max-w-md">
          A liquid symphony of mind and body.
        </p>
      </motion.div>
    </section>
  );
}
