import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
import { B as Badge } from "./CampusBadge-CTArW4kE.js";
import { B as Button } from "./CampusButton-DMSIN2t5.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { u as userProfile, o as orderHistory } from "./index-C4jMyBpZ.js";
import { C as ChevronRight } from "./chevron-right-Cn6sTkZR.js";
import { P as Pencil, a as Phone, L as LogOut } from "./phone-B8vJ7TWR.js";
import { X } from "./x-ALhsUHO1.js";
import { C as Check } from "./check-4L_L5t2K.js";
import { M as Mail } from "./mail-B_-LWaYW.js";
import { B as BookOpen } from "./book-open-CrG-nRYC.js";
import { C as CalendarDays } from "./calendar-days-lS_gNOZ4.js";
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
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 10h2", key: "8sgtl7" }],
  ["path", { d: "M16 14h2", key: "epxaof" }],
  ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0", key: "n6f512" }],
  ["circle", { cx: "9", cy: "11", r: "2", key: "yxgjnd" }],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" }]
];
const IdCard = createLucideIcon("id-card", __iconNode);
const statusBadge = {
  delivered: { variant: "success", label: "Delivered" },
  cancelled: { variant: "error", label: "Cancelled" },
  pending: { variant: "warning", label: "Pending" }
};
function InfoRow({ icon, label, value, last }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `flex items-center gap-3 py-3 px-4 ${!last ? "border-b border-gray-100" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-gray-400 font-medium leading-none mb-0.5", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-800 truncate", children: value })
        ] })
      ]
    }
  );
}
function EditField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  readOnly
}) {
  const fieldId = `edit-field-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        htmlFor: fieldId,
        className: "text-[11px] font-bold text-gray-500 uppercase tracking-wider",
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
        readOnly,
        className: `w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all outline-none
          ${readOnly ? "bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed" : "bg-white border-gray-200 text-gray-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"}`
      }
    ),
    readOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400 -mt-0.5", children: "Cannot be changed" })
  ] });
}
const BRANCH_OPTIONS = [
  "Computer Science & Engineering",
  "Electronics & Communication Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Information Science & Engineering",
  "Electrical & Electronics Engineering",
  "Biotechnology",
  "Chemical Engineering"
];
function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = reactExports.useState({ ...userProfile });
  const [editing, setEditing] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState({ ...userProfile });
  const initials = profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  function startEdit() {
    setDraft({ ...profile });
    setEditing(true);
  }
  function cancelEdit() {
    setEditing(false);
  }
  function saveEdit() {
    setProfile({ ...draft });
    setEditing(false);
  }
  function updateDraft(key, value) {
    setDraft((prev) => ({ ...prev, [key]: value }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative h-36 w-full",
        style: {
          background: "linear-gradient(135deg, #2563eb 0%, #10b981 100%)"
        },
        "data-ocid": "profile.hero_banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/dashboard" }),
              className: "absolute top-5 left-4 w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors",
              "aria-label": "Go back",
              "data-ocid": "profile.back_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18, className: "rotate-180" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "absolute top-5 left-1/2 -translate-x-1/2 text-white font-bold text-base tracking-wide", children: "My Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-5 right-4 bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30", children: "Student" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center -mt-12 mb-4 px-4",
        "data-ocid": "profile.avatar_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-24 h-24 rounded-full flex items-center justify-center text-3xl font-extrabold text-white shadow-lg border-4 border-white",
                style: {
                  background: "linear-gradient(135deg, #2563eb 0%, #10b981 100%)"
                },
                children: initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 13, className: "text-blue-500" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-xl font-extrabold text-gray-800 leading-tight", children: profile.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 mt-0.5", children: [
            profile.branch.split(" ").slice(0, 3).join(" "),
            " · Year",
            " ",
            profile.year
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 flex flex-col gap-4 pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white rounded-2xl shadow-sm overflow-hidden",
          "data-ocid": "profile.info_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-2 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold text-gray-400 uppercase tracking-widest", children: "Personal Info" }),
              !editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: startEdit,
                  className: "flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-xl transition-colors",
                  "data-ocid": "profile.edit_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 12 }),
                    "Edit Profile"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: cancelEdit,
                    className: "flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-xl transition-colors",
                    "data-ocid": "profile.cancel_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }),
                      "Cancel"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: saveEdit,
                    className: "flex items-center gap-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-xl transition-colors shadow-sm",
                    "data-ocid": "profile.save_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }),
                      "Save"
                    ]
                  }
                )
              ] })
            ] }),
            !editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InfoRow,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "text-blue-500" }),
                  label: "Phone Number",
                  value: profile.phone
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InfoRow,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "text-blue-500" }),
                  label: "Gmail",
                  value: profile.gmail ?? profile.email
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InfoRow,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "text-emerald-500" }),
                  label: "College Email",
                  value: profile.email
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InfoRow,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IdCard, { size: 16, className: "text-blue-500" }),
                  label: "USN / Student ID",
                  value: profile.usn
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InfoRow,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 16, className: "text-emerald-500" }),
                  label: "Branch",
                  value: profile.branch
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InfoRow,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 16, className: "text-blue-500" }),
                  label: "Year / Semester",
                  value: `Year ${profile.year} · Semester ${profile.year * 2 - 1}`,
                  last: true
                }
              )
            ] }),
            editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-4 pt-2 pb-5 flex flex-col gap-4",
                "data-ocid": "profile.edit_form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gray-100" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    EditField,
                    {
                      label: "Full Name",
                      value: draft.name,
                      onChange: (v) => updateDraft("name", v),
                      placeholder: "e.g. Alex Kumar"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    EditField,
                    {
                      label: "Phone Number",
                      value: draft.phone,
                      onChange: (v) => updateDraft("phone", v),
                      type: "tel",
                      placeholder: "+91 XXXXX XXXXX"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    EditField,
                    {
                      label: "Gmail",
                      value: draft.gmail ?? "",
                      onChange: (v) => updateDraft("gmail", v),
                      type: "email",
                      placeholder: "yourname@gmail.com"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "edit-branch",
                        className: "text-[11px] font-bold text-gray-500 uppercase tracking-wider",
                        children: "Branch"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        id: "edit-branch",
                        value: draft.branch,
                        onChange: (e) => updateDraft("branch", e.target.value),
                        className: "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none",
                        "data-ocid": "profile.branch_select",
                        children: BRANCH_OPTIONS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b, children: b }, b))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-gray-500 uppercase tracking-wider", children: "Year" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "fieldset",
                      {
                        className: "flex gap-2 border-0 p-0 m-0",
                        "data-ocid": "profile.year_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "sr-only", children: "Select year" }),
                          [1, 2, 3, 4].map((yr) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => updateDraft("year", yr),
                              className: `flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${draft.year === yr ? "bg-blue-600 border-blue-600 text-white shadow-sm" : "bg-white border-gray-200 text-gray-600 hover:border-blue-300"}`,
                              children: yr
                            },
                            yr
                          ))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    EditField,
                    {
                      label: "College Email",
                      value: draft.email,
                      onChange: () => {
                      },
                      readOnly: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    EditField,
                    {
                      label: "USN / Student ID",
                      value: draft.usn,
                      onChange: () => {
                      },
                      readOnly: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: cancelEdit,
                        className: "flex-1 py-3 rounded-2xl border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors",
                        "data-ocid": "profile.cancel_button",
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: saveEdit,
                        className: "flex-1 py-3 rounded-2xl text-sm font-bold text-white transition-all hover:opacity-90",
                        style: {
                          background: "linear-gradient(135deg, #2563eb 0%, #10b981 100%)"
                        },
                        "data-ocid": "profile.save_button",
                        children: "Save Changes"
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-gray-800", children: "Order History" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/food-court" }),
              className: "text-xs text-blue-600 font-semibold hover:underline flex items-center gap-0.5",
              "data-ocid": "profile.order-again-btn",
              children: [
                "Order again ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13 })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: orderHistory.map((order, idx) => {
          const { variant, label } = statusBadge[order.status];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              padding: "md",
              className: "flex flex-col gap-2",
              "data-ocid": `profile.order.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold font-mono text-gray-800", children: order.id }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-gray-400", children: order.date })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant, children: label })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-0.5", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500", children: [
                        item.quantity,
                        "× ",
                        item.name
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-gray-700", children: [
                        "₹",
                        item.price * item.quantity
                      ] })
                    ]
                  },
                  item.name
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-2 border-t border-gray-100 text-sm font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-blue-600", children: [
                    "₹",
                    order.total
                  ] })
                ] })
              ]
            },
            order.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "ghost",
          fullWidth: true,
          size: "lg",
          leftIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 16 }),
          onClick: () => navigate({ to: "/login" }),
          className: "text-red-500 hover:bg-red-50 mt-2 border border-red-100",
          "data-ocid": "profile.logout_button",
          children: "Log Out"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-gray-400 pb-2", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        ".",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:underline",
            children: "Built with love using caffeine.ai"
          }
        )
      ] })
    ] })
  ] });
}
export {
  Profile as default
};
