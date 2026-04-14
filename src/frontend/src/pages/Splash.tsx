import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/login" }), 2000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="gradient-hero min-h-screen flex flex-col items-center justify-center gap-8 px-8">
      {/* Logo mark */}
      <div className="animate-slide-up">
        <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-elevated">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M28 6C16 6 6 16 6 28s10 22 22 22 22-10 22-22S40 6 28 6Z"
              fill="white"
              fillOpacity="0.15"
            />
            <path
              d="M28 14c-3.5 0-6.5 1.5-8.8 3.8L14 22.5c-1 2-1.5 4-1.5 5.5 0 8.3 6.7 15 15 15 3.5 0 6.5-1.2 8.8-3.2L42 34"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="28" cy="28" r="6" fill="white" fillOpacity="0.9" />
            <path
              d="M22 22c1.5-1.5 3.5-2.5 6-2.5 4.7 0 8.5 3.8 8.5 8.5 0 2.5-1 4.8-2.7 6.3"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div
        className="animate-slide-up text-center"
        style={{ animationDelay: "0.15s" }}
      >
        <h1 className="text-4xl font-bold font-display text-white mb-2 tracking-tight">
          Campus Connect
        </h1>
        <p className="text-white/70 text-sm font-body">
          Your campus, all in one place
        </p>
      </div>

      <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/60"
              style={{
                animation: `pulse-soft 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
