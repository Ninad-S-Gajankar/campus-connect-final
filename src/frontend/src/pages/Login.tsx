import { useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Hash, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/CampusButton";
import { Card } from "../components/ui/CampusCard";

type LoginMode = "student" | "vendor";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<LoginMode>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usn, setUsn] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    if (mode === "vendor") {
      navigate({ to: "/vendor-dashboard" });
    } else {
      navigate({ to: "/dashboard" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header gradient */}
      <div className="gradient-hero px-6 pt-14 pb-10 flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 56 56"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="28" cy="28" r="6" fill="white" fillOpacity="0.9" />
            <path
              d="M22 22c1.5-1.5 3.5-2.5 6-2.5 4.7 0 8.5 3.8 8.5 8.5 0 2.5-1 4.8-2.7 6.3"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold font-display text-white">
          Campus Connect
        </h1>
        <p className="text-white/70 text-sm">Sign in to your account</p>
      </div>

      {/* Form card */}
      <div className="flex-1 -mt-6 px-4 pb-8">
        <Card padding="lg" className="animate-slide-up">
          {/* Toggle */}
          <div
            className="flex rounded-xl bg-muted p-1 mb-6"
            data-ocid="login-toggle"
          >
            {(["student", "vendor"] as LoginMode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-smooth ${
                  mode === m
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-ocid={`login-mode-${m}`}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {mode === "student" ? (
              <>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-foreground"
                  >
                    Campus Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      id="email"
                      type="email"
                      placeholder="alex@bmsce.ac.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-input border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      data-ocid="login-email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-foreground"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-10 py-2.5 bg-input border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      data-ocid="login-password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="usn"
                    className="text-sm font-semibold text-foreground"
                  >
                    Vendor ID
                  </label>
                  <div className="relative">
                    <Hash
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      id="usn"
                      type="text"
                      placeholder="VK-STALL-01"
                      value={usn}
                      onChange={(e) => setUsn(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-input border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                      data-ocid="login-usn"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="otp"
                    className="text-sm font-semibold text-foreground"
                  >
                    OTP
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      id="otp"
                      type="text"
                      placeholder="6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      className="w-full pl-9 pr-4 py-2.5 bg-input border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth font-mono tracking-widest"
                      data-ocid="login-otp"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="button"
              className="text-right text-xs text-primary font-semibold hover:underline"
              data-ocid="forgot-password"
            >
              Forgot Password?
            </button>

            <Button
              type="submit"
              fullWidth
              size="lg"
              loading={loading}
              data-ocid="login-submit"
            >
              {loading ? "Signing in…" : "Log In"}
            </Button>
          </form>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          BMSCE Campus Services © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
