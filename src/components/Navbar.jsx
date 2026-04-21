// src/components/Navbar.jsx
import { motion } from "framer-motion";

export default function Navbar({ scrollProgress }) {
  const isScrolled = scrollProgress > 0.03;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    const scrollContainer = document.querySelector('.scroll-container');
    
    if (targetElement && scrollContainer) {
      // Calculate taking into account the parent elements position within scroll-container vs global window
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      
      scrollContainer.scrollTo({
        top: scrollContainer.scrollTop + targetRect.top - containerRect.top,
        behavior: 'smooth'
      });

      // Update URL without triggering default jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-[100] px-8 md:px-20 py-10 flex justify-between items-center transition-all duration-700">
      
      {/* 1. LOGO: KIN (Pure & Bold) */}
      <div className="text-[16px] font-black tracking-[0.3em] uppercase">
        KIN<span className="text-[#bef32e]">.</span>
      </div>

      {/* 2. CENTER LINKS: PURE VISUALS STYLE */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-14 text-[10px] uppercase tracking-[0.4em] font-medium text-white/40">
        <a href="#story" onClick={(e) => scrollToSection(e, 'story')} className="hover:text-white transition-colors duration-500">Story</a>
        <a href="#ingredients" onClick={(e) => scrollToSection(e, 'ingredients')} className="hover:text-white transition-colors duration-500">Ingredients</a>
        {/* <a href="#shop" onClick={(e) => scrollToSection(e, 'shop')} className="hover:text-white transition-colors duration-500">Shop</a> */}
      </div>

      {/* 3. RIGHT SIDE: MINIMAL FOOTER LINK */}
      <div className="flex items-center">
        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60 hover:opacity-100 hover:text-[#bef32e] transition-all duration-500"
        >
          Contact —
        </a>
      </div>

      {/* SUBTLE BACKGROUND (Only on Scroll) */}
      <div className={`absolute inset-0 -z-10 bg-black/20 backdrop-blur-sm transition-opacity duration-1000 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
    </nav>
  );
}