// src/components/sections/IngredientsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const img1 = "/images/image1.jpg"; 
const img2 = "/images/image2.jpg"; 
const img3 = "/images/image3.jpg";

const interFont = '"Inter", "Inter Placeholder", sans-serif';

const IngredientCard = ({ title, image, desc, span, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: delay }}
    viewport={{ once: true }}
    className={`relative h-[65vh] md:h-[80vh] overflow-hidden group cursor-pointer rounded-[40px] md:rounded-[60px] border border-white/5 ${span}`}
  >
    <img 
      src={image} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" 
      alt={title} 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-90" />

    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
      <div className="space-y-3 md:space-y-4">
        <h3 className="text-4xl md:text-7xl uppercase tracking-tighter text-white leading-none font-semibold" style={{ fontFamily: interFont }}>
          {title}
        </h3>
        <div className="w-12 md:w-16 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-all duration-700" />
        <p className="max-w-sm text-[11px] md:text-[14px] uppercase tracking-[0.15em] text-white/40 leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
          {desc}
        </p>
      </div>
    </div>
  </motion.div>
);

const IngredientsSection = () => {
  return (
    <section id="ingredients" className="bg-[#050505] py-24 md:py-40 px-6 md:px-16 overflow-hidden text-white">
      <div className="max-w-[1900px] mx-auto">
        
        {/* HEADER SECTION - Slide-up Animation like WaysToMix */}
        <div className="mb-24 md:mb-48 border-b border-white/5 pb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="text-white text-[10px] md:text-[11px] tracking-[0.8em] uppercase font-bold block mb-10 md:mb-12"
          >
            / Molecular Composition
          </motion.span>
          
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="uppercase text-white text-[15vw] md:text-[11vw]" 
              style={{ 
                fontFamily: interFont,
                fontWeight: 600,
                lineHeight: '1',
                letterSpacing: '-0.07em',
              }}
            >
              Pure
            </motion.h2>
          </div>

          <div className="overflow-hidden mt-[-10px] md:mt-[-35px]">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="uppercase text-white text-[15vw] md:text-[11vw]" 
              style={{ 
                fontFamily: interFont,
                fontWeight: 600,
                lineHeight: '1',
                letterSpacing: '-0.07em',
              }}
            >
              Botanicals.
            </motion.h2>
          </div>

          <div className="mt-12 flex justify-start md:justify-end">
             <motion.p 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 0.3, x: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="max-w-[320px] text-[10px] md:text-[12px] uppercase tracking-[0.25em] text-white leading-[2.2] text-left md:text-right"
             >
              Every element is a conscious choice. We prioritize bio-availability and sensory impact.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid Layout - Mobile Optimized Gap */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4">
          <IngredientCard 
            span="md:col-span-7"
            title="Shiitake"
            image={img1}
            delay={0.1}
            desc="The foundation of clarity. Double-distilled for maximum potency and focus."
          />
          <IngredientCard 
            span="md:col-span-5"
            title="Rosemary"
            image={img2}
            delay={0.3}
            desc="Sourced from high-altitude gardens for an intense aromatic profile."
          />
          <IngredientCard 
            span="md:col-span-12"
            title="Fermentation"
            image={img3}
            delay={0.2}
            desc="A precision-controlled cycle for natural effervescence and metabolic complexity."
          />
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;