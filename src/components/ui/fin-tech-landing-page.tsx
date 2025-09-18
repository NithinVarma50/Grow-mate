import React from "react";
import { motion } from "framer-motion";
import { Leaf, Sparkles, BarChart3, ArrowUpRight, ShieldCheck } from "lucide-react";

/** Growmate AI Landing Page */

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <div className="text-3xl font-semibold tracking-tight text-slate-900">{value}</div>
    <div className="text-sm text-slate-500">{label}</div>
  </div>
);

const SoftButton = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) => (
  <button
    className={
      "rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 " +
      "bg-emerald-900 text-white hover:bg-emerald-800 focus:ring-emerald-700 " +
      className
    }
    {...props}
  >
    {children}
  </button>
);

function MiniBars() {
  return (
    <div className="mt-6 flex h-36 items-end gap-4 rounded-xl bg-gradient-to-b from-emerald-50 to-white p-4">
      {[18, 48, 72, 96].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0.6 }}
          animate={{ height: h }}
          transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
          className="w-10 rounded-xl bg-gradient-to-t from-emerald-200 to-emerald-400 shadow-inner"
        />
      ))}
    </div>
  );
}

function PlantIcon() {
  return (
    <motion.svg
      initial={{ rotate: -8 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 2, type: "spring" }}
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path
        d="M110 20c-20 0-40 10-40 30 0 20 20 30 40 30s40-10 40-30c0-20-20-30-40-30z"
        fill="url(#grad)"
        opacity="0.95"
      />
      <path
        d="M90 50v60c0 10 10 20 20 20s20-10 20-20V50"
        stroke="#065f46"
        strokeWidth="4"
        fill="none"
      />
      <motion.path
        d="M90 110c0 20 10 30 20 30s20-10 20-30"
        stroke="#065f46"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.svg>
  );
}

export default function GrowmateLandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#F3F5F7]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        :root { 
          --font-sans: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; 
        }
        .font-jakarta { font-family: var(--font-sans); }
      `}</style>

      {/* Navigation */}
      <nav className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-4 py-6 md:px-0">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-700 text-white shadow">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="font-jakarta text-xl font-semibold tracking-tight text-slate-900">Growmate AI</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {['Features', 'Solutions', 'Pricing', 'About'].map((item) => (
            <a key={item} href="#" className="text-sm text-slate-600 hover:text-slate-900">{item}</a>
          ))}
        </div>
        <div className="hidden gap-2 md:flex">
          <button className="rounded-full px-4 py-2 text-sm text-slate-700 hover:bg-white">Login</button>
          <SoftButton>Get Started</SoftButton>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-6 px-4 pb-14 md:grid-cols-2 md:px-0">
        {/* Left: Headline */}
        <div className="flex flex-col justify-center space-y-8 pr-2">
          <div>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              Grow Smarter
              <br />
              with AI-Powered Gardening
            </h1>
            <p className="mt-4 max-w-md text-slate-600">
              Join thousands of gardeners using <span className="font-medium text-slate-900">Growmate AI</span> to cultivate thriving plants with intelligent care.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SoftButton>
              Start Growing <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </SoftButton>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-2 md:max-w-sm">
            <Stat label="Plants Identified" value="50K+" />
            <Stat label="Happy Gardeners" value="10K+" />
          </div>

          <div className="mt-6 flex items-center gap-8 opacity-70">
            <span className="text-xs text-slate-500">TRUSTED BY</span>
            <div className="flex items-center gap-6 text-slate-400">
              <span className="font-semibold">HomeGarden</span>
              <span className="font-semibold">PlantLovers</span>
              <span className="font-semibold">GrowIt</span>
            </div>
          </div>
        </div>

        {/* Right: Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* AI Assistant Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative col-span-1 overflow-hidden rounded-xl bg-gradient-to-b from-emerald-900 to-emerald-800 p-6 text-emerald-50 shadow-lg"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] opacity-10 bg-cover bg-center" />
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-emerald-700/60 p-2 ring-1 ring-white/10">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-wider text-emerald-200">AI Assistant</span>
              </div>
              <div className="mt-6 text-xl leading-snug text-emerald-50/95">
                Smart plant care
                <br /> at your fingertips
              </div>
              <motion.div
                className="absolute right-6 top-6 h-12 w-12 rounded-full bg-emerald-600/40"
                animate={{ boxShadow: ["0 0 0 0 rgba(16,185,129,0.35)", "0 0 0 16px rgba(16,185,129,0)"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Plant Care Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative col-span-1 overflow-hidden rounded-xl bg-gradient-to-b from-teal-400 to-emerald-500 p-6 text-white shadow-lg"
          >
            <div className="pointer-events-none absolute -right-8 -top-10 opacity-70">
              <PlantIcon />
            </div>
            <div className="relative mt-24 text-sm text-white/90">Plant Care</div>
            <div className="text-xl font-medium leading-snug">
              Perfect care
              <br /> for every plant
            </div>
          </motion.div>

          {/* Growth Tracking Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-1 rounded-xl bg-white p-6 text-slate-800 shadow-lg ring-1 ring-slate-200"
          >
            <div className="flex items-center gap-2 text-slate-500">
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm">Growth Progress</span>
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">87% <span className="text-sm font-medium text-slate-400 align-middle">Healthy</span></div>
            <div className="mt-1 text-xs text-emerald-600">↑ 12% this month</div>
            <MiniBars />
          </motion.div>

          <div className="hidden md:block" />
        </div>
      </div>

      <footer className="mx-auto w-full max-w-[1180px] px-4 pb-10 text-center text-xs text-slate-400 md:px-0">
        &copy; {new Date().getFullYear()} Growmate AI. Cultivating greener futures with technology.
      </footer>
    </div>
  );
}
