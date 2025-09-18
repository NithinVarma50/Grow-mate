import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

const Input = ({ className, ...props }: React.ComponentProps<"input">) => (
  <input
    className={cn(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full rounded-md border bg-black/20 px-3 text-sm text-white outline-none",
      "focus-visible:border-white/30 focus-visible:ring-white/30 focus-visible:ring-[3px]",
      className
    )}
    {...props}
  />
);

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 via-purple-700/40 to-black" />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-sm p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl">
        <div className="text-center mb-4">
          <div className="mx-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
            <UserPlus size={16} />
          </div>
          <h1 className="mt-3 text-white text-lg font-semibold">Create account</h1>
          <p className="text-white/60 text-xs">Sign up to continue</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-9"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-9"
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button disabled={loading} className="w-full h-10 rounded-md bg-white text-black text-sm font-medium">
            {loading ? "Creating..." : "Sign up"}
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-white/70">
          Already have an account? <Link to="/signin" className="underline">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;


