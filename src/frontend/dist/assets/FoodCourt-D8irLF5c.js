import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
import { B as Badge } from "./CampusBadge-CTArW4kE.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { P as PageHeader } from "./PageHeader-Phty1uEO.js";
import { f as foodItems } from "./index-C4jMyBpZ.js";
import { u as useCart } from "./useCart-B49stm3y.js";
import { S as Search } from "./search-D7kHzjSm.js";
import { P as Plus, M as Minus } from "./plus-BqTfSro8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode);
const categories = [
  "All",
  "Burgers",
  "South Indian",
  "North Indian",
  "Rice",
  "Beverages",
  "Snacks",
  "Street Food",
  "Continental"
];
function FoodCard({ item }) {
  const { addItem, items, updateQuantity } = useCart();
  const cartItem = items.find((ci) => ci.foodItem.id === item.id);
  const qty = (cartItem == null ? void 0 : cartItem.quantity) ?? 0;
  const imgPlaceholders = {
    f1: "🍔",
    f2: "🥞",
    f3: "🧆",
    f4: "🍚",
    f5: "☕",
    f6: "🥟",
    f7: "🍛",
    f8: "🍝"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { padding: "none", className: "overflow-hidden animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 bg-muted/60 flex items-center justify-center text-3xl shrink-0", children: imgPlaceholders[item.id] ?? "🍽️" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-3 flex flex-col justify-between min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-1 mb-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground leading-tight truncate pr-1", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: item.available ? "success" : "warning",
              dot: true,
              className: "shrink-0",
              children: item.available ? "Available" : "Sold out"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground line-clamp-1", children: item.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-bold text-primary", children: [
          "₹",
          item.price
        ] }),
        item.available && (qty === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => addItem(item),
            className: "w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-smooth active:scale-90",
            "aria-label": `Add ${item.name} to cart`,
            "data-ocid": `add-to-cart-${item.id}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => updateQuantity(item.id, qty - 1),
              className: "w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-smooth active:scale-90",
              "aria-label": "Decrease quantity",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 14 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground w-4 text-center", children: qty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => addItem(item),
              className: "w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-smooth active:scale-90",
              "aria-label": "Increase quantity",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 })
            }
          )
        ] }))
      ] })
    ] })
  ] }) });
}
function FoodCourt() {
  const navigate = useNavigate();
  const { totalItems, totalPrice } = useCart();
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = foodItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Food Court",
        back: true,
        backTo: "/dashboard",
        rightAction: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: "/cart" }),
            className: "relative p-2 rounded-xl text-foreground hover:bg-muted transition-smooth",
            "aria-label": "View cart",
            "data-ocid": "food-court-cart-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 20 }),
              totalItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center float-animation", children: totalItems })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 15,
            className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "search",
            placeholder: "Search food items…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "w-full pl-9 pr-4 py-2 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
            "data-ocid": "food-search"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex gap-2 overflow-x-auto pb-1 scrollbar-hide mb-4",
          "data-ocid": "category-filter",
          children: categories.filter(
            (c) => c === "All" || foodItems.some((f) => f.category === c)
          ).map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(cat),
              className: `shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"}`,
              "data-ocid": `category-${cat.toLowerCase()}`,
              children: cat
            },
            cat
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 pb-4", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-3", children: "🍽️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "No items found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Try adjusting your search or category" })
      ] }) : filtered.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(FoodCard, { item }, item.id)) })
    ] }),
    totalItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-[80px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[398px] z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => navigate({ to: "/cart" }),
        className: "w-full gradient-primary text-primary-foreground rounded-2xl px-4 py-3.5 flex items-center justify-between shadow-elevated hover:opacity-95 transition-smooth active:scale-95",
        "data-ocid": "floating-cart-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-sm font-bold", children: totalItems }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "View Cart" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold", children: [
            "₹",
            totalPrice
          ] })
        ]
      }
    ) })
  ] });
}
export {
  FoodCourt as default
};
