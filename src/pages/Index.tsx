import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PlantIdentificationDemo } from "@/components/PlantIdentificationDemo";
import { GamificationPreview } from "@/components/GamificationPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PlantIdentificationDemo />
      <GamificationPreview />
      <Footer />
    </div>
  );
};

export default Index;
