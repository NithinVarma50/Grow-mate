import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PlantIdentificationDemo } from "@/components/PlantIdentificationDemo";
import AIChat from "@/components/AIChat";
import PlanSection from "@/components/PlanSection";
import { GamificationPreview } from "@/components/GamificationPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PlantIdentificationDemo />
      <AIChat />
      <PlanSection />
      <GamificationPreview />
      <Footer />
    </div>
  );
};

export default Index;
