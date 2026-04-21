import HeroCanvas from '../sections/HeroCanvas';
import StorySection from '../sections/StorySection';
import IngredientsSection from '../sections/IngredientsSection';
import ExperienceSection from '../sections/ExperienceSection';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';
import ProductHighlightSection from '../sections/ProductHighlightSection';
import WaysToMix from '../sections/WaysToMix';
export default function Home() {
  return (
    <HeroCanvas>
      <StorySection />
      <ProductHighlightSection />
      <IngredientsSection />
      <WaysToMix />
      <ExperienceSection />
      <FinalCTA />
      <Footer />
    </HeroCanvas>
  );
}
