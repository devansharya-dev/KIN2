import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 lg:px-20 h-[90px] transition-all duration-500 ${
          scrolled && !isOpen ? 'bg-[#F2F3EC]/90 backdrop-blur-md border-b border-black/5' : 'bg-[#F2F3EC]'
        }`}
      >
        {/* Brand Logo - Kin® */}
        <div className="flex items-start cursor-pointer hover:opacity-60 transition-opacity z-[110]">
          <h1 className="text-[22px] md:text-[24px] font-bold tracking-tighter text-[#0C0C0C] font-['Inter']">
            Kin
          </h1>
          <span className="text-[10px] font-bold mt-1.5 ml-0.5 text-[#0C0C0C]">®</span>
        </div>

        {/* Desktop Nav Items - Just 3 Items */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group py-2"
            >
              <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#0C0C0C] font-['Inter']">
                {link.name}
              </span>
              {/* Bottom Line Animation */}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Toggle - Fully Functional */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] flex flex-col justify-center items-center w-10 h-10 gap-2 outline-none group"
        >
          <div className={`h-[1.5px] bg-black transition-all duration-500 ease-in-out ${
            isOpen ? 'w-8 rotate-45 translate-y-[4.75px]' : 'w-8 md:w-10'
          }`} />
          <div className={`h-[1.5px] bg-black transition-all duration-500 ease-in-out ${
            isOpen ? 'w-8 -rotate-45 -translate-y-[4.75px]' : 'w-8 md:w-10'
          }`} />
        </button>

      </nav>

      {/* Fullscreen Mobile Menu Reveal */}
      <div className={`fixed inset-0 bg-[#F2F3EC] z-[90] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-['Syne'] text-[50px] md:text-[80px] font-bold tracking-tighter text-black transition-all duration-500 hover:italic ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Bottom Detail */}
        <div className={`absolute bottom-12 text-center transition-opacity duration-1000 ${isOpen ? 'opacity-30' : 'opacity-0'}`}>
          <p className="font-['Inter'] text-[10px] font-black uppercase tracking-[0.4em]">Pure Fungi Synergy / 2026</p>
        </div>
      </div>
    </>
  );
}