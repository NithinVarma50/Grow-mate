import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Smartphone, TrendingUp, Award, Droplets, Sun } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Plants Deserve
              <span className="block text-nature-sun">Smart Care</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Meet Smart Farm AI - the gamified plant care assistant that uses AI and weather intelligence 
              to keep your green friends thriving. Never let a plant die again!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="default" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Camera className="h-5 w-5 mr-2" />
                Identify My Plant
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Smartphone className="h-5 w-5 mr-2" />
                View Dashboard
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="text-primary-foreground">
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm opacity-90">Plants Identified</div>
              </div>
              <div className="text-primary-foreground">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Survival Rate</div>
              </div>
              <div className="text-primary-foreground">
                <div className="text-2xl font-bold">1,200+</div>
                <div className="text-sm opacity-90">Happy Users</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-nature">
              <img 
                src={heroImage} 
                alt="Smart indoor garden setup with AI plant care technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 p-4 bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Droplets className="h-5 w-5 text-nature-water" />
                <div>
                  <div className="text-sm font-semibold">Water Alert</div>
                  <div className="text-xs text-muted-foreground">Skip today - rain expected!</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-4 bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-badge-gold" />
                <div>
                  <div className="text-sm font-semibold">Achievement!</div>
                  <div className="text-xs text-muted-foreground">7-day care streak</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};