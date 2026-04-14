import { ChevronLeft, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useUI } from "../context/UIContext";
import { stationeryItems } from "../data";
import type { StationeryCategory, StationeryItem } from "../types";

const FILTER_CHIPS: (StationeryCategory | "All Items")[] = [
  "All Items",
  "Notebooks",
  "Pens",
  "Folders",
  "Files",
  "Staplers",
  "Correction",
  "Erasers",
  "Other",
];

interface Props {
  onBack: () => void;
}

function ProductCard({
  item,
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
  index,
}: {
  item: StationeryItem;
  quantity: number;
  onAdd: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
  index: number;
}) {
  return (
    <div
      className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col border-t-4 border-t-green-500 shadow-sm"
      data-ocid={`stationery.item.${index}`}
    >
      <div className="p-3 flex flex-col flex-1 gap-1">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground uppercase tracking-wide">
            {item.category}
          </span>
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
            In Stock
          </span>
        </div>
        <h3 className="text-sm font-bold text-foreground leading-tight">
          {item.name}
        </h3>
        <p className="text-[11px] text-muted-foreground leading-snug">
          {item.description}
        </p>
        <p className="text-[10px] text-muted-foreground">
          {item.stock} in stock
        </p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-base font-bold text-green-600">
            ₹{item.price}
          </span>
          {quantity === 0 ? (
            <button
              type="button"
              onClick={onAdd}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 active:scale-95 transition-smooth"
              data-ocid={`stationery.add_button.${index}`}
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={onDecrease}
                className="w-6 h-6 rounded-md bg-muted flex items-center justify-center hover:bg-border transition-smooth"
                data-ocid={`stationery.decrease_button.${index}`}
              >
                <Minus size={12} />
              </button>
              <span className="text-sm font-bold text-foreground w-5 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={onIncrease}
                className="w-6 h-6 rounded-md bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-smooth"
                data-ocid={`stationery.increase_button.${index}`}
              >
                <Plus size={12} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Stationery({ onBack }: Props) {
  const { setHideBottomNav } = useUI();
  const [activeFilter, setActiveFilter] = useState<
    StationeryCategory | "All Items"
  >("All Items");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Sync bottom nav visibility with cart panel open state
  useEffect(() => {
    setHideBottomNav(cartOpen);
  }, [cartOpen, setHideBottomNav]);

  // Reset on unmount
  useEffect(() => {
    return () => setHideBottomNav(false);
  }, [setHideBottomNav]);

  const filtered =
    activeFilter === "All Items"
      ? stationeryItems
      : stationeryItems.filter((i) => i.category === activeFilter);

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartEntries = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({
      item: stationeryItems.find((i) => i.id === id)!,
      qty,
    }))
    .filter((e) => e.item);
  const grandTotal = cartEntries.reduce(
    (sum, { item, qty }) => sum + item.price * qty,
    0,
  );

  const addToCart = (id: string) =>
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const increase = (id: string) =>
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const decrease = (id: string) =>
    setCart((c) => {
      const next = { ...c, [id]: (c[id] ?? 0) - 1 };
      if (next[id] <= 0) delete next[id];
      return next;
    });

  const handlePlaceOrder = () => {
    setCart({});
    setCartOpen(false);
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Sub-header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-card border-b border-border sticky top-0 z-10">
        <button
          type="button"
          onClick={onBack}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-smooth"
          aria-label="Back to Book Mart"
          data-ocid="stationery.back_button"
        >
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-base font-bold text-foreground leading-tight">
            Campus Book Mart
          </h1>
          <p className="text-xs text-muted-foreground truncate">
            Notebooks, pens, stationery — pick up at the counter
          </p>
        </div>
      </div>

      {/* Filter chips */}
      <div className="px-4 py-3 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 w-max">
          {FILTER_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setActiveFilter(chip)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full border whitespace-nowrap transition-smooth ${
                activeFilter === chip
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-card text-muted-foreground border-border hover:border-green-400"
              }`}
              data-ocid={`stationery.filter_${chip.toLowerCase().replace(/\s+/g, "_")}`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="px-4 pb-28 grid grid-cols-2 gap-3">
        {filtered.map((item, idx) => (
          <ProductCard
            key={item.id}
            item={item}
            quantity={cart[item.id] ?? 0}
            onAdd={() => addToCart(item.id)}
            onIncrease={() => increase(item.id)}
            onDecrease={() => decrease(item.id)}
            index={idx + 1}
          />
        ))}
      </div>

      {/* Success toast */}
      {orderPlaced && (
        <div
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2 max-w-[360px] w-[90%] animate-slide-up"
          data-ocid="stationery.success_state"
        >
          <span className="text-lg">✅</span>
          <div>
            <p className="text-sm font-bold">Order placed!</p>
            <p className="text-xs opacity-90">
              Ready in 15–30 mins. Pickup at Block D counter.
            </p>
          </div>
        </div>
      )}

      {/* Floating cart button */}
      {totalItems > 0 && !cartOpen && (
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="fixed bottom-20 right-4 z-40 w-14 h-14 rounded-full bg-green-600 text-white shadow-lg flex items-center justify-center hover:bg-green-700 active:scale-95 transition-smooth"
          data-ocid="stationery.cart_open_button"
          aria-label={`Open cart — ${totalItems} items`}
        >
          <ShoppingBag size={22} />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
            {totalItems}
          </span>
        </button>
      )}

      {/* Cart bottom sheet */}
      {cartOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 bg-black/40 z-40 cursor-default"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            tabIndex={-1}
          />
          <div
            className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-xl max-w-[430px] mx-auto"
            data-ocid="stationery.cart_sheet"
          >
            {/* Sheet header */}
            <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-border">
              <h2 className="text-base font-bold text-foreground">
                Your Cart ({totalItems} item{totalItems !== 1 ? "s" : ""})
              </h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-smooth"
                aria-label="Close cart"
                data-ocid="stationery.cart_close_button"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items list */}
            <div className="px-4 py-3 flex flex-col gap-3 max-h-[40vh] overflow-y-auto">
              {cartEntries.map(({ item, qty }, idx) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3"
                  data-ocid={`stationery.cart_item.${idx + 1}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ₹{item.price} each
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => decrease(item.id)}
                      className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center hover:bg-border transition-smooth"
                      data-ocid={`stationery.cart_decrease.${idx + 1}`}
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-bold text-foreground w-5 text-center">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => increase(item.id)}
                      className="w-7 h-7 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-smooth"
                      data-ocid={`stationery.cart_increase.${idx + 1}`}
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="text-sm font-bold text-green-600 w-14 text-right">
                    ₹{item.price * qty}
                  </span>
                </div>
              ))}
            </div>

            {/* Grand total + CTA */}
            <div className="px-4 pb-6 pt-3 border-t border-border">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-foreground">
                  Grand Total
                </span>
                <span className="text-lg font-bold text-green-600">
                  ₹{grandTotal}
                </span>
              </div>
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full py-3.5 rounded-2xl bg-green-600 text-white text-sm font-bold hover:bg-green-700 active:scale-[0.98] transition-smooth"
                data-ocid="stationery.place_order_button"
              >
                Place Order · ₹{grandTotal}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
