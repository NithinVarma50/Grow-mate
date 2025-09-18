import * as React from "react";
import { Trophy, Star, Medal } from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  { icon: Trophy, title: "First Investment", desc: "Completed your first AI-assisted investment." },
  { icon: Star, title: "Consistent Saver", desc: "Saved weekly for 8 consecutive weeks." },
  { icon: Medal, title: "Diversified Portfolio", desc: "Achieved a balanced asset allocation." },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-[#F3F5F7]">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Achievements</h1>
          <Link to="/" className="text-sm text-emerald-700 hover:underline">Back to Home</Link>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {achievements.map((a, idx) => (
            <div key={idx} className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <a.icon className="mb-3 h-6 w-6 text-emerald-600" />
              <div className="text-lg font-medium text-slate-900">{a.title}</div>
              <div className="mt-1 text-sm text-slate-500">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
