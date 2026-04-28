import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import ProductSection from '../sections/ProductSection';
import ParallaxSection from '../sections/ParallaxSection';
import HowItWorks from '../sections/HowItWorks';
import GridSection from '../sections/GridSection';
import CTASection from '../sections/CTASection';
import RecipeSection from '../sections/RecipeSection';
import TrustBar from '../sections/TrustBar';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../sections/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for Buttery Smooth Scrolling (Apple-like feel)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
      smoothTouch: false, // Native touch scroll provides a better feel on mobile
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="page-root w-full overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Wrapper to scroll over the fixed HeroSection */}
      <div className="relative z-10 bg-[var(--color-bg)] w-full">
        <ProductSection />
        <TrustBar />
        <HowItWorks />
        <ParallaxSection />
        <GridSection />
        <RecipeSection />
        <CTASection />
        <WhatsAppButton />
        <Footer />
      </div>
    </div>
  );
}
