import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, U as User, C as Clock } from "./index-3Ay7Q_rP.js";
import { v as vendorOrders, a as vendorStats, b as vendorCrowdIndicator, c as vendorTodaySummary } from "./index-C4jMyBpZ.js";
import { C as ChefHat } from "./chef-hat-DRXCHD3U.js";
import { L as LogOut, P as Pencil, a as Phone } from "./phone-B8vJ7TWR.js";
import { C as CircleCheck } from "./circle-check-x1WWCWkE.js";
import { E as Eye } from "./eye-BDDpskoM.js";
import { U as Users } from "./users-CBy3q78o.js";
import { X } from "./x-ALhsUHO1.js";
import { C as Check } from "./check-4L_L5t2K.js";
import { M as Mail } from "./mail-B_-LWaYW.js";
import { C as CalendarDays } from "./calendar-days-lS_gNOZ4.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$2);
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
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const defaultVendorProfile = {
  name: "Campus Vendor",
  phone: "+91 87654 32109",
  email: "vendor@campusstore.com",
  storeName: "Campus Store — Block D"
};
function StatCard({ label, value, icon, iconBg }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`,
        children: icon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-slate-500 leading-tight truncate", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-slate-800 leading-tight", children: value })
    ] })
  ] });
}
const statusBorderColor = {
  pending: "border-l-amber-400",
  preparing: "border-l-red-500",
  ready: "border-l-emerald-500"
};
const statusBadgeStyle = {
  pending: "bg-amber-100 text-amber-700",
  preparing: "bg-red-100 text-red-700",
  ready: "bg-emerald-100 text-emerald-700"
};
const statusLabel = {
  pending: "Pending",
  preparing: "Preparing",
  ready: "Ready"
};
function OrderCard({ order, onAction }) {
  const itemsSummary = order.items.map((i) => `${i.quantity}x ${i.name}`).join(", ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `bg-white rounded-2xl shadow-sm border-l-4 ${statusBorderColor[order.status]} p-4`,
      "data-ocid": `order-card-${order.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 text-sm", children: order.orderNumber }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusBadgeStyle[order.status]}`,
                  children: statusLabel[order.status]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-0.5", children: order.customerName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": `View order ${order.orderNumber}`,
              className: "w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-400 transition-colors flex-shrink-0",
              "data-ocid": `order-view-${order.id}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-700 font-medium truncate mb-1", children: itemsSummary }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-slate-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-700 text-sm", children: [
              "₹",
              order.price
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
              order.timeAgo
            ] })
          ] }),
          order.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onAction(order.id, "start"),
              className: "px-4 py-1.5 rounded-xl bg-red-500 text-white text-xs font-bold hover:bg-red-600 transition-colors",
              "data-ocid": `order-start-${order.id}`,
              children: "Start"
            }
          ),
          order.status === "preparing" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onAction(order.id, "ready"),
              className: "px-4 py-1.5 rounded-xl bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-colors",
              "data-ocid": `order-ready-${order.id}`,
              children: "Mark Ready"
            }
          ),
          order.status === "ready" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onAction(order.id, "complete"),
              className: "px-4 py-1.5 rounded-xl bg-slate-700 text-white text-xs font-bold hover:bg-slate-800 transition-colors",
              "data-ocid": `order-complete-${order.id}`,
              children: "Complete"
            }
          )
        ] })
      ]
    }
  );
}
function CrowdCard() {
  const crowd = vendorCrowdIndicator;
  const crowdColors = {
    low: {
      dot: "bg-emerald-500",
      badge: "bg-emerald-100 text-emerald-700",
      bar: "bg-emerald-500",
      label: "Low Crowd"
    },
    medium: {
      dot: "bg-amber-400",
      badge: "bg-amber-100 text-amber-700",
      bar: "bg-amber-400",
      label: "Medium Crowd"
    },
    high: {
      dot: "bg-red-500",
      badge: "bg-red-100 text-red-700",
      bar: "bg-red-500",
      label: "High Crowd"
    }
  }[crowd.level];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `w-2.5 h-2.5 rounded-full ${crowdColors.dot} animate-pulse`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-slate-800", children: "Crowd Indicator" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `text-[10px] font-bold px-2.5 py-1 rounded-full ${crowdColors.badge}`,
          children: crowdColors.label
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-full rounded-full transition-all duration-700 ${crowdColors.bar}`,
        style: { width: `${crowd.percentage}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-slate-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Active Orders:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-700", children: crowd.activeOrders })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-slate-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Avg Wait:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-slate-700", children: [
            crowd.avgWaitMinutes,
            " min"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function TodaySummaryCard() {
  const s = vendorTodaySummary;
  const rows = [
    { label: "Pending", value: s.pending, color: "text-amber-600" },
    { label: "Preparing", value: s.preparing, color: "text-red-500" },
    { label: "Ready", value: s.ready, color: "text-blue-500" },
    { label: "Completed", value: s.completed, color: "text-emerald-600" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-slate-800 mb-3", children: "Today's Summary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
      rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-500", children: row.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-bold ${row.color}`, children: row.value })
      ] }, row.label)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-100 mt-1 pt-2 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-slate-600", children: "Total Revenue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-extrabold text-orange-600", children: [
          "₹",
          s.totalRevenue
        ] })
      ] })
    ] })
  ] });
}
function VendorEditField({
  label,
  value,
  onChange,
  type = "text",
  placeholder
}) {
  const fieldId = `vendor-edit-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        htmlFor: fieldId,
        className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider",
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: fieldId,
        type,
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder,
        className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-800 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
      }
    )
  ] });
}
function VendorProfilePanel({
  onClose,
  profile,
  onSave
}) {
  const [editing, setEditing] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState({ ...profile });
  function startEdit() {
    setDraft({ ...profile });
    setEditing(true);
  }
  function cancelEdit() {
    setEditing(false);
  }
  function saveEdit() {
    onSave({ ...draft });
    setEditing(false);
  }
  function updateDraft(key, value) {
    setDraft((prev) => ({ ...prev, [key]: value }));
  }
  const initials = profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/40 z-40 backdrop-blur-sm",
        onClick: onClose,
        onKeyDown: (e) => e.key === "Escape" && onClose(),
        role: "presentation",
        "data-ocid": "vendor-profile.backdrop"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "dialog",
      {
        open: true,
        className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-3xl shadow-2xl z-50 overflow-hidden p-0 border-0 m-0",
        "data-ocid": "vendor-profile.dialog",
        "aria-label": "Vendor Profile",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "h-24 w-full relative",
              style: {
                background: "linear-gradient(135deg, #10b981 0%, #2563eb 100%)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    className: "absolute top-3 right-3 w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors",
                    "aria-label": "Close vendor profile",
                    "data-ocid": "vendor-profile.close_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-4 bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30", children: "Vendor" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto max-h-[70vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center -mt-10 px-5 pb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-20 h-20 rounded-full flex items-center justify-center text-2xl font-extrabold text-white shadow-lg border-4 border-white",
                style: {
                  background: "linear-gradient(135deg, #10b981 0%, #2563eb 100%)"
                },
                children: initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-lg font-extrabold text-slate-800", children: profile.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: profile.storeName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 w-full flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-gray-400 uppercase tracking-widest", children: "Profile Info" }),
              !editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: startEdit,
                  className: "flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl transition-colors",
                  "data-ocid": "vendor-profile.edit_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 11 }),
                    "Edit"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: cancelEdit,
                    className: "text-xs font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-xl transition-colors",
                    "data-ocid": "vendor-profile.cancel_button",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: saveEdit,
                    className: "flex items-center gap-1 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1.5 rounded-xl transition-colors",
                    "data-ocid": "vendor-profile.save_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 11 }),
                      "Save"
                    ]
                  }
                )
              ] })
            ] }),
            !editing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full rounded-2xl bg-gray-50 overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-3 px-4 border-b border-gray-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15, className: "text-emerald-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400 font-medium leading-none mb-0.5", children: "Phone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-700", children: profile.phone })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-3 px-4 border-b border-gray-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 15, className: "text-blue-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400 font-medium leading-none mb-0.5", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-700 truncate", children: profile.email })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-3 px-4 border-b border-gray-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 15, className: "text-emerald-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400 font-medium leading-none mb-0.5", children: "Store" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-700", children: profile.storeName })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-3 px-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 15, className: "text-blue-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400 font-medium leading-none mb-0.5", children: "Member Since" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-700", children: "January 2025" })
                ] })
              ] })
            ] }),
            editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "w-full flex flex-col gap-3.5 bg-gray-50 rounded-2xl px-4 py-4",
                "data-ocid": "vendor-profile.edit_form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    VendorEditField,
                    {
                      label: "Full Name",
                      value: draft.name,
                      onChange: (v) => updateDraft("name", v),
                      placeholder: "Vendor name"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    VendorEditField,
                    {
                      label: "Phone Number",
                      value: draft.phone,
                      onChange: (v) => updateDraft("phone", v),
                      type: "tel",
                      placeholder: "+91 XXXXX XXXXX"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    VendorEditField,
                    {
                      label: "Email",
                      value: draft.email,
                      onChange: (v) => updateDraft("email", v),
                      type: "email",
                      placeholder: "vendor@store.com"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    VendorEditField,
                    {
                      label: "Store Name",
                      value: draft.storeName,
                      onChange: (v) => updateDraft("storeName", v),
                      placeholder: "e.g. Campus Store — Block D"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: cancelEdit,
                        className: "flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors",
                        "data-ocid": "vendor-profile.cancel_button",
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: saveEdit,
                        className: "flex-1 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90",
                        style: {
                          background: "linear-gradient(135deg, #10b981 0%, #2563eb 100%)"
                        },
                        "data-ocid": "vendor-profile.save_button",
                        children: "Save Changes"
                      }
                    )
                  ] })
                ]
              }
            ),
            !editing && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "mt-4 w-full py-2.5 rounded-2xl text-sm font-bold text-white transition-all hover:opacity-90",
                style: {
                  background: "linear-gradient(135deg, #10b981 0%, #2563eb 100%)"
                },
                "data-ocid": "vendor-profile.confirm_button",
                children: "Close"
              }
            )
          ] }) })
        ]
      }
    )
  ] });
}
function VendorDashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = reactExports.useState(vendorOrders);
  const [showMenu, setShowMenu] = reactExports.useState(false);
  const [showProfile, setShowProfile] = reactExports.useState(false);
  const [vendorProfile, setVendorProfile] = reactExports.useState(defaultVendorProfile);
  const handleAction = (id, action) => {
    setOrders(
      (prev) => prev.map((o) => {
        if (o.id !== id) return o;
        if (action === "start") return { ...o, status: "preparing" };
        if (action === "ready") return { ...o, status: "ready" };
        return o;
      }).filter((o) => !(o.id === id && action === "complete"))
    );
  };
  const activeOrders = orders.filter((o) => o.status !== "ready" || true);
  const activeCount = orders.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen flex flex-col",
      style: { background: "#f1f5f9" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-5 pt-12 pb-6",
            style: {
              background: "linear-gradient(135deg, #0f1f3d 0%, #1a3260 100%)"
            },
            "data-ocid": "vendor-header",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-orange-400/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { size: 18, className: "text-orange-400" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-blue-300 uppercase tracking-widest", children: "Vendor Portal" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-extrabold text-white leading-tight", children: "Vendor Dashboard" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-300 text-xs mt-1 leading-relaxed", children: "Manage orders & track your kitchen in real time" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0 mt-1 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setShowMenu(false);
                        setShowProfile(true);
                      },
                      className: "w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white/20 hover:border-white/50 transition-colors",
                      style: {
                        background: "linear-gradient(135deg, #10b981 0%, #2563eb 100%)"
                      },
                      "aria-label": "Open vendor profile",
                      "data-ocid": "vendor-profile-avatar-btn",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 18 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowMenu((v) => !v),
                      className: "w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg hover:bg-orange-600 transition-colors",
                      "aria-label": "Open vendor menu",
                      "data-ocid": "vendor-menu-btn",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 18 })
                    }
                  ),
                  showMenu && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-12 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "w-full px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors",
                        onClick: () => {
                          setShowMenu(false);
                          setShowProfile(true);
                        },
                        "data-ocid": "vendor-menu-profile",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14 }),
                          "My Profile"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "w-full px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors",
                        onClick: () => {
                          setShowMenu(false);
                        },
                        "data-ocid": "vendor-menu-settings",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 14 }),
                          "Settings"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2 transition-colors",
                        onClick: () => {
                          setShowMenu(false);
                          navigate({ to: "/login" });
                        },
                        "data-ocid": "vendor-logout",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 14 }),
                          "Sign Out"
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-blue-300", children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-emerald-400 font-semibold", children: "Live" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 -mt-2 pb-2", "data-ocid": "vendor-stats", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              label: "Pending Orders",
              value: vendorStats.pendingCount,
              iconBg: "bg-amber-100",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 20, className: "text-amber-500" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              label: "Preparing",
              value: vendorStats.preparingCount,
              iconBg: "bg-purple-100",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { size: 20, className: "text-purple-600" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              label: "Completed Today",
              value: vendorStats.completedToday,
              iconBg: "bg-emerald-100",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-emerald-600" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              label: "Revenue Today",
              value: `₹${vendorStats.revenueToday}`,
              iconBg: "bg-blue-100",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 20, className: "text-blue-600" })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 px-4 pt-2 pb-6 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "vendor-active-orders", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-extrabold text-slate-800", children: "Active Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full", children: activeCount })
            ] }),
            activeOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-white rounded-2xl p-8 flex flex-col items-center gap-2 shadow-sm",
                "data-ocid": "vendor-empty-orders",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 36, className: "text-emerald-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-600", children: "All caught up!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 text-center", children: "No active orders right now." })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: activeOrders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              OrderCard,
              {
                order,
                onAction: handleAction
              },
              order.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", "data-ocid": "vendor-sidebar", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CrowdCard, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TodaySummaryCard, {})
          ] })
        ] }),
        showProfile && /* @__PURE__ */ jsxRuntimeExports.jsx(
          VendorProfilePanel,
          {
            onClose: () => setShowProfile(false),
            profile: vendorProfile,
            onSave: (updated) => {
              setVendorProfile(updated);
              setShowProfile(false);
            }
          }
        )
      ]
    }
  );
}
export {
  VendorDashboard as default
};
