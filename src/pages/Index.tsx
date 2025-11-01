import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import PilarsSection from "@/components/PilarsSection";
import MethodologySection from "@/components/Methodology";
import TrainingContentSection from "@/components/TrainingContentSection";
import CertificationSection from "@/components/CertificationSection";
import Footer from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { MobileFloatingCTA } from "@/components/MobileFloatingCTA";
import { useMobileScrollOptimization } from "@/hooks/use-mobile-scroll";

const Index = () => {
  // Optimizar scroll en móviles
  useMobileScrollOptimization();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PilarsSection />
      <MethodologySection />
      <TrainingContentSection />
      <CertificationSection />
      <Footer />
      
      {/* Componentes exclusivos para móvil */}
      <MobileBottomNav />
      <MobileFloatingCTA />
    </div>
  );
};

export default Index;
