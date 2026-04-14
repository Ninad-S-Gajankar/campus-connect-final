import { u as useNavigate, j as jsxRuntimeExports, C as Clock } from "./index-3Ay7Q_rP.js";
import { B as Button } from "./CampusButton-DMSIN2t5.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { C as CircleCheck } from "./circle-check-x1WWCWkE.js";
import { H as Hash } from "./hash-DWRdpSxN.js";
const ORDER_ID = "VK-1044";
const PICKUP_TIME = "15–20 min";
const QR_CELLS = Array.from({ length: 49 }, (_, i) => ({
  id: `qr-${i}`,
  filled: Math.random() > 0.5
}));
function OrderConfirmation() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-hero px-6 pt-16 pb-10 flex flex-col items-center gap-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 36, className: "text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-slide-up", style: { animationDelay: "0.1s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-white mb-1", children: "Order Placed!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "Your food is being prepared 🍳" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-4 -mt-6 pb-8 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          padding: "lg",
          className: "animate-slide-up",
          style: { animationDelay: "0.15s" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { size: 18, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Order ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold font-mono text-foreground", children: ORDER_ID })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 18, className: "text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Estimated Pickup" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-foreground", children: PICKUP_TIME })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          padding: "lg",
          className: "flex flex-col items-center gap-4 animate-slide-up",
          style: { animationDelay: "0.2s" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Show this at the counter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-40 h-40 bg-foreground/5 rounded-2xl p-3 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid gap-0.5",
                style: { gridTemplateColumns: "repeat(7, 1fr)", width: "100%" },
                children: QR_CELLS.map(({ id, filled }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `aspect-square rounded-[2px] ${filled ? "bg-foreground" : "bg-transparent"}`
                  },
                  id
                ))
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Counter 3 · Vidhyarthi Khana" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 mt-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            fullWidth: true,
            size: "lg",
            onClick: () => navigate({ to: "/queue-status" }),
            "data-ocid": "view-queue-btn",
            children: "Track Queue Status"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            fullWidth: true,
            variant: "outline",
            size: "lg",
            onClick: () => navigate({ to: "/dashboard" }),
            "data-ocid": "back-home-btn",
            children: "Back to Home"
          }
        )
      ] })
    ] })
  ] });
}
export {
  OrderConfirmation as default
};
