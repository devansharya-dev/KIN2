import React from 'react';
import { motion } from 'framer-motion';

const MixItem = ({ title, desc, image, reverse }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 mb-32 last:mb-0`}
  >
    <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl relative group">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-transparent transition-colors duration-500" />
    </div>

    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h3 className="text-[var(--color-text)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
        {title}
      </h3>
      <div className="w-10 h-0.5 bg-[var(--color-secondary)] mb-8" />
      <p className="text-[var(--color-text-muted)] text-base md:text-lg font-light leading-relaxed max-w-md">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default function WaysToMix() {
  return (
    <section className="bg-[var(--color-bg)] py-32 px-6 md:px-12 w-full border-t border-[var(--color-primary)]/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-24 text-center">
          <span className="text-[var(--color-secondary)] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">
            Lifestyle
          </span>
          <h2 className="text-[var(--color-text)] text-4xl md:text-6xl font-bold uppercase tracking-wide">
            Ways To Mix
          </h2>
        </div>

        <div className="flex flex-col">
          <MixItem 
            title="The Alchemist"
            desc="One part Kin essence poured over large ice, topped with sparkling mineral water and expressed lemon peel. A clean socialite."
            image="/images/kin-pour.png"
            reverse={false}
          />
          
          <MixItem 
            title="Botanical Lift"
            desc="A heavy botanical foundation meeting a crisp, bitter finish. Mix with your favorite chilled lager for an elevated afternoon."
            image="/images/image2.jpg"
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}