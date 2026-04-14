import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Bell } from "./index-3Ay7Q_rP.js";
import { B as Badge } from "./CampusBadge-CTArW4kE.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { P as PageHeader } from "./PageHeader-Phty1uEO.js";
import { n as notifications } from "./index-C4jMyBpZ.js";
import { C as CalendarDays } from "./calendar-days-lS_gNOZ4.js";
import { C as Check } from "./check-4L_L5t2K.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const typeIcons = {
  order: Package,
  event: CalendarDays,
  system: Info,
  promo: Tag
};
const typeBadge = {
  order: "success",
  event: "info",
  system: "default",
  promo: "warning"
};
const typeLabels = {
  order: "Order",
  event: "Event",
  system: "System",
  promo: "Promo"
};
function Notifications() {
  const [notifs, setNotifs] = reactExports.useState(notifications);
  const markAllRead = () => setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id) => setNotifs(
    (prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n)
  );
  const unreadCount = notifs.filter((n) => !n.read).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Notifications",
        back: true,
        backTo: "/dashboard",
        rightAction: unreadCount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: markAllRead,
            className: "text-xs text-primary font-semibold hover:underline",
            "data-ocid": "mark-all-read-btn",
            children: "Mark all read"
          }
        ) : void 0
      }
    ),
    unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 bg-primary/5 rounded-xl border border-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 15, className: "text-primary shrink-0 pulse-soft" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-primary", children: [
        unreadCount,
        " unread notification",
        unreadCount > 1 ? "s" : ""
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4 flex flex-col gap-3 pb-8", children: notifs.map((notif) => {
      const Icon = typeIcons[notif.type];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          padding: "md",
          className: `flex gap-3 transition-smooth cursor-pointer ${!notif.read ? "border-primary/30 bg-primary/5" : ""}`,
          onClick: () => markRead(notif.id),
          "data-ocid": `notif-${notif.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${!notif.read ? "bg-primary/15" : "bg-muted"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Icon,
                  {
                    size: 17,
                    className: !notif.read ? "text-primary" : "text-muted-foreground"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `text-sm font-bold leading-tight truncate ${!notif.read ? "text-foreground" : "text-foreground/80"}`,
                    children: notif.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: typeBadge[notif.type], children: typeLabels[notif.type] }),
                  notif.read && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 13, className: "text-muted-foreground" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-snug line-clamp-2", children: notif.message }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1.5", children: notif.timestamp })
            ] })
          ]
        },
        notif.id
      );
    }) })
  ] });
}
export {
  Notifications as default
};
