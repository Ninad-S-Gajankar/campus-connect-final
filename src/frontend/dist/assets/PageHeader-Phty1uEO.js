import { c as createLucideIcon, u as useNavigate, j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function PageHeader({
  title,
  back = false,
  backTo,
  rightAction,
  className = "",
  transparent = false
}) {
  const navigate = useNavigate();
  const handleBack = () => {
    if (backTo) {
      navigate({ to: backTo });
    } else {
      window.history.back();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `
        sticky top-0 z-40 flex items-center justify-between px-4 py-3 min-h-[56px]
        ${transparent ? "bg-transparent" : "bg-card border-b border-border shadow-xs"}
        ${className}
      `,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
          back && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleBack,
              className: "p-1.5 rounded-xl text-foreground hover:bg-muted transition-smooth shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "aria-label": "Go back",
              "data-ocid": "page-back-btn",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-bold font-display text-foreground truncate", children: title })
        ] }),
        rightAction && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 ml-3", children: rightAction })
      ]
    }
  );
}
export {
  PageHeader as P
};
