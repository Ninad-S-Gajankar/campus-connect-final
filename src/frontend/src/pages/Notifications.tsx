import { Bell, CalendarDays, Check, Info, Package, Tag } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/CampusBadge";
import { Card } from "../components/ui/CampusCard";
import { PageHeader } from "../components/ui/PageHeader";
import { notifications as allNotifications } from "../data";
import type { Notification } from "../types";

const typeIcons: Record<
  Notification["type"],
  React.FC<{ size?: number; className?: string }>
> = {
  order: Package,
  event: CalendarDays,
  system: Info,
  promo: Tag,
};

const typeBadge: Record<
  Notification["type"],
  "success" | "info" | "default" | "warning"
> = {
  order: "success",
  event: "info",
  system: "default",
  promo: "warning",
};

const typeLabels: Record<Notification["type"], string> = {
  order: "Order",
  event: "Event",
  system: "System",
  promo: "Promo",
};

export default function Notifications() {
  const [notifs, setNotifs] = useState(allNotifications);

  const markAllRead = () =>
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id: string) =>
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  const unreadCount = notifs.filter((n) => !n.read).length;

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Notifications"
        back
        backTo="/dashboard"
        rightAction={
          unreadCount > 0 ? (
            <button
              type="button"
              onClick={markAllRead}
              className="text-xs text-primary font-semibold hover:underline"
              data-ocid="mark-all-read-btn"
            >
              Mark all read
            </button>
          ) : undefined
        }
      />

      {unreadCount > 0 && (
        <div className="px-4 pt-3">
          <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-xl border border-primary/20">
            <Bell size={15} className="text-primary shrink-0 pulse-soft" />
            <p className="text-xs font-semibold text-primary">
              {unreadCount} unread notification{unreadCount > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      )}

      <div className="px-4 py-4 flex flex-col gap-3 pb-8">
        {notifs.map((notif) => {
          const Icon = typeIcons[notif.type];
          return (
            <Card
              key={notif.id}
              padding="md"
              className={`flex gap-3 transition-smooth cursor-pointer ${!notif.read ? "border-primary/30 bg-primary/5" : ""}`}
              onClick={() => markRead(notif.id)}
              data-ocid={`notif-${notif.id}`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  !notif.read ? "bg-primary/15" : "bg-muted"
                }`}
              >
                <Icon
                  size={17}
                  className={
                    !notif.read ? "text-primary" : "text-muted-foreground"
                  }
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <p
                    className={`text-sm font-bold leading-tight truncate ${!notif.read ? "text-foreground" : "text-foreground/80"}`}
                  >
                    {notif.title}
                  </p>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Badge variant={typeBadge[notif.type]}>
                      {typeLabels[notif.type]}
                    </Badge>
                    {notif.read && (
                      <Check size={13} className="text-muted-foreground" />
                    )}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                  {notif.message}
                </p>
                <p className="text-[10px] text-muted-foreground mt-1.5">
                  {notif.timestamp}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
