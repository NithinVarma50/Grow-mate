import * as React from "react";
import { Trophy, Star, Medal, Leaf, Sprout, Award, Target, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  { icon: Sprout, title: "Green Thumb", desc: "Successfully cared for your first plant for 30 days.", color: "text-green-600", bgColor: "bg-green-50" },
  { icon: Leaf, title: "Plant Parent", desc: "Added 5 plants to your collection.", color: "text-emerald-600", bgColor: "bg-emerald-50" },
  { icon: Trophy, title: "Care Master", desc: "Maintained perfect care streak for 7 days.", color: "text-yellow-600", bgColor: "bg-yellow-50" },
  { icon: Star, title: "Plant Identifier", desc: "Successfully identified 10 different plant species.", color: "text-blue-600", bgColor: "bg-blue-50" },
  { icon: Medal, title: "Growth Expert", desc: "Helped a plant reach its growth milestone.", color: "text-purple-600", bgColor: "bg-purple-50" },
  { icon: Award, title: "AI Assistant", desc: "Used plant care AI recommendations 20 times.", color: "text-indigo-600", bgColor: "bg-indigo-50" },
  { icon: Target, title: "Consistent Caregiver", desc: "Watered plants on schedule for 2 weeks straight.", color: "text-teal-600", bgColor: "bg-teal-50" },
  { icon: Heart, title: "Plant Lover", desc: "Favorited 15 plants in your wishlist.", color: "text-pink-600", bgColor: "bg-pink-50" },
  { icon: Zap, title: "Quick Learner", desc: "Completed all plant care tutorials.", color: "text-orange-600", bgColor: "bg-orange-50" },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            🏆 Your Plant Care Achievements
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Celebrate your journey as a plant parent and track your green thumb progress
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, idx) => (
            <div 
              key={idx} 
              className={`rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${achievement.bgColor} border-l-4 border-l-current`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${achievement.bgColor} mb-4`}>
                <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
              </div>
              <div className="text-xl font-semibold text-slate-900 mb-2">{achievement.title}</div>
              <div className="text-sm text-slate-600 leading-relaxed">{achievement.desc}</div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  Unlocked
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-slate-700">+10 XP</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg ring-1 ring-slate-200 inline-block">
            <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Achievement Progress</h3>
            <p className="text-slate-600 mb-4">You've unlocked {achievements.length} out of {achievements.length} achievements!</p>
            <div className="w-64 bg-gray-200 rounded-full h-3 mx-auto">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full w-full"></div>
            </div>
            <p className="text-sm text-slate-500 mt-2">100% Complete - Amazing work! 🌱</p>
          </div>
        </div>
      </div>
    </div>
  );
}
