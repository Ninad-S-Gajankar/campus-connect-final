import { c as createLucideIcon, u as useNavigate, j as jsxRuntimeExports, B as Bell } from "./index-3Ay7Q_rP.js";
import { B as Badge } from "./CampusBadge-CTArW4kE.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { n as notifications, u as userProfile } from "./index-C4jMyBpZ.js";
import { u as useCart } from "./useCart-B49stm3y.js";
import { S as Search } from "./search-D7kHzjSm.js";
import { B as BookOpen } from "./book-open-CrG-nRYC.js";
import { C as CalendarDays } from "./calendar-days-lS_gNOZ4.js";
import { M as MapPin } from "./map-pin-rhVvjT3q.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const CircleUserRound = createLucideIcon("circle-user-round", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
  [
    "path",
    { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }]
];
const UtensilsCrossed = createLucideIcon("utensils-crossed", __iconNode);
const services = [
  {
    id: "food-court",
    label: "Food Court",
    sublabel: "Vidhyarthi Khana",
    icon: UtensilsCrossed,
    route: "/food-court",
    color: "bg-primary/10 text-primary"
  },
  {
    id: "book-mart",
    label: "Book Mart",
    sublabel: "Campus print & bind",
    icon: BookOpen,
    route: "/book-mart",
    color: "bg-secondary/10 text-secondary"
  },
  {
    id: "event-booking",
    label: "Event Booking",
    sublabel: "Register for events",
    icon: CalendarDays,
    route: "/event-booking",
    color: "bg-accent/10 text-accent"
  },
  {
    id: "profile",
    label: "Profile",
    sublabel: "View your profile",
    icon: CircleUserRound,
    route: "/profile",
    color: "bg-primary/10 text-primary"
  }
];
function Dashboard() {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const unreadCount = notifications.filter((n) => !n.read).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-hero px-5 pt-12 pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm font-body mb-0.5", children: "Welcome back," }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold font-display text-white leading-tight", children: [
            userProfile.name.split(" ")[0],
            "! 👋"
          ] }),
          unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/60 text-xs mt-1", children: [
            "You have ",
            unreadCount,
            " new notification",
            unreadCount > 1 ? "s" : "",
            " 🔔"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: "/notifications" }),
            className: "relative p-2 rounded-xl bg-white/20 text-white transition-smooth hover:bg-white/30",
            "aria-label": "Notifications",
            "data-ocid": "dashboard-notifications-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 20 }),
              unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center pulse-soft", children: unreadCount })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 16,
            className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "search",
            placeholder: "Search services, food, events…",
            className: "w-full pl-10 pr-4 py-2.5 bg-card rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
            "data-ocid": "dashboard-search"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-5 -mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { padding: "none", className: "overflow-hidden animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 divide-x divide-y divide-border", children: services.map(
        ({ id, label, sublabel, icon: Icon, route, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: route }),
            className: "flex flex-col items-center gap-3 p-5 hover:bg-muted/50 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "data-ocid": `service-${id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-14 h-14 rounded-2xl flex items-center justify-center ${color}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, strokeWidth: 1.8 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-tight mt-0.5", children: sublabel })
              ] })
            ]
          },
          id
        )
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-foreground mb-3", children: "Quick Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/queue-status" }),
              className: "flex-1 flex items-center gap-3 p-3 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-smooth",
              "data-ocid": "quick-queue-status",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18, className: "text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground", children: "Queue Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Position #3 in queue" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/cart" }),
              className: "flex-1 flex items-center gap-3 p-3 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-smooth",
              "data-ocid": "quick-cart",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UtensilsCrossed, { size: 18, className: "text-primary" }),
                  totalItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center float-animation", children: totalItems })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground", children: "My Cart" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: totalItems > 0 ? `${totalItems} item${totalItems > 1 ? "s" : ""} added` : "Cart is empty" })
                ] })
              ]
            }
          )
        ] })
      ] }),
      notifications.slice(0, 1).map((notif) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-foreground mb-3", children: "Latest Update" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: "/notifications" }),
            className: "w-full flex gap-3 items-start p-4 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-smooth text-left",
            "data-ocid": "dashboard-latest-notif",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-base", children: "🎉" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground truncate", children: notif.title }),
                  !notif.read && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "info", className: "shrink-0", children: "New" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-snug line-clamp-2", children: notif.message })
              ] })
            ]
          }
        )
      ] }, notif.id))
    ] })
  ] });
}
export {
  Dashboard as default
};
