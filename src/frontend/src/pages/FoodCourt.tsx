import { useNavigate } from "@tanstack/react-router";
import { Minus, Plus, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/CampusBadge";
import { Card } from "../components/ui/CampusCard";
import { PageHeader } from "../components/ui/PageHeader";
import { foodItems } from "../data";
import { useCart } from "../hooks/useCart";
import type { FoodItem } from "../types";

const categories = [
  "All",
  "Burgers",
  "South Indian",
  "North Indian",
  "Rice",
  "Beverages",
  "Snacks",
  "Street Food",
  "Continental",
];

function FoodCard({ item }: { item: FoodItem }) {
  const { addItem, items, updateQuantity } = useCart();
  const cartItem = items.find((ci) => ci.foodItem.id === item.id);
  const qty = cartItem?.quantity ?? 0;

  const imgPlaceholders: Record<string, string> = {
    f1: "🍔",
    f2: "🥞",
    f3: "🧆",
    f4: "🍚",
    f5: "☕",
    f6: "🥟",
    f7: "🍛",
    f8: "🍝",
  };

  return (
    <Card padding="none" className="overflow-hidden animate-slide-up">
      <div className="flex gap-0">
        {/* Image placeholder */}
        <div className="w-24 h-24 bg-muted/60 flex items-center justify-center text-3xl shrink-0">
          {imgPlaceholders[item.id] ?? "🍽️"}
        </div>
        <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-1 mb-0.5">
              <p className="text-sm font-bold text-foreground leading-tight truncate pr-1">
                {item.name}
              </p>
              <Badge
                variant={item.available ? "success" : "warning"}
                dot
                className="shrink-0"
              >
                {item.available ? "Available" : "Sold out"}
              </Badge>
            </div>
            <p className="text-[11px] text-muted-foreground line-clamp-1">
              {item.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-base font-bold text-primary">₹{item.price}</p>
            {item.available &&
              (qty === 0 ? (
                <button
                  type="button"
                  onClick={() => addItem(item)}
                  className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-smooth active:scale-90"
                  aria-label={`Add ${item.name} to cart`}
                  data-ocid={`add-to-cart-${item.id}`}
                >
                  <Plus size={16} />
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, qty - 1)}
                    className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-smooth active:scale-90"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-bold text-foreground w-4 text-center">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => addItem(item)}
                    className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-smooth active:scale-90"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function FoodCourt() {
  const navigate = useNavigate();
  const { totalItems, totalPrice } = useCart();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = foodItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Food Court"
        back
        backTo="/dashboard"
        rightAction={
          <button
            type="button"
            onClick={() => navigate({ to: "/cart" })}
            className="relative p-2 rounded-xl text-foreground hover:bg-muted transition-smooth"
            aria-label="View cart"
            data-ocid="food-court-cart-btn"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center float-animation">
                {totalItems}
              </span>
            )}
          </button>
        }
      />

      <div className="px-4 py-3">
        {/* Search */}
        <div className="relative mb-3">
          <Search
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            placeholder="Search food items…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            data-ocid="food-search"
          />
        </div>

        {/* Category filter */}
        <div
          className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide mb-4"
          data-ocid="category-filter"
        >
          {categories
            .filter(
              (c) => c === "All" || foodItems.some((f) => f.category === c),
            )
            .map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
                data-ocid={`category-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
        </div>

        {/* Items */}
        <div className="flex flex-col gap-3 pb-4">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-4xl mb-3">🍽️</p>
              <p className="text-sm font-semibold text-foreground">
                No items found
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Try adjusting your search or category
              </p>
            </div>
          ) : (
            filtered.map((item) => <FoodCard key={item.id} item={item} />)
          )}
        </div>
      </div>

      {/* Floating cart */}
      {totalItems > 0 && (
        <div className="fixed bottom-[80px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[398px] z-30">
          <button
            type="button"
            onClick={() => navigate({ to: "/cart" })}
            className="w-full gradient-primary text-primary-foreground rounded-2xl px-4 py-3.5 flex items-center justify-between shadow-elevated hover:opacity-95 transition-smooth active:scale-95"
            data-ocid="floating-cart-btn"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-sm font-bold">
                {totalItems}
              </span>
              <span className="text-sm font-semibold">View Cart</span>
            </div>
            <span className="text-sm font-bold">₹{totalPrice}</span>
          </button>
        </div>
      )}
    </div>
  );
}
