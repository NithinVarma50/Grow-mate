import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Zap, Droplets, Heart } from "lucide-react";
import badgeIcon from "@/assets/badge-icon.png";

export const GamificationPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Make <span className="text-primary">Plant Care</span> a Game
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Level up your green thumb with our engaging gamification system that makes plant care as 
            addictive as your favorite mobile game.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Gamification Interface */}
          <div className="space-y-6">
            {/* User Level Card */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="bg-gradient-primary p-2 rounded-lg">
                    <Star className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-lg">Plant Master</div>
                    <div className="text-sm text-muted-foreground">Level 12</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>XP Progress</span>
                    <span>2,340 / 3,000</span>
                  </div>
                  <Progress value={78} className="h-3" />
                </div>
                <div className="text-sm text-muted-foreground">
                  660 XP until next level!
                </div>
              </CardContent>
            </Card>

            {/* Achievement Badges */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-badge-gold" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-success/10">
                    <img src={badgeIcon} alt="Achievement badge" className="h-8 w-8" />
                    <div>
                      <div className="text-sm font-semibold">Hydration Hero</div>
                      <div className="text-xs text-muted-foreground">7-day streak</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-warning/10">
                    <div className="h-8 w-8 bg-badge-gold rounded-full flex items-center justify-center">
                      <Zap className="h-4 w-4 text-warning-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Growth Guru</div>
                      <div className="text-xs text-muted-foreground">10cm growth</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Tasks */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-danger" />
                  <span>Today's Care Tasks</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-4 w-4 text-nature-water" />
                    <span className="text-sm">Water Monstera</span>
                  </div>
                  <Badge variant="secondary">+50 XP</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Check growth progress</span>
                  </div>
                  <Badge variant="outline">+25 XP</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Turn Care into Adventure</h3>
              <p className="text-muted-foreground mb-6">
                Our gamification system transforms routine plant care into an engaging experience 
                that keeps you motivated and your plants healthy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Experience Points & Levels</h4>
                  <p className="text-sm text-muted-foreground">Gain XP for every care action and watch both you and your plants level up together.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-badge-gold/10 p-2 rounded-lg">
                  <Trophy className="h-5 w-5 text-badge-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Achievement Badges</h4>
                  <p className="text-sm text-muted-foreground">Unlock special badges for milestones like care streaks, plant growth, and perfect timing.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Plant Happiness</h4>
                  <p className="text-sm text-muted-foreground">Watch your plants' virtual avatars thrive with proper care - they'll show their mood!</p>
                </div>
              </div>
            </div>

            <Button variant="gamified" size="lg" className="w-full">
              <Trophy className="h-5 w-5 mr-2" />
              Start Your Plant Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};