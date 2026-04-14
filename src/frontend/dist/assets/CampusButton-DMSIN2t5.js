import { j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
const variantClasses = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-card active:scale-95",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-card active:scale-95",
  ghost: "bg-transparent text-foreground hover:bg-muted active:scale-95",
  danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-card active:scale-95",
  outline: "bg-transparent border border-primary text-primary hover:bg-primary/10 active:scale-95"
};
const sizeClasses = {
  sm: "px-3 py-1.5 text-sm rounded-xl gap-1.5",
  md: "px-4 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-5 py-3 text-base rounded-2xl gap-2"
};
function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}) {
  const isDisabled = disabled || loading;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: `
        inline-flex items-center justify-center font-semibold
        transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        ${variantClasses[variant]} ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `,
      disabled: isDisabled,
      ...props,
      children: [
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }) : leftIcon,
        children,
        !loading && rightIcon
      ]
    }
  );
}
export {
  Button as B
};
