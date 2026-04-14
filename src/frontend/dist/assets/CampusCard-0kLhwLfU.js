import { j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
const paddingClasses = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-5"
};
function Card({
  children,
  hoverable = false,
  padding = "md",
  className = "",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `
        bg-card rounded-2xl border border-border shadow-card
        ${paddingClasses[padding]}
        ${hoverable ? "transition-smooth hover:shadow-elevated hover:-translate-y-0.5 cursor-pointer" : ""}
        ${className}
      `,
      ...props,
      children
    }
  );
}
export {
  Card as C
};
