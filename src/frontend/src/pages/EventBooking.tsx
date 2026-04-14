import { Calendar, Check, ChevronRight, MapPin, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "../components/ui/CampusBadge";
import { Button } from "../components/ui/CampusButton";
import { Card } from "../components/ui/CampusCard";
import { PageHeader } from "../components/ui/PageHeader";
import { useUI } from "../context/UIContext";
import { events } from "../data";
import type { Event } from "../types";

// ─── Registration Form Types ──────────────────────────────────────────────────

interface RegistrationForm {
  name: string;
  gmail: string;
  whatsapp: string;
  usn: string;
  section: string;
}

interface FormErrors {
  name?: string;
  gmail?: string;
  whatsapp?: string;
  usn?: string;
  section?: string;
}

const emptyForm: RegistrationForm = {
  name: "",
  gmail: "",
  whatsapp: "",
  usn: "",
  section: "",
};

// ─── Validation ───────────────────────────────────────────────────────────────

function validateForm(form: RegistrationForm): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.gmail.trim()) {
    errors.gmail = "Gmail is required";
  } else if (!form.gmail.toLowerCase().endsWith("@gmail.com")) {
    errors.gmail = "Must be a valid @gmail.com address";
  }
  if (!form.whatsapp.trim()) {
    errors.whatsapp = "WhatsApp number is required";
  } else if (!/^\d{10}$/.test(form.whatsapp.replace(/\s/g, ""))) {
    errors.whatsapp = "Enter a valid 10-digit number";
  }
  if (!form.usn.trim()) {
    errors.usn = "USN is required";
  } else if (
    !/^[0-9][A-Z]{2}\d{2}[A-Z]{2}\d{3}$/.test(form.usn.toUpperCase())
  ) {
    errors.usn = "Enter valid USN (e.g. 1BM22CS001)";
  }
  if (!form.section.trim()) {
    errors.section = "Section is required";
  } else if (!/^[A-Za-z]$/.test(form.section.trim())) {
    errors.section = "Enter a single section letter (A, B, C…)";
  }
  return errors;
}

// ─── Registration Modal ───────────────────────────────────────────────────────

function RegistrationModal({
  event,
  onClose,
  onSuccess,
}: {
  event: Event;
  onClose: () => void;
  onSuccess: (eventTitle: string) => void;
}) {
  const [form, setForm] = useState<RegistrationForm>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationForm, boolean>>
  >({});

  const set =
    (field: keyof RegistrationForm) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (touched[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: validateForm({ ...form, [field]: e.target.value })[field],
        }));
      }
    };

  const blur = (field: keyof RegistrationForm) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateForm(form)[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      (Object.keys(emptyForm) as (keyof RegistrationForm)[]).map((k) => [
        k,
        true,
      ]),
    );
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    onSuccess(event.title);
  };

  const inputClass = (field: keyof RegistrationForm) =>
    `w-full px-3 py-2.5 bg-input border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
      errors[field] && touched[field]
        ? "border-destructive focus:ring-destructive/40"
        : "border-border"
    }`;

  return (
    <div
      className="fixed inset-0 bg-foreground/40 z-50 flex items-end justify-center"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      role="presentation"
    >
      <dialog
        open
        className="bg-card w-full max-w-[430px] rounded-t-3xl p-5 animate-slide-up m-0 border-0 bottom-0 fixed inset-x-0 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        aria-label="Event Registration"
        data-ocid="event-registration.dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-bold text-foreground font-display">
            Register for Event
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-muted transition-smooth"
            aria-label="Close"
            data-ocid="event-registration.close_button"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mb-4 line-clamp-1">
          {event.title}
        </p>

        {/* Gradient divider */}
        <div className="w-full h-1 gradient-primary rounded-full mb-5" />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          noValidate
        >
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="reg-name"
              className="text-xs font-semibold text-foreground"
            >
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              id="reg-name"
              type="text"
              placeholder="e.g. Nischal Kumar"
              value={form.name}
              onChange={set("name")}
              onBlur={blur("name")}
              className={inputClass("name")}
              data-ocid="event-registration.name"
              autoComplete="name"
            />
            {errors.name && touched.name && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="event-registration.name.field_error"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Gmail */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="reg-gmail"
              className="text-xs font-semibold text-foreground"
            >
              Gmail Address <span className="text-destructive">*</span>
            </label>
            <input
              id="reg-gmail"
              type="email"
              placeholder="e.g. nischal@gmail.com"
              value={form.gmail}
              onChange={set("gmail")}
              onBlur={blur("gmail")}
              className={inputClass("gmail")}
              data-ocid="event-registration.gmail"
              autoComplete="email"
            />
            {errors.gmail && touched.gmail && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="event-registration.gmail.field_error"
              >
                {errors.gmail}
              </p>
            )}
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="reg-whatsapp"
              className="text-xs font-semibold text-foreground"
            >
              WhatsApp Number <span className="text-destructive">*</span>
            </label>
            <input
              id="reg-whatsapp"
              type="tel"
              placeholder="10-digit number (e.g. 9876543210)"
              value={form.whatsapp}
              onChange={set("whatsapp")}
              onBlur={blur("whatsapp")}
              className={inputClass("whatsapp")}
              data-ocid="event-registration.whatsapp"
              maxLength={10}
              autoComplete="tel"
            />
            {errors.whatsapp && touched.whatsapp && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="event-registration.whatsapp.field_error"
              >
                {errors.whatsapp}
              </p>
            )}
          </div>

          {/* USN + Section row */}
          <div className="flex gap-3">
            <div className="flex-1 flex flex-col gap-1 min-w-0">
              <label
                htmlFor="reg-usn"
                className="text-xs font-semibold text-foreground"
              >
                USN <span className="text-destructive">*</span>
              </label>
              <input
                id="reg-usn"
                type="text"
                placeholder="1BM22CS001"
                value={form.usn}
                onChange={(e) =>
                  set("usn")({
                    ...e,
                    target: {
                      ...e.target,
                      value: e.target.value.toUpperCase(),
                    },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
                onBlur={blur("usn")}
                className={`${inputClass("usn")} font-mono tracking-wide uppercase`}
                data-ocid="event-registration.usn"
                maxLength={10}
              />
              {errors.usn && touched.usn && (
                <p
                  className="text-[11px] text-destructive"
                  data-ocid="event-registration.usn.field_error"
                >
                  {errors.usn}
                </p>
              )}
            </div>
            <div className="w-24 flex flex-col gap-1">
              <label
                htmlFor="reg-section"
                className="text-xs font-semibold text-foreground"
              >
                Section <span className="text-destructive">*</span>
              </label>
              <input
                id="reg-section"
                type="text"
                placeholder="A / B"
                value={form.section}
                onChange={(e) =>
                  set("section")({
                    ...e,
                    target: {
                      ...e.target,
                      value: e.target.value.toUpperCase(),
                    },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
                onBlur={blur("section")}
                className={`${inputClass("section")} text-center uppercase`}
                data-ocid="event-registration.section"
                maxLength={1}
              />
              {errors.section && touched.section && (
                <p
                  className="text-[11px] text-destructive"
                  data-ocid="event-registration.section.field_error"
                >
                  {errors.section}
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-1">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              fullWidth
              data-ocid="event-registration.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              fullWidth
              loading={submitting}
              data-ocid="event-registration.submit_button"
            >
              {submitting ? "Registering…" : "Register Now"}
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

// ─── Event Card ───────────────────────────────────────────────────────────────

function EventCard({
  event,
  onBook,
}: { event: Event; onBook: (event: Event) => void }) {
  const spotsLow = event.availableSeats < 30;
  const emojis: Record<string, string> = {
    Technical: "💻",
    Cultural: "🎭",
    Workshop: "🛠️",
    Sports: "⚽",
  };

  return (
    <Card
      padding="none"
      hoverable
      className="overflow-hidden"
      onClick={() => onBook(event)}
      data-ocid={`event-card-${event.id}`}
    >
      <div className="flex gap-0">
        <div className="w-20 bg-primary/10 flex flex-col items-center justify-center gap-1 shrink-0 p-3">
          <span className="text-2xl">{emojis[event.category] ?? "🎪"}</span>
          <Badge
            variant={spotsLow ? "warning" : "success"}
            className="text-[10px] px-1.5"
          >
            {spotsLow ? "Few left" : "Open"}
          </Badge>
        </div>
        <div className="flex-1 p-3 min-w-0">
          <p className="text-sm font-bold text-foreground line-clamp-1 mb-1">
            {event.title}
          </p>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-0.5">
            <Calendar size={11} />
            <span>
              {event.date} · {event.time}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-0.5">
            <MapPin size={11} />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Users size={11} />
              <span>{event.availableSeats} seats left</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-primary">
              {event.price === 0 ? "Free" : `₹${event.price}`}
              <ChevronRight size={13} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EventBooking() {
  const { setHideBottomNav } = useUI();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Sync bottom nav visibility with modal open state
  useEffect(() => {
    setHideBottomNav(selectedEvent !== null);
  }, [selectedEvent, setHideBottomNav]);

  // Reset on unmount
  useEffect(() => {
    return () => setHideBottomNav(false);
  }, [setHideBottomNav]);

  const handleSuccess = (eventTitle: string) => {
    setSelectedEvent(null);
    setSuccessMessage(
      `Registration successful! You have registered for "${eventTitle}"`,
    );
    setTimeout(() => setSuccessMessage(null), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Event Booking" back backTo="/dashboard" />

      <div className="px-4 py-4 flex flex-col gap-3 pb-8">
        {successMessage && (
          <div
            className="flex items-start gap-2 p-4 bg-accent/10 rounded-2xl border border-accent/20 animate-slide-up"
            data-ocid="event-booking.success_state"
          >
            <Check size={18} className="text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-foreground">
                Registration Confirmed!
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {successMessage}
              </p>
            </div>
          </div>
        )}

        {events.map((event) => (
          <EventCard key={event.id} event={event} onBook={setSelectedEvent} />
        ))}
      </div>

      {selectedEvent && (
        <RegistrationModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
}
