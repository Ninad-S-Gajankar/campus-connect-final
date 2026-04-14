import { j as jsxRuntimeExports, C as Clock } from "./index-3Ay7Q_rP.js";
import { B as Badge } from "./CampusBadge-CTArW4kE.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { P as PageHeader } from "./PageHeader-Phty1uEO.js";
import { q as queueStatus } from "./index-C4jMyBpZ.js";
import { H as Hash } from "./hash-DWRdpSxN.js";
import { C as ChefHat } from "./chef-hat-DRXCHD3U.js";
const trackSizes = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };
const fillVariants = {
  primary: "bg-primary",
  success: "bg-accent",
  warning: "bg-secondary"
};
function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  variant = "primary",
  size = "md",
  animated = false,
  className = ""
}) {
  const pct = Math.min(100, Math.max(0, value / max * 100));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full ${className}`, children: [
    (label || showValue) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1.5 text-xs font-medium text-muted-foreground", children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
      showValue && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        Math.round(pct),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-full bg-muted rounded-full overflow-hidden ${trackSizes[size]}`,
        role: "progressbar",
        tabIndex: -1,
        "aria-valuenow": value,
        "aria-valuemin": 0,
        "aria-valuemax": max,
        "aria-label": label ?? "Progress",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-full rounded-full transition-all duration-700 ease-out ${fillVariants[variant]} ${animated ? "animate-pulse-soft" : ""}`,
            style: { width: `${pct}%` }
          }
        )
      }
    )
  ] });
}
const statusConfig = {
  queued: {
    label: "Queued",
    variant: "info",
    emoji: "⏳",
    progress: 20
  },
  preparing: {
    label: "Preparing",
    variant: "warning",
    emoji: "🍳",
    progress: 60
  },
  ready: {
    label: "Ready!",
    variant: "success",
    emoji: "✅",
    progress: 100
  }
};
const steps = [
  { id: "queued", label: "Order Placed", icon: Hash },
  { id: "preparing", label: "Being Prepared", icon: ChefHat },
  { id: "ready", label: "Ready for Pickup", icon: Clock }
];
const statusOrder = ["queued", "preparing", "ready"];
function QueueStatus() {
  const status = queueStatus;
  const config = statusConfig[status.status];
  const currentStepIndex = statusOrder.indexOf(status.status);
  const progressPct = (status.totalInQueue - status.position + 1) / status.totalInQueue * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Queue Status", back: true, backTo: "/dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-5 flex flex-col gap-4 pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padding: "lg", className: "gradient-hero text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs font-body mb-1", children: "Order ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold font-mono", children: status.orderId })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl animate-pulse-soft", children: config.emoji })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 line-clamp-1 mb-4", children: status.itemName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: config.variant, className: "mb-3", children: config.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProgressBar,
          {
            value: config.progress,
            variant: "primary",
            size: "md",
            animated: status.status !== "ready",
            className: "[&_.bg-muted]:bg-white/20"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            padding: "md",
            className: "flex flex-col items-center gap-1 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold font-display text-primary", children: [
                "#",
                status.position
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                status.totalInQueue,
                " total in queue"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            padding: "md",
            className: "flex flex-col items-center gap-1 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold font-display text-accent", children: status.estimatedMinutes }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Minutes est." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Approximate wait" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padding: "md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground mb-2", children: "Queue Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProgressBar,
          {
            value: progressPct,
            label: `${status.position} of ${status.totalInQueue} ahead`,
            showValue: true,
            variant: "primary",
            size: "md"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padding: "md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground mb-4", children: "Order Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0", children: steps.map((step, i) => {
          const Icon = step.icon;
          const isDone = i < currentStepIndex;
          const isCurrent = i === currentStepIndex;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex-1 flex flex-col items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `flex-1 h-0.5 ${i === 0 ? "invisible" : isDone || isCurrent ? "bg-primary" : "bg-border"}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-smooth ${isDone ? "bg-primary text-primary-foreground" : isCurrent ? "bg-primary/20 text-primary ring-2 ring-primary" : "bg-muted text-muted-foreground"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `flex-1 h-0.5 ${i === steps.length - 1 ? "invisible" : isDone ? "bg-primary" : "bg-border"}`
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `text-[10px] font-semibold mt-1.5 text-center leading-tight ${isCurrent ? "text-primary" : isDone ? "text-foreground" : "text-muted-foreground"}`,
                    children: step.label
                  }
                )
              ]
            },
            step.id
          );
        }) })
      ] }),
      status.status === "ready"
    ] })
  ] });
}
export {
  QueueStatus as default
};
