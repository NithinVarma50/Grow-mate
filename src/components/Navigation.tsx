import { Button } from "@/components/ui/button";
import { Leaf, Menu, User, Trophy, Camera, Home } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Smart Farm AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a href="#dashboard" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Leaf className="h-4 w-4" />
              <span>My Plants</span>
            </a>
            <a href="#identify" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Camera className="h-4 w-4" />
              <span>Identify</span>
            </a>
            <a href="#achievements" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Trophy className="h-4 w-4" />
              <span>Achievements</span>
            </a>
            <Button variant="hero" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#home" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </a>
              <a href="#dashboard" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-2">
                <Leaf className="h-4 w-4" />
                <span>My Plants</span>
              </a>
              <a href="#identify" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-2">
                <Camera className="h-4 w-4" />
                <span>Identify</span>
              </a>
              <a href="#achievements" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-2">
                <Trophy className="h-4 w-4" />
                <span>Achievements</span>
              </a>
              <Button variant="hero" size="sm" className="mt-2">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};