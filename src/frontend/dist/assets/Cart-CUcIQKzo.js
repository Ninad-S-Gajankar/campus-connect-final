import { c as createLucideIcon, u as useNavigate, j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
import { B as Button } from "./CampusButton-DMSIN2t5.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { P as PageHeader } from "./PageHeader-Phty1uEO.js";
import { u as useCart } from "./useCart-B49stm3y.js";
import { M as Minus, P as Plus } from "./plus-BqTfSro8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function Cart() {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, updateQuantity, clearCart } = useCart();
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "My Cart", back: true, backTo: "/food-court" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center px-8 text-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-6xl", children: "🛒" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground font-display", children: "Your cart is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add items from the food court to get started" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => navigate({ to: "/food-court" }),
            "data-ocid": "empty-cart-cta",
            children: "Browse Food Court"
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: `Cart (${totalItems} item${totalItems > 1 ? "s" : ""})`,
        back: true,
        backTo: "/food-court",
        rightAction: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: clearCart,
            className: "text-xs text-destructive font-semibold hover:underline",
            "data-ocid": "clear-cart-btn",
            children: "Clear all"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4 flex flex-col gap-3 pb-32", children: items.map(({ foodItem, quantity }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        padding: "sm",
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center text-2xl shrink-0", children: "🍽️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground truncate", children: foodItem.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary font-semibold mt-0.5", children: [
              "₹",
              foodItem.price,
              " each"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => updateQuantity(foodItem.id, quantity - 1),
                className: "w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-smooth",
                "aria-label": "Decrease quantity",
                "data-ocid": `cart-decrease-${foodItem.id}`,
                children: quantity === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13, className: "text-destructive" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 13 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 text-center text-sm font-bold text-foreground", children: quantity }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => updateQuantity(foodItem.id, quantity + 1),
                className: "w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-smooth",
                "aria-label": "Increase quantity",
                "data-ocid": `cart-increase-${foodItem.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-foreground w-14 text-right shrink-0", children: [
            "₹",
            foodItem.price * quantity
          ] })
        ]
      },
      foodItem.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-[72px] left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-card border-t border-border px-4 pt-3 pb-4 z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          "₹",
          totalPrice
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Platform fee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-accent", children: "Free" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base font-bold mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
          "₹",
          totalPrice
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          fullWidth: true,
          size: "lg",
          onClick: () => {
            clearCart();
            navigate({ to: "/order-confirmation" });
          },
          "data-ocid": "checkout-btn",
          children: [
            "Place Order · ₹",
            totalPrice
          ]
        }
      )
    ] })
  ] });
}
export {
  Cart as default
};
