// @ts-nocheck
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

export const FeatureCard = ({ icon, title, description, gradient = "bg-gradient-card" }: FeatureCardProps) => {
  return (
    <Card className={`${gradient} border-border/50 shadow-soft hover:shadow-nature transition-all duration-300 hover:scale-105 group`}>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};