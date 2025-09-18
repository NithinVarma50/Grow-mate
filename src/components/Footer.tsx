import { Leaf, Github, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Smart Farm AI
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The intelligent plant care assistant that makes keeping plants alive as easy as playing a game.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#identify" className="hover:text-primary transition-colors">Plant Identification</a></li>
              <li><a href="#care" className="hover:text-primary transition-colors">Smart Care Reminders</a></li>
              <li><a href="#weather" className="hover:text-primary transition-colors">Weather Integration</a></li>
              <li><a href="#gamification" className="hover:text-primary transition-colors">Gamification</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#guide" className="hover:text-primary transition-colors">Plant Care Guide</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#api" className="hover:text-primary transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              hello@smartfarmai.com
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Smart Farm AI. Made with 🌱 for plant lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};