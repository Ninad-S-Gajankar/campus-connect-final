import { useNavigate } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../components/ui/CampusButton";
import { Card } from "../components/ui/CampusCard";
import { PageHeader } from "../components/ui/PageHeader";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, updateQuantity, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <PageHeader title="My Cart" back backTo="/food-court" />
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-4">
          <p className="text-6xl">🛒</p>
          <p className="text-lg font-bold text-foreground font-display">
            Your cart is empty
          </p>
          <p className="text-sm text-muted-foreground">
            Add items from the food court to get started
          </p>
          <Button
            onClick={() => navigate({ to: "/food-court" })}
            data-ocid="empty-cart-cta"
          >
            Browse Food Court
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title={`Cart (${totalItems} item${totalItems > 1 ? "s" : ""})`}
        back
        backTo="/food-court"
        rightAction={
          <button
            type="button"
            onClick={clearCart}
            className="text-xs text-destructive font-semibold hover:underline"
            data-ocid="clear-cart-btn"
          >
            Clear all
          </button>
        }
      />

      <div className="px-4 py-4 flex flex-col gap-3 pb-32">
        {items.map(({ foodItem, quantity }) => (
          <Card
            key={foodItem.id}
            padding="sm"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center text-2xl shrink-0">
              🍽️
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground truncate">
                {foodItem.name}
              </p>
              <p className="text-xs text-primary font-semibold mt-0.5">
                ₹{foodItem.price} each
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => updateQuantity(foodItem.id, quantity - 1)}
                className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-smooth"
                aria-label="Decrease quantity"
                data-ocid={`cart-decrease-${foodItem.id}`}
              >
                {quantity === 1 ? (
                  <Trash2 size={13} className="text-destructive" />
                ) : (
                  <Minus size={13} />
                )}
              </button>
              <span className="w-5 text-center text-sm font-bold text-foreground">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => updateQuantity(foodItem.id, quantity + 1)}
                className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-smooth"
                aria-label="Increase quantity"
                data-ocid={`cart-increase-${foodItem.id}`}
              >
                <Plus size={13} />
              </button>
            </div>
            <p className="text-sm font-bold text-foreground w-14 text-right shrink-0">
              ₹{foodItem.price * quantity}
            </p>
          </Card>
        ))}
      </div>

      {/* Bottom summary */}
      <div className="fixed bottom-[72px] left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-card border-t border-border px-4 pt-3 pb-4 z-20">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold">₹{totalPrice}</span>
        </div>
        <div className="flex justify-between text-sm mb-3">
          <span className="text-muted-foreground">Platform fee</span>
          <span className="font-semibold text-accent">Free</span>
        </div>
        <div className="flex justify-between text-base font-bold mb-4">
          <span>Total</span>
          <span className="text-primary">₹{totalPrice}</span>
        </div>
        <Button
          fullWidth
          size="lg"
          onClick={() => {
            clearCart();
            navigate({ to: "/order-confirmation" });
          }}
          data-ocid="checkout-btn"
        >
          Place Order · ₹{totalPrice}
        </Button>
      </div>
    </div>
  );
}
