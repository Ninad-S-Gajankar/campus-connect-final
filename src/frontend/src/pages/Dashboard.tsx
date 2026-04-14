import { useNavigate } from "@tanstack/react-router";
import {
  Bell,
  BookOpen,
  CalendarDays,
  MapPin,
  Search,
  UserCircle2,
  UtensilsCrossed,
} from "lucide-react";
import { Badge } from "../components/ui/CampusBadge";
import { Card } from "../components/ui/CampusCard";
import { notifications, userProfile } from "../data";
import { useCart } from "../hooks/useCart";

const services = [
  {
    id: "food-court",
    label: "Food Court",
    sublabel: "Vidhyarthi Khana",
    icon: UtensilsCrossed,
    route: "/food-court",
    color: "bg-primary/10 text-primary",
  },
  {
    id: "book-mart",
    label: "Book Mart",
    sublabel: "Campus print & bind",
    icon: BookOpen,
    route: "/book-mart",
    color: "bg-secondary/10 text-secondary",
  },
  {
    id: "event-booking",
    label: "Event Booking",
    sublabel: "Register for events",
    icon: CalendarDays,
    route: "/event-booking",
    color: "bg-accent/10 text-accent",
  },
  {
    id: "profile",
    label: "Profile",
    sublabel: "View your profile",
    icon: UserCircle2,
    route: "/profile",
    color: "bg-primary/10 text-primary",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="gradient-hero px-5 pt-12 pb-8">
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-white/70 text-sm font-body mb-0.5">
              Welcome back,
            </p>
            <h1 className="text-2xl font-bold font-display text-white leading-tight">
              {userProfile.name.split(" ")[0]}! 👋
            </h1>
            {unreadCount > 0 && (
              <p className="text-white/60 text-xs mt-1">
                You have {unreadCount} new notification
                {unreadCount > 1 ? "s" : ""} 🔔
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => navigate({ to: "/notifications" })}
            className="relative p-2 rounded-xl bg-white/20 text-white transition-smooth hover:bg-white/30"
            aria-label="Notifications"
            data-ocid="dashboard-notifications-btn"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center pulse-soft">
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            placeholder="Search services, food, events…"
            className="w-full pl-10 pr-4 py-2.5 bg-card rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            data-ocid="dashboard-search"
          />
        </div>
      </div>

      {/* Services grid */}
      <div className="px-4 py-5 -mt-4">
        <Card padding="none" className="overflow-hidden animate-slide-up">
          <div className="grid grid-cols-2 divide-x divide-y divide-border">
            {services.map(
              ({ id, label, sublabel, icon: Icon, route, color }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => navigate({ to: route })}
                  className="flex flex-col items-center gap-3 p-5 hover:bg-muted/50 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  data-ocid={`service-${id}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-foreground">{label}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                      {sublabel}
                    </p>
                  </div>
                </button>
              ),
            )}
          </div>
        </Card>

        {/* Quick access */}
        <div className="mt-5">
          <h2 className="text-sm font-bold text-foreground mb-3">
            Quick Access
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/queue-status" })}
              className="flex-1 flex items-center gap-3 p-3 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-smooth"
              data-ocid="quick-queue-status"
            >
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs font-bold text-foreground">
                  Queue Status
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Position #3 in queue
                </p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: "/cart" })}
              className="flex-1 flex items-center gap-3 p-3 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-smooth"
              data-ocid="quick-cart"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 relative">
                <UtensilsCrossed size={18} className="text-primary" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center float-animation">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs font-bold text-foreground">My Cart</p>
                <p className="text-[11px] text-muted-foreground">
                  {totalItems > 0
                    ? `${totalItems} item${totalItems > 1 ? "s" : ""} added`
                    : "Cart is empty"}
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent notification preview */}
        {notifications.slice(0, 1).map((notif) => (
          <div key={notif.id} className="mt-5">
            <h2 className="text-sm font-bold text-foreground mb-3">
              Latest Update
            </h2>
            <button
              type="button"
              onClick={() => navigate({ to: "/notifications" })}
              className="w-full flex gap-3 items-start p-4 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-smooth text-left"
              data-ocid="dashboard-latest-notif"
            >
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 text-base">
                🎉
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-xs font-bold text-foreground truncate">
                    {notif.title}
                  </p>
                  {!notif.read && (
                    <Badge variant="info" className="shrink-0">
                      New
                    </Badge>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground leading-snug line-clamp-2">
                  {notif.message}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
