import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, Sparkles, Leaf, Droplets, Sun, Thermometer } from "lucide-react";

export const PlantIdentificationDemo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            AI Plant Identification in <span className="text-primary">Seconds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simply snap a photo of any plant, and our advanced AI will instantly identify the species 
            and provide comprehensive care instructions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Upload Interface */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <span>Plant Identification</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Upload Plant Photo</h3>
                  <p className="text-muted-foreground mb-4">Drag & drop or click to select an image</p>
                  <Button variant="outline">
                    <Camera className="h-4 w-4 mr-2" />
                    Choose Photo
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="nature" className="h-12">
                    <Camera className="h-4 w-4 mr-2" />
                    Take Photo
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Upload className="h-4 w-4 mr-2" />
                    From Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Processing */}
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="animate-spin">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">AI Analysis in Progress...</div>
                    <div className="text-sm opacity-90">Processing plant characteristics</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Identification Results */}
          <div className="space-y-6">
            {/* Plant Info Card */}
            <Card className="bg-gradient-card border-border/50 shadow-nature">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-nature-leaf" />
                    <span>Monstera Deliciosa</span>
                  </CardTitle>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    98% Match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Common Names</h4>
                  <p className="text-muted-foreground">Swiss Cheese Plant, Split-leaf Philodendron</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Care Requirements</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-nature-water/10">
                      <Droplets className="h-4 w-4 text-nature-water" />
                      <div>
                        <div className="text-sm font-medium">Water</div>
                        <div className="text-xs text-muted-foreground">Weekly</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-nature-sun/10">
                      <Sun className="h-4 w-4 text-nature-sun" />
                      <div>
                        <div className="text-sm font-medium">Light</div>
                        <div className="text-xs text-muted-foreground">Indirect</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ideal Conditions</h4>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Thermometer className="h-4 w-4" />
                      <span>18-27°C</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Droplets className="h-4 w-4" />
                      <span>40-60% Humidity</span>
                    </div>
                  </div>
                </div>

                <Button variant="hero" className="w-full">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Add to My Garden
                </Button>
              </CardContent>
            </Card>

            {/* Care Tips */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Smart Care Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <Droplets className="h-3 w-3 text-primary" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">Water when soil is dry 2 inches down</div>
                    <div className="text-muted-foreground">Check every 5-7 days</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-warning/5">
                  <div className="bg-warning/20 p-1 rounded-full">
                    <Sun className="h-3 w-3 text-warning" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">Avoid direct sunlight</div>
                    <div className="text-muted-foreground">Can cause leaf burn</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};