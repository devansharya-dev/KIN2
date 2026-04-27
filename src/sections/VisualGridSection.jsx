import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    title: "Botanical",
    subtitle: "Pure Extracts",
    image: "/images/image1.jpg",
  },
  {
    id: 2,
    title: "Balance",
    subtitle: "Adaptogenic",
    image: "/images/image2.jpg",
  },
  {
    id: 3,
    title: "Clarity",
    subtitle: "Mindful Energy",
    image: "/images/image3.jpg",
  }
];

export default function VisualGridSection() {
  return (
    <section className="bg-[var(--color-bg)] py-32 px-6 md:px-12 w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-[var(--color-text)] text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6">
            The Elements
          </h2>
          <div className="w-12 h-0.5 bg-[var(--color-secondary)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Image Background */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-[var(--color-primary)]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end">
                <span className="text-[var(--color-secondary)] text-[10px] uppercase tracking-[0.3em] font-semibold mb-3 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {card.subtitle}
                </span>
                <h3 className="text-[var(--color-surface)] text-3xl md:text-4xl font-bold uppercase tracking-tight">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
