import { j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
const variantClasses = {
  success: "bg-accent/15 text-accent border-accent/20",
  warning: "bg-secondary/15 text-secondary border-secondary/20",
  error: "bg-destructive/10 text-destructive border-destructive/20",
  info: "bg-primary/10 text-primary border-primary/20",
  default: "bg-muted text-muted-foreground border-border"
};
const dotColors = {
  success: "bg-accent",
  warning: "bg-secondary",
  error: "bg-destructive",
  info: "bg-primary",
  default: "bg-muted-foreground"
};
function Badge({
  children,
  variant = "default",
  className = "",
  dot = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${variantClasses[variant]} ${className}`,
      children: [
        dot && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`,
            "aria-hidden": "true"
          }
        ),
        children
      ]
    }
  );
}
export {
  Badge as B
};
