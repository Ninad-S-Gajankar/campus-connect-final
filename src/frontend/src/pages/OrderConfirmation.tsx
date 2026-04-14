import { useNavigate } from "@tanstack/react-router";
import { CheckCircle2, Clock, Hash } from "lucide-react";
import { Button } from "../components/ui/CampusButton";
import { Card } from "../components/ui/CampusCard";

const ORDER_ID = "VK-1044";
const PICKUP_TIME = "15–20 min";
const QR_CELLS = Array.from({ length: 49 }, (_, i) => ({
  id: `qr-${i}`,
  filled: Math.random() > 0.5,
}));

export default function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Success header */}
      <div className="gradient-hero px-6 pt-16 pb-10 flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-slide-up">
          <CheckCircle2 size={36} className="text-white" />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-2xl font-bold font-display text-white mb-1">
            Order Placed!
          </h1>
          <p className="text-white/70 text-sm">
            Your food is being prepared 🍳
          </p>
        </div>
      </div>

      <div className="flex-1 px-4 -mt-6 pb-8 flex flex-col gap-4">
        {/* Order details card */}
        <Card
          padding="lg"
          className="animate-slide-up"
          style={{ animationDelay: "0.15s" } as React.CSSProperties}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Hash size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Order ID</p>
              <p className="text-base font-bold font-mono text-foreground">
                {ORDER_ID}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Clock size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Estimated Pickup</p>
              <p className="text-base font-bold text-foreground">
                {PICKUP_TIME}
              </p>
            </div>
          </div>
        </Card>

        {/* QR Code placeholder */}
        <Card
          padding="lg"
          className="flex flex-col items-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.2s" } as React.CSSProperties}
        >
          <p className="text-sm font-bold text-foreground">
            Show this at the counter
          </p>
          <div className="w-40 h-40 bg-foreground/5 rounded-2xl p-3 flex items-center justify-center">
            <div
              className="grid gap-0.5"
              style={{ gridTemplateColumns: "repeat(7, 1fr)", width: "100%" }}
            >
              {QR_CELLS.map(({ id, filled }) => (
                <div
                  key={id}
                  className={`aspect-square rounded-[2px] ${filled ? "bg-foreground" : "bg-transparent"}`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Counter 3 · Vidhyarthi Khana
          </p>
        </Card>

        <div className="flex flex-col gap-3 mt-auto">
          <Button
            fullWidth
            size="lg"
            onClick={() => navigate({ to: "/queue-status" })}
            data-ocid="view-queue-btn"
          >
            Track Queue Status
          </Button>
          <Button
            fullWidth
            variant="outline"
            size="lg"
            onClick={() => navigate({ to: "/dashboard" })}
            data-ocid="back-home-btn"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
