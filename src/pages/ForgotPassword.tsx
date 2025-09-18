import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setStatus(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/signin",
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setStatus("Password reset email sent. Check your inbox.");
  };

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-black/40 border border-white/10 rounded-2xl text-white">
        <h1 className="text-lg font-semibold mb-1">Forgot password</h1>
        <p className="text-xs text-white/70 mb-4">Enter your email to receive a reset link.</p>
        <form onSubmit={onSubmit} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full h-10 rounded-md border border-white/20 bg-black/20 px-3 text-sm outline-none focus:border-white/40"
          />
          {error && <p className="text-xs text-red-400">{error}</p>}
          {status && <p className="text-xs text-green-400">{status}</p>}
          <button disabled={loading} className="w-full h-10 rounded-md bg-white text-black text-sm font-medium">
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>
        <p className="mt-3 text-xs text-white/70">
          Remembered it? <Link to="/signin" className="underline">Back to sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;


