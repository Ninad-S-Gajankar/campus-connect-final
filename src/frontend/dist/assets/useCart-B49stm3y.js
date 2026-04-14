import { r as reactExports, a as CartContext } from "./index-3Ay7Q_rP.js";
function useCart() {
  const ctx = reactExports.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
export {
  useCart as u
};
