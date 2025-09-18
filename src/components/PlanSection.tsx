import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Droplets, Sun, Thermometer, Camera, Bot, Trophy, Target } from 'lucide-react';

const PlanSection = () => {
  const features = [
    {
      icon: Camera,
      title: "AI Plant Identification",
      description: "Upload photos for instant plant species recognition and care recommendations",
      status: "Ready",
      color: "bg-green-500"
    },
    {
      icon: Bot,
      title: "Smart AI Assistant",
      description: "Chat with our AI for personalized plant care advice and troubleshooting",
      status: "Ready", 
      color: "bg-green-500"
    },
    {
      icon: Droplets,
      title: "Weather-Smart Watering",
      description: "Dynamic watering schedules that adapt to local weather conditions",
      status: "Coming Soon",
      color: "bg-blue-500"
    },
    {
      icon: Sun,
      title: "Growth Tracking",
      description: "Monitor plant health with photo timelines and growth metrics",
      status: "Coming Soon",
      color: "bg-yellow-500"
    },
    {
      icon: Trophy,
      title: "Gamification & Rewards",
      description: "Earn XP, unlock badges, and level up your plant care skills",
      status: "Coming Soon",
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "Care Reminders",
      description: "Smart notifications for watering, fertilizing, and seasonal care",
      status: "Coming Soon",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Development Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From hackathon MVP to full-featured plant care ecosystem - here's what we're building
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${feature.color}/20`}>
                      <Icon className={`h-6 w-6 ${feature.color.replace('bg-', 'text-')}`} />
                    </div>
                    <Badge 
                      variant={feature.status === "Ready" ? "default" : "secondary"}
                      className={feature.status === "Ready" ? "bg-green-100 text-green-800" : ""}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Development Phases */}
        <div className="space-y-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <CalendarDays className="h-5 w-5" />
                Phase 1: MVP (Current Hackathon)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">✅ Completed Features</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• AI-powered plant identification</li>
                    <li>• Interactive chat assistant</li>
                    <li>• Image upload & camera integration</li>
                    <li>• Responsive web design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">🚧 In Progress</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• User authentication system</li>
                    <li>• Plant profile management</li>
                    <li>• Basic care recommendations</li>
                    <li>• Mobile optimization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Target className="h-5 w-5" />
                Phase 2: Enhanced Features (Post-Hackathon)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Smart Care System</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Weather API integration</li>
                    <li>• Dynamic watering schedules</li>
                    <li>• Seasonal care adjustments</li>
                    <li>• Disease detection alerts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700">Gamification Engine</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• XP and level progression</li>
                    <li>• Achievement badges</li>
                    <li>• Care streaks & rewards</li>
                    <li>• Community challenges</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;