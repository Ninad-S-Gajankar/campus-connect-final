import { c as createLucideIcon, b as useUI, r as reactExports, j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
import { B as Badge } from "./CampusBadge-CTArW4kE.js";
import { B as Button } from "./CampusButton-DMSIN2t5.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { P as PageHeader } from "./PageHeader-Phty1uEO.js";
import { s as stationeryItems } from "./index-C4jMyBpZ.js";
import { X } from "./x-ALhsUHO1.js";
import { M as Minus, P as Plus } from "./plus-BqTfSro8.js";
import { B as BookOpen } from "./book-open-CrG-nRYC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
];
const Printer = createLucideIcon("printer", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
const FILTER_CHIPS = [
  "All Items",
  "Notebooks",
  "Pens",
  "Folders",
  "Files",
  "Staplers",
  "Correction",
  "Erasers",
  "Other"
];
function ProductCard({
  item,
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-card rounded-2xl border border-border overflow-hidden flex flex-col border-t-4 border-t-green-500 shadow-sm",
      "data-ocid": `stationery.item.${index}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col flex-1 gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground uppercase tracking-wide", children: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200", children: "In Stock" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground leading-tight", children: item.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-snug", children: item.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
          item.stock,
          " in stock"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-bold text-green-600", children: [
            "₹",
            item.price
          ] }),
          quantity === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onAdd,
              className: "px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 active:scale-95 transition-smooth",
              "data-ocid": `stationery.add_button.${index}`,
              children: "Add"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onDecrease,
                className: "w-6 h-6 rounded-md bg-muted flex items-center justify-center hover:bg-border transition-smooth",
                "data-ocid": `stationery.decrease_button.${index}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 12 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground w-5 text-center", children: quantity }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onIncrease,
                className: "w-6 h-6 rounded-md bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-smooth",
                "data-ocid": `stationery.increase_button.${index}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 })
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function Stationery({ onBack }) {
  const { setHideBottomNav } = useUI();
  const [activeFilter, setActiveFilter] = reactExports.useState("All Items");
  const [cart, setCart] = reactExports.useState({});
  const [cartOpen, setCartOpen] = reactExports.useState(false);
  const [orderPlaced, setOrderPlaced] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setHideBottomNav(cartOpen);
  }, [cartOpen, setHideBottomNav]);
  reactExports.useEffect(() => {
    return () => setHideBottomNav(false);
  }, [setHideBottomNav]);
  const filtered = activeFilter === "All Items" ? stationeryItems : stationeryItems.filter((i) => i.category === activeFilter);
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartEntries = Object.entries(cart).filter(([, qty]) => qty > 0).map(([id, qty]) => ({
    item: stationeryItems.find((i) => i.id === id),
    qty
  })).filter((e) => e.item);
  const grandTotal = cartEntries.reduce(
    (sum, { item, qty }) => sum + item.price * qty,
    0
  );
  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const increase = (id) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const decrease = (id) => setCart((c) => {
    const next = { ...c, [id]: (c[id] ?? 0) - 1 };
    if (next[id] <= 0) delete next[id];
    return next;
  });
  const handlePlaceOrder = () => {
    setCart({});
    setCartOpen(false);
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 bg-card border-b border-border sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-smooth",
          "aria-label": "Back to Book Mart",
          "data-ocid": "stationery.back_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, className: "text-foreground" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-bold text-foreground leading-tight", children: "Campus Book Mart" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: "Notebooks, pens, stationery — pick up at the counter" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 overflow-x-auto scrollbar-hide", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 w-max", children: FILTER_CHIPS.map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveFilter(chip),
        className: `px-3 py-1.5 text-xs font-semibold rounded-full border whitespace-nowrap transition-smooth ${activeFilter === chip ? "bg-green-600 text-white border-green-600" : "bg-card text-muted-foreground border-border hover:border-green-400"}`,
        "data-ocid": `stationery.filter_${chip.toLowerCase().replace(/\s+/g, "_")}`,
        children: chip
      },
      chip
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-28 grid grid-cols-2 gap-3", children: filtered.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCard,
      {
        item,
        quantity: cart[item.id] ?? 0,
        onAdd: () => addToCart(item.id),
        onIncrease: () => increase(item.id),
        onDecrease: () => decrease(item.id),
        index: idx + 1
      },
      item.id
    )) }),
    orderPlaced && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2 max-w-[360px] w-[90%] animate-slide-up",
        "data-ocid": "stationery.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "✅" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "Order placed!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-90", children: "Ready in 15–30 mins. Pickup at Block D counter." })
          ] })
        ]
      }
    ),
    totalItems > 0 && !cartOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setCartOpen(true),
        className: "fixed bottom-20 right-4 z-40 w-14 h-14 rounded-full bg-green-600 text-white shadow-lg flex items-center justify-center hover:bg-green-700 active:scale-95 transition-smooth",
        "data-ocid": "stationery.cart_open_button",
        "aria-label": `Open cart — ${totalItems} items`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 22 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center", children: totalItems })
        ]
      }
    ),
    cartOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "fixed inset-0 bg-black/40 z-40 cursor-default",
          onClick: () => setCartOpen(false),
          "aria-label": "Close cart",
          tabIndex: -1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-xl max-w-[430px] mx-auto",
          "data-ocid": "stationery.cart_sheet",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 pt-4 pb-3 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-bold text-foreground", children: [
                "Your Cart (",
                totalItems,
                " item",
                totalItems !== 1 ? "s" : "",
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setCartOpen(false),
                  className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-smooth",
                  "aria-label": "Close cart",
                  "data-ocid": "stationery.cart_close_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 flex flex-col gap-3 max-h-[40vh] overflow-y-auto", children: cartEntries.map(({ item, qty }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3",
                "data-ocid": `stationery.cart_item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      "₹",
                      item.price,
                      " each"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => decrease(item.id),
                        className: "w-7 h-7 rounded-lg bg-muted flex items-center justify-center hover:bg-border transition-smooth",
                        "data-ocid": `stationery.cart_decrease.${idx + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 12 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground w-5 text-center", children: qty }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => increase(item.id),
                        className: "w-7 h-7 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-smooth",
                        "data-ocid": `stationery.cart_increase.${idx + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-green-600 w-14 text-right", children: [
                    "₹",
                    item.price * qty
                  ] })
                ]
              },
              item.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-6 pt-3 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: "Grand Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-green-600", children: [
                  "₹",
                  grandTotal
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handlePlaceOrder,
                  className: "w-full py-3.5 rounded-2xl bg-green-600 text-white text-sm font-bold hover:bg-green-700 active:scale-[0.98] transition-smooth",
                  "data-ocid": "stationery.place_order_button",
                  children: [
                    "Place Order · ₹",
                    grandTotal
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
const COLOR_PRICE = 5;
const BW_PRICE = 1.5;
const BINDING_PRICES = {
  none: 0,
  spiral: 30,
  staple: 10
};
function XeroxView({ onBack }) {
  const [fileName, setFileName] = reactExports.useState("");
  const [pages, setPages] = reactExports.useState(10);
  const [copies, setCopies] = reactExports.useState(1);
  const [colorMode, setColorMode] = reactExports.useState("bw");
  const [binding, setBinding] = reactExports.useState("none");
  const [ordered, setOrdered] = reactExports.useState(false);
  const pricePerPage = colorMode === "color" ? COLOR_PRICE : BW_PRICE;
  const printCost = pages * copies * pricePerPage;
  const bindingCost = BINDING_PRICES[binding] * copies;
  const total = printCost + bindingCost;
  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => setOrdered(false), 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 bg-card border-b border-border sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-smooth",
          "aria-label": "Back to Book Mart",
          "data-ocid": "xerox.back_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, className: "text-foreground" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-bold text-foreground leading-tight", children: "Xerox & Printing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Upload, configure & order prints" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 flex flex-col gap-4 pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padding: "lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-foreground mb-3", children: "Upload Document" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setFileName("Assignment_Unit4_Notes.pdf"),
            className: "w-full border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-smooth",
            "data-ocid": "xerox.file_upload_button",
            children: fileName ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 28, className: "text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground text-center break-all", children: fileName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "success", children: "Ready to print" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 28, className: "text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tap to upload PDF or document" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "PDF, DOCX, JPG · Max 50MB" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padding: "lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-foreground mb-4", children: "Print Options" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mb-4", children: [
          { label: "Copies", value: copies, set: setCopies },
          { label: "Pages", value: pages, set: setPages }
        ].map(({ label, value, set }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-1.5", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => set(Math.max(1, value - 1)),
                className: "w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-bold hover:bg-border transition-smooth",
                "data-ocid": `xerox.${label.toLowerCase()}_decrease`,
                children: "−"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground w-6 text-center", children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => set(value + 1),
                className: "w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold hover:bg-primary/90 transition-smooth",
                "data-ocid": `xerox.${label.toLowerCase()}_increase`,
                children: "+"
              }
            )
          ] })
        ] }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2", children: "Print Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["bw", "color"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setColorMode(m),
              className: `flex-1 py-2 text-sm font-semibold rounded-xl border transition-smooth ${colorMode === m ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/50"}`,
              "data-ocid": `xerox.color_mode_${m}`,
              children: m === "bw" ? "B&W · ₹1.5/pg" : "Color · ₹5/pg"
            },
            m
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2", children: "Binding" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [
            ["none", "None"],
            ["staple", "Staple +₹10"],
            ["spiral", "Spiral +₹30"]
          ].map(([b, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setBinding(b),
              className: `flex-1 py-2 text-xs font-semibold rounded-xl border transition-smooth ${binding === b ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/50"}`,
              "data-ocid": `xerox.binding_${b}`,
              children: label
            },
            b
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { padding: "md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 16, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-foreground", children: "Price Estimate" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              pages,
              " pages × ",
              copies,
              " copies × ₹",
              pricePerPage
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "₹",
              printCost
            ] })
          ] }),
          binding !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "Binding (",
              binding,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "₹",
              bindingCost
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-2 border-t border-border font-bold text-base mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
              "₹",
              total
            ] })
          ] })
        ] })
      ] }),
      ordered ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-4 bg-accent/10 rounded-2xl border border-accent/20 animate-slide-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "✅" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Order placed!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Collect from Counter 1 in ~20 min" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          fullWidth: true,
          size: "lg",
          onClick: handleOrder,
          "data-ocid": "xerox.place_order_button",
          children: [
            "Place Print Order · ₹",
            total
          ]
        }
      )
    ] })
  ] });
}
function BookMart() {
  const [view, setView] = reactExports.useState("landing");
  if (view === "xerox") return /* @__PURE__ */ jsxRuntimeExports.jsx(XeroxView, { onBack: () => setView("landing") });
  if (view === "stationery")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Stationery, { onBack: () => setView("landing") });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Campus Book Mart", back: true, backTo: "/dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-3 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Printing, xerox, and stationery — all in one place" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-2 pb-4 flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setView("xerox"),
          className: "w-full text-left rounded-2xl border-2 border-green-200 bg-green-50 p-4 hover:border-green-400 hover:shadow-md transition-smooth active:scale-[0.98]",
          "data-ocid": "bookmart.xerox_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 24, className: "text-green-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-green-600 text-white", children: "B&W from ₹1.5/page" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-foreground mb-1", children: "Xerox & Printing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Upload documents and get them printed at the campus store" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ["B&W ₹1.5/page", "Color ₹5/page", "Spiral & Tape Binding"].map(
              (tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium border border-green-200",
                  children: tag
                },
                tag
              )
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setView("stationery"),
          className: "w-full text-left rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 hover:border-blue-400 hover:shadow-md transition-smooth active:scale-[0.98]",
          "data-ocid": "bookmart.stationery_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 24, className: "text-blue-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600 text-white", children: "14+ products" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-foreground mb-1", children: "Stationery Items" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Notebooks, pens, folders, and more — ready for quick pickup" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ["Notebooks & Pens", "Folders & Files", "Quick Pickup"].map(
              (tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium border border-blue-200",
                  children: tag
                },
                tag
              )
            ) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-4 px-4 py-3 rounded-xl bg-muted/60 border border-border flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🕐" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-snug", children: [
        "Orders ready within",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "15–30 minutes" }),
        " · Pickup at campus store,",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Block D" })
      ] })
    ] })
  ] });
}
export {
  BookMart as default
};
