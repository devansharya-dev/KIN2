// src/sections/WaysToMix.jsx
import React from 'react';
import { motion } from 'framer-motion';

const img1 = "/images/image1.jpg"; 
const img2 = "/images/image2.jpg"; 
const img3 = "/images/image3.jpg";
const kinPour = "/images/kin-pour.png"; 

const interFont = '"Inter", "Inter Placeholder", sans-serif';

const MixCard = ({ title, sub, imgA, imgB, desc, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
    viewport={{ once: true }}
    className={`relative w-full flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-10 md:gap-32 mb-32 md:mb-64 group`}
  >
    {/* 1. THE IMAGE BLOCK - Responsive Squircle */}
    <div className="relative w-full md:w-[45%] aspect-[4/5] overflow-hidden bg-stone-900 shadow-2xl rounded-[60px] sm:rounded-[80px] md:rounded-[120px] lg:rounded-[150px]">
      <img 
        src={imgA} 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105 group-hover:opacity-0" 
        alt={title}
      />
      <img 
        src={imgB} 
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000" 
        alt={`${title} mix`}
      />
    </div>

    {/* 2. THE CONTENT BLOCK - Mobile Centered / Desktop Left */}
    <div className="w-full md:w-[45%] flex flex-col items-start text-left mt-8 md:mt-0 px-4 md:px-0">
      <div className="space-y-3 mb-6 md:mb-10">
        <span className="text-[9px] md:text-[10px] tracking-[0.6em] uppercase text-white/30 block font-medium font-sans">
          {sub}
        </span>
        <h3 
          className="uppercase text-white leading-[0.85] tracking-[-0.05em] text-5xl sm:text-6xl md:text-[6.5vw]" 
          style={{ fontFamily: interFont, fontWeight: 600 }}
        >
          {title}
        </h3>
      </div>
      
      <div className="w-16 md:w-20 h-px bg-white/20 mb-8 md:mb-10" />
      
      <p className="text-white/40 font-medium text-[11px] md:text-[13px] uppercase tracking-[0.2em] leading-[2.4] md:leading-[2.6]">
        {desc}
      </p>

      {/* Interaction */}
      <motion.div 
        whileHover={{ x: 10 }}
        className="mt-10 md:mt-12 flex items-center gap-6 cursor-pointer text-white/20 hover:text-white transition-colors duration-500 group"
      >
        <span className="font-medium text-[9px] uppercase tracking-[0.4em]">Explore Ritual</span>
        <div className="h-px w-8 bg-current opacity-30 group-hover:w-16 transition-all duration-700" />
      </motion.div>
    </div>
  </motion.div>
);

const WaysToMix = () => {
  return (
    <section className="bg-[#050505] py-24 md:py-40 px-6 md:px-24 overflow-hidden text-white">
      <div className="max-w-[1700px] mx-auto">
        
        {/* HEADER SECTION - Optimized for Mobile Viewport */}
        <div className="mb-24 md:mb-48 border-b border-white/5 pb-10 md:pb-16">
          <div className="overflow-hidden py-1">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="uppercase text-white text-[15vw] sm:text-[12vw] md:text-[11vw]" 
              style={{ 
                fontFamily: interFont,
                fontWeight: 600,
                lineHeight: '1',
                letterSpacing: '-0.07em',
              }}
            >
              Ways
            </motion.h2>
          </div>
          <div className="overflow-hidden mt-[-10px] md:mt-[-30px] py-1">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="uppercase text-white text-[15vw] sm:text-[12vw] md:text-[11vw]" 
              style={{ 
                fontFamily: interFont,
                fontWeight: 600,
                lineHeight: '1',
                letterSpacing: '-0.07em',
              }}
            >
              To Mix.
            </motion.h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-10 gap-6">
            <div className="opacity-10 font-mono text-[8px] md:text-[9px] tracking-[0.6em]">
                LABORATORY // VOL. 01
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="max-w-[260px] text-white font-medium text-[10px] md:text-[11px] uppercase tracking-[0.3em] leading-loose text-left md:text-right"
            >
              Standard is a choice. <br className="hidden md:block" /> Ritual is an art. <br className="hidden md:block" /> Alchemy is yours.
            </motion.p>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="space-y-32 md:space-y-40">
          <MixCard 
            index={0}
            title="Booster"
            sub="Botanical Alchemy"
            imgA={img1}
            imgB={kinPour}
            desc="The alchemical lift. 1 part Kin essence meeting 4 parts chilled lager. A heavy botanical foundation with a crisp, bitter finish."
          />
          <MixCard 
            index={1}
            title="Social"
            sub="Effervescent Craft"
            imgA={img2}
            imgB={img3}
            desc="The clean socialite. 2oz Kin poured over large ice spheres, topped with sparkling mineral water and expressed lemon peel."
          />
        </div>

        {/* BOTTOM LOGO - Scaled for Mobile */}
        <div className="mt-40 md:mt-80 pb-10 md:pb-20 flex justify-center relative">
          <span className="text-[30vw] md:text-[28vw] font-black uppercase tracking-[-0.12em] leading-none select-none 
            bg-gradient-to-t from-white/[0.08] to-transparent bg-clip-text text-transparent"
            style={{ fontFamily: interFont, fontWeight: 600 }}>
            KIN.
          </span>
          <span className="absolute inset-0 flex justify-center text-[30vw] md:text-[28vw] font-black uppercase tracking-[-0.12em] leading-none select-none 
            text-white/[0.02] [-webkit-text-stroke:0.5px_rgba(255,255,255,0.05)] md:[-webkit-text-stroke:1px_rgba(255,255,255,0.05)]"
            style={{ fontFamily: interFont, fontWeight: 600 }}>
            KIN.
          </span>
        </div>
      </div>
    </section>
  );
};

export default WaysToMix;