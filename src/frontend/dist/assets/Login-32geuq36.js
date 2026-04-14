import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
import { B as Button } from "./CampusButton-DMSIN2t5.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { M as Mail } from "./mail-B_-LWaYW.js";
import { E as Eye } from "./eye-BDDpskoM.js";
import { H as Hash } from "./hash-DWRdpSxN.js";
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
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = reactExports.useState("student");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [usn, setUsn] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleLogin = async (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-hero px-6 pt-14 pb-10 flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          width: "32",
          height: "32",
          viewBox: "0 0 56 56",
          fill: "none",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "28", r: "6", fill: "white", fillOpacity: "0.9" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M22 22c1.5-1.5 3.5-2.5 6-2.5 4.7 0 8.5 3.8 8.5 8.5 0 2.5-1 4.8-2.7 6.3",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-white", children: "Campus Connect" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "Sign in to your account" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 -mt-6 px-4 pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padding: "lg", className: "animate-slide-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex rounded-xl bg-muted p-1 mb-6",
            "data-ocid": "login-toggle",
            children: ["student", "vendor"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setMode(m),
                className: `flex-1 py-2 text-sm font-semibold rounded-lg transition-smooth ${mode === m ? "bg-primary text-primary-foreground shadow-card" : "text-muted-foreground hover:text-foreground"}`,
                "data-ocid": `login-mode-${m}`,
                children: m.charAt(0).toUpperCase() + m.slice(1)
              },
              m
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "flex flex-col gap-4", children: [
          mode === "student" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "email",
                  className: "text-sm font-semibold text-foreground",
                  children: "Campus Email"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Mail,
                  {
                    size: 16,
                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "email",
                    type: "email",
                    placeholder: "alex@bmsce.ac.in",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    className: "w-full pl-9 pr-4 py-2.5 bg-input border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                    "data-ocid": "login-email",
                    required: true
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "password",
                  className: "text-sm font-semibold text-foreground",
                  children: "Password"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Lock,
                  {
                    size: 16,
                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "password",
                    type: showPassword ? "text" : "password",
                    placeholder: "••••••••",
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    className: "w-full pl-9 pr-10 py-2.5 bg-input border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                    "data-ocid": "login-password",
                    required: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword((v) => !v),
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth",
                    "aria-label": showPassword ? "Hide password" : "Show password",
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 })
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "usn",
                  className: "text-sm font-semibold text-foreground",
                  children: "Vendor ID"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Hash,
                  {
                    size: 16,
                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "usn",
                    type: "text",
                    placeholder: "VK-STALL-01",
                    value: usn,
                    onChange: (e) => setUsn(e.target.value),
                    className: "w-full pl-9 pr-4 py-2.5 bg-input border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                    "data-ocid": "login-usn",
                    required: true
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "otp",
                  className: "text-sm font-semibold text-foreground",
                  children: "OTP"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Lock,
                  {
                    size: 16,
                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "otp",
                    type: "text",
                    placeholder: "6-digit OTP",
                    value: otp,
                    onChange: (e) => setOtp(e.target.value),
                    maxLength: 6,
                    className: "w-full pl-9 pr-4 py-2.5 bg-input border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth font-mono tracking-widest",
                    "data-ocid": "login-otp",
                    required: true
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-right text-xs text-primary font-semibold hover:underline",
              "data-ocid": "forgot-password",
              children: "Forgot Password?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              fullWidth: true,
              size: "lg",
              loading,
              "data-ocid": "login-submit",
              children: loading ? "Signing in…" : "Log In"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-6", children: [
        "BMSCE Campus Services © ",
        (/* @__PURE__ */ new Date()).getFullYear()
      ] })
    ] })
  ] });
}
export {
  Login as default
};
