import { FeatureCard } from "./FeatureCard";
import { Camera, CloudRain, TrendingUp, Shield, Trophy, Smartphone } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need for <span className="text-primary">Plant Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform combines plant identification, weather intelligence, 
            and gamification to make plant care effortless and fun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Camera className="h-8 w-8 text-primary" />}
            title="AI Plant Identification"
            description="Simply snap a photo and our AI instantly identifies your plant species, providing breed-specific care instructions."
          />
          
          <FeatureCard
            icon={<CloudRain className="h-8 w-8 text-nature-water" />}
            title="Weather-Smart Scheduling"
            description="Our system automatically adjusts watering schedules based on real-time weather data and forecasts."
          />
          
          <FeatureCard
            icon={<TrendingUp className="h-8 w-8 text-success" />}
            title="Growth Tracking"
            description="Monitor your plants' progress with detailed growth charts and receive personalized care tips."
          />
          
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-warning" />}
            title="Health Monitoring"
            description="Early disease detection and plant health alerts help you catch problems before they become serious."
          />
          
          <FeatureCard
            icon={<Trophy className="h-8 w-8 text-badge-gold" />}
            title="Gamified Experience"
            description="Earn XP, unlock badges, and level up your plants while building consistent care habits."
          />
          
          <FeatureCard
            icon={<Smartphone className="h-8 w-8 text-accent" />}
            title="Smart Reminders"
            description="Receive intelligent notifications that adapt to your schedule and your plants' unique needs."
          />
        </div>
      </div>
    </section>
  );
};